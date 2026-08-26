import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const isDev =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.DEV
    : process.env.NODE_ENV !== "production";

const useRemote =
  (typeof process !== "undefined" && process.env.USE_REMOTE_DB === "true") ||
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.USE_REMOTE_DB === "true");

// En desarrollo local siempre usamos el archivo local.db aislado, a menos que se indique explícitamente USE_REMOTE_DB=true
let url = "file:local.db";
let authToken: string | undefined = undefined;

if (!isDev || useRemote) {
  url =
    (typeof process !== "undefined" && (process.env.TURSO_DATABASE_URL || process.env.ASTRO_DB_REMOTE_URL)) ||
    (typeof import.meta !== "undefined" && import.meta.env && (import.meta.env.TURSO_DATABASE_URL || import.meta.env.ASTRO_DB_REMOTE_URL)) ||
    "file:local.db";

  authToken =
    (typeof process !== "undefined" && (process.env.TURSO_AUTH_TOKEN || process.env.ASTRO_DB_APP_TOKEN)) ||
    (typeof import.meta !== "undefined" && import.meta.env && (import.meta.env.TURSO_AUTH_TOKEN || import.meta.env.ASTRO_DB_APP_TOKEN));
}

const client = createClient({
  url,
  authToken,
});

// Auto-creación de tablas locales en desarrollo si se usa SQLite local
if (url.startsWith("file:")) {
  try {
    await client.executeMultiple(`
      CREATE TABLE IF NOT EXISTS Usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        tipo TEXT NOT NULL DEFAULT 'bodas',
        ruta TEXT NOT NULL,
        rol TEXT NOT NULL DEFAULT 'cliente',
        firebaseUid TEXT,
        nombreEvento TEXT,
        fechaEvento TEXT,
        addonMesas INTEGER NOT NULL DEFAULT 0,
        addonRecordatorios INTEGER NOT NULL DEFAULT 0,
        addonProveedores INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS Mesas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuarioId INTEGER NOT NULL REFERENCES Usuario(id),
        nombre TEXT NOT NULL,
        capacidad INTEGER NOT NULL DEFAULT 10
      );
      CREATE TABLE IF NOT EXISTS Invitados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uuid TEXT UNIQUE,
        usuarioId INTEGER NOT NULL REFERENCES Usuario(id),
        nombre TEXT NOT NULL,
        pases TEXT NOT NULL,
        pasesOriginales TEXT,
        mesa TEXT,
        mesaId INTEGER REFERENCES Mesas(id),
        numeroWhats INTEGER,
        confirmado INTEGER NOT NULL DEFAULT 0,
        vip INTEGER NOT NULL DEFAULT 0,
        InvitacionEnviada INTEGER NOT NULL DEFAULT 0,
        noAsiste INTEGER NOT NULL DEFAULT 0,
        tipoInvitacion TEXT,
        mensajePersonalizado TEXT,
        comentarios TEXT,
        personasNoAsisten TEXT,
        recordatorioEnviado INTEGER NOT NULL DEFAULT 0,
        fechaRecordatorioEnviado TEXT
      );
      CREATE TABLE IF NOT EXISTS Sesion (
        id TEXT PRIMARY KEY,
        usuarioId INTEGER NOT NULL REFERENCES Usuario(id),
        expiraAt TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS Proveedores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuarioId INTEGER NOT NULL REFERENCES Usuario(id),
        nombre TEXT NOT NULL,
        categoria TEXT NOT NULL,
        contactoNombre TEXT,
        contactoTelefono TEXT,
        presupuestoTotal INTEGER NOT NULL DEFAULT 0,
        fechaLimitePago TEXT,
        notas TEXT
      );
      CREATE TABLE IF NOT EXISTS PagosProveedor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        proveedorId INTEGER NOT NULL REFERENCES Proveedores(id),
        monto INTEGER NOT NULL,
        fecha TEXT NOT NULL,
        concepto TEXT
      );
      CREATE TABLE IF NOT EXISTS TareasProveedor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        proveedorId INTEGER NOT NULL REFERENCES Proveedores(id),
        titulo TEXT NOT NULL,
        fechaLimite TEXT,
        completada INTEGER NOT NULL DEFAULT 0
      );
    `);
  } catch (e) {
    // Silently continue if already initialized
  }
}

export const db = drizzle(client, { schema });
export * from "./schema";
export {
  eq,
  ne,
  gt,
  gte,
  lt,
  lte,
  and,
  or,
  not,
  like,
  ilike,
  inArray,
  notInArray,
  isNull,
  isNotNull,
  asc,
  desc,
  sql,
  count,
} from "drizzle-orm";
