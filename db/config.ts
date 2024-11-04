
import { column, defineDb, defineTable } from "astro:db";

const Usuario = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
  },
});

const Invitados = defineTable({
  columns: {
    usuarioId: column.number({references: () => Usuario.columns.id}),
    nombre: column.text(),
    pases: column.number(),
    mesa: column.text({ optional: true }),
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
    fechaEnvitado: column.date({
      // default: new Date(),
    }),
    invitacionFamiliar: column.boolean({
      default: false,
    }),
    invitacionIndividual: column.boolean({
      default: false,
    }),
    invitacionGrupal: column.boolean({
      default: false,
    }),
  },
});

export default defineDb({
  tables: { Usuario, Invitados },
});