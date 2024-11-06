import { Usuario, Invitados, db } from 'astro:db';

export default async function seed() {
  await db.insert(Usuario).values([
    {
      id: 1,
      email: "u9aB3@example.com",
      tipo: "boda",
      ruta: "/panchaypepe/"
    },
    {
      id: 2,
      email: "bq7p4@example.com",
      tipo: "quince",
      ruta: "/raulyrenan/"
    },
    {
      id: 3,
      email: "qg8wS@example.com",
      tipo: "cumple",
      ruta: "/lupeylalo/"
    }
  ]);

  await db.insert(Invitados).values([
    {
      usuarioId: 1,
      nombre: "Ricardo Salinas Pliego",
      pases: "3",
      mesa: "2",
      numeroWhats: 123456789,
      confirmado: true,
      vip: true,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "individual"
    },
    {
      usuarioId: 2,
      nombre: "Familia Slim",
      pases: "20",
      mesa: "1",
      numeroWhats: 323456782,
      confirmado: false,
      vip: true,
      InvitacionEnviada: false,
      noAsiste: false,
      tipoInvitacion: "familiar",

    },
    {
      usuarioId: 2,
      nombre: "Los gorrones",
      pases: "209",
      mesa: "11",
      numeroWhats: 34234582,
      confirmado: true,
      vip: false,
      InvitacionEnviada: false,
      noAsiste: false,
      tipoInvitacion: "grupal",
    },
  ]);
}
