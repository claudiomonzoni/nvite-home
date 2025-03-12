import { Usuario, Invitados, db } from 'astro:db';

export default async function seed() {
  await db.insert(Usuario).values([
    {
      id: 1,
      email: "claudiomonzoni@hotmail.com",
      tipo: "bodas",
      ruta: "nvita-bodas-clasica"
    },
    {
      id: 2,
      email: "nvitaplusboda@nvita.me",
      tipo: "bodas",
      ruta: "nvita-bodas-lux"
    },
    {
      id: 3,
      email: "nvitacionluxquince@nvitaciones.com",
      tipo: "quince",
      ruta: "nvita-quince-lux"
    }
  ]);

  await db.insert(Invitados).values([
    {
      id: 1,
      usuarioId: 1,
      nombre: "Ricardo Salinas Pliego",
      pases: "3",
      mesa: "2",
      numeroWhats: 7551048550,
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
    {
      id: 4,
      usuarioId: 3,
      nombre: "Los Familiares de la quinceañera",
      pases: "20",
      mesa: "1",
      numeroWhats: 7551048550,
      confirmado: true,
      vip: false,
      InvitacionEnviada: false,
      noAsiste: false,
      tipoInvitacion: "grupal",
    },
  ]);
}
