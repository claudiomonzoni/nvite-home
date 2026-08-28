import { sqliteTable, text, integer, customType } from "drizzle-orm/sqlite-core";

export const customDate = (name: string) =>
  customType<{ data: Date; driverData: string | number }>({
    dataType() {
      return "text";
    },
    fromDriver(value: string | number | Date | null | undefined): any {
      if (value === null || value === undefined || value === "") return null;
      if (typeof value === "object" && value instanceof Date) return isNaN(value.getTime()) ? null : value;
      if (typeof value === "number") {
        const d = value < 1e11 ? new Date(value * 1000) : new Date(value);
        return isNaN(d.getTime()) ? null : d;
      }
      const d = new Date(value);
      return isNaN(d.getTime()) ? null : d;
    },
    toDriver(value: Date | string | null | undefined): any {
      if (value === null || value === undefined || value === "") return null;
      if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value.toISOString();
      }
      const d = new Date(value);
      return isNaN(d.getTime()) ? null : d.toISOString();
    },
  })(name);

export const Usuario = sqliteTable("Usuario", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  tipo: text("tipo").notNull().default("bodas"),
  ruta: text("ruta").notNull(),
  rol: text("rol").notNull().default("cliente"),
  firebaseUid: text("firebaseUid"),
  nombreEvento: text("nombreEvento"),
  fechaEvento: customDate("fechaEvento"),
  addonMesas: integer("addonMesas", { mode: "boolean" }).notNull().default(false),
  addonRecordatorios: integer("addonRecordatorios", { mode: "boolean" }).notNull().default(false),
  addonProveedores: integer("addonProveedores", { mode: "boolean" }).notNull().default(false),
});

export const Mesas = sqliteTable("Mesas", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  usuarioId: integer("usuarioId").references(() => Usuario.id).notNull(),
  nombre: text("nombre").notNull(),
  capacidad: integer("capacidad").notNull().default(10),
});

export const Invitados = sqliteTable("Invitados", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  uuid: text("uuid").unique(),
  usuarioId: integer("usuarioId").references(() => Usuario.id).notNull(),
  nombre: text("nombre").notNull(),
  pases: text("pases").notNull(),
  pasesOriginales: text("pasesOriginales"),
  mesa: text("mesa"),
  mesaId: integer("mesaId").references(() => Mesas.id),
  numeroWhats: integer("numeroWhats"),
  confirmado: integer("confirmado", { mode: "boolean" }).notNull().default(false),
  vip: integer("vip", { mode: "boolean" }).notNull().default(false),
  InvitacionEnviada: integer("InvitacionEnviada", { mode: "boolean" }).notNull().default(false),
  noAsiste: integer("noAsiste", { mode: "boolean" }).notNull().default(false),
  tipoInvitacion: text("tipoInvitacion"),
  mensajePersonalizado: text("mensajePersonalizado"),
  comentarios: text("comentarios"),
  personasNoAsisten: text("personasNoAsisten"),
  recordatorioEnviado: integer("recordatorioEnviado", { mode: "boolean" }).notNull().default(false),
  fechaRecordatorioEnviado: customDate("fechaRecordatorioEnviado"),
});

export const Sesion = sqliteTable("Sesion", {
  id: text("id").primaryKey(),
  usuarioId: integer("usuarioId").references(() => Usuario.id).notNull(),
  expiraAt: customDate("expiraAt").notNull(),
});

export const Proveedores = sqliteTable("Proveedores", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  usuarioId: integer("usuarioId").references(() => Usuario.id).notNull(),
  nombre: text("nombre").notNull(),
  categoria: text("categoria").notNull(),
  contactoNombre: text("contactoNombre"),
  contactoTelefono: text("contactoTelefono"),
  presupuestoTotal: integer("presupuestoTotal").notNull().default(0),
  fechaLimitePago: customDate("fechaLimitePago"),
  notas: text("notas"),
});

export const PagosProveedor = sqliteTable("PagosProveedor", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  proveedorId: integer("proveedorId").references(() => Proveedores.id).notNull(),
  monto: integer("monto").notNull(),
  fecha: customDate("fecha").notNull(),
  concepto: text("concepto"),
});

export const TareasProveedor = sqliteTable("TareasProveedor", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  proveedorId: integer("proveedorId").references(() => Proveedores.id).notNull(),
  titulo: text("titulo").notNull(),
  fechaLimite: customDate("fechaLimite"),
  completada: integer("completada", { mode: "boolean" }).notNull().default(false),
});
