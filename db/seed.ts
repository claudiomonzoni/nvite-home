import { Usuario, Invitados, db } from 'astro:db';

export default async function seed() {
  await db.insert(Usuario).values([
    {
      id: 1,
      email: "claudiomonzoni@hotmail.com",
      tipo: "boda",
      ruta: "/panchaypepe/"
    },
    {
      id: 2,
      email: "test1@test.com",
      tipo: "quince",
      ruta: "raulyrenan"
    },
    {
      id: 3,
      email: "testamesta@test.com",
      tipo: "cumple",
      ruta: "juliamontenegro"
    }
  ]);

  await db.insert(Invitados).values([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
