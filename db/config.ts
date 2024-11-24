
import { column, defineDb, defineTable } from "astro:db";

const Usuario = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    tipo: column.text({default: "bodas",}),
    ruta: column.text({}),
  },
});

const Invitados = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    usuarioId: column.number({references: () => Usuario.columns.id}),
    nombre: column.text(),
    pases: column.text(),
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
    tipoInvitacion: column.text({
      optional: true,
    }),
  },
});

export default defineDb({
  tables: { Usuario, Invitados },
});