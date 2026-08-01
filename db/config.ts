import { column, defineDb, defineTable, sql } from "astro:db";

const Usuario = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    tipo: column.text({default: "bodas",}),
    ruta: column.text({}),
    rol: column.text({ default: "cliente" }),
    firebaseUid: column.text({ optional: true }),
    nombreEvento: column.text({ optional: true }),
    fechaEvento: column.date({ optional: true }),
    addonMesas: column.boolean({ default: false }),
    addonRecordatorios: column.boolean({ default: false }),
    addonProveedores: column.boolean({ default: false }),
  },
});

const Mesas = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    usuarioId: column.number({ references: () => Usuario.columns.id }),
    nombre: column.text(),
    capacidad: column.number({ default: 10 }),
  },
});

const Invitados = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    uuid: column.text({ unique: true, optional: true }),
    usuarioId: column.number({references: () => Usuario.columns.id}),
    nombre: column.text(),
    pases: column.text(),
    pasesOriginales: column.text({ optional: true }),
    mesa: column.text({ optional: true }),
    mesaId: column.number({ references: () => Mesas.columns.id, optional: true }),
    numeroWhats: column.number({ optional: true }),
    confirmado: column.boolean({
      default: false,
    }),
    vip: column.boolean({
      default: false,
    }),
    InvitacionEnviada: column.boolean({
      default: false,
    }),
    noAsiste: column.boolean({
      default: false,
    }),
    tipoInvitacion: column.text({
      optional: true,
    }),
    mensajePersonalizado: column.text({ optional: true }),
    comentarios: column.text({ optional: true }),
    personasNoAsisten: column.text({ optional: true }),
    // Campos para sistema de recordatorios automáticos
    recordatorioEnviado: column.boolean({ default: false }),
    fechaRecordatorioEnviado: column.date({ optional: true }),
  },
});

const Sesion = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    usuarioId: column.number({ references: () => Usuario.columns.id }),
    expiraAt: column.date(),
  },
});

const Proveedores = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    usuarioId: column.number({ references: () => Usuario.columns.id }),
    nombre: column.text(),
    categoria: column.text(),
    contactoNombre: column.text({ optional: true }),
    contactoTelefono: column.text({ optional: true }),
    presupuestoTotal: column.number({ default: 0 }),
    fechaLimitePago: column.date({ optional: true }),
    notas: column.text({ optional: true }),
  },
});

const PagosProveedor = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    proveedorId: column.number({ references: () => Proveedores.columns.id }),
    monto: column.number(),
    fecha: column.date(),
    concepto: column.text({ optional: true }),
  },
});

const TareasProveedor = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    proveedorId: column.number({ references: () => Proveedores.columns.id }),
    titulo: column.text(),
    fechaLimite: column.date({ optional: true }),
    completada: column.boolean({ default: false }),
  },
});

export default defineDb({
  tables: { Usuario, Invitados, Sesion, Mesas, Proveedores, PagosProveedor, TareasProveedor },
});