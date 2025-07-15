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
      uuid: "00000000-0000-0000-0000-000000000001",
      usuarioId: 1,
      nombre: "Ricardo Salinas Pliego",
      pases: "3",
      mesa: "2",
      numeroWhats: 7551048550,
      confirmado: true,
      vip: true,
      mensajePersonalizado: "Estimado Ricardo, es un honor tenerte como invitado especial en nuestra boda. Tu presencia hará este día aún más memorable.",
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "individual"
    },
    {
      id: 2,
      uuid: "00000000-0000-0000-0000-000000000002",
      usuarioId: 2,
      nombre: "Familia Slim",
      pases: "20",
      mesa: "1",
      numeroWhats: 323456782,
      confirmado: false,
      vip: true,
      mensajePersonalizado: "Querida Familia Slim, su presencia en nuestra boda significa el mundo para nosotros. Será un honor compartir este momento tan especial con ustedes.",
      InvitacionEnviada: false,
      noAsiste: false,
      tipoInvitacion: "familiar"
    },
    {
      id: 3,
      uuid: "00000000-0000-0000-0000-000000000003",
      usuarioId: 2,
      nombre: "Los gorrones",
      pases: "209",
      mesa: "11",
      numeroWhats: 34234582,
      confirmado: true,
      vip: false,
      InvitacionEnviada: false,
      noAsiste: false,
      tipoInvitacion: "grupal"
    },
    {
      id: 4,
      uuid: "00000000-0000-0000-0000-000000000004",
      usuarioId: 3,
      nombre: "Los Familiares de la quinceañera",
      pases: "20",
      mesa: "1",
      numeroWhats: 7551048550,
      confirmado: true,
      vip: false,
      InvitacionEnviada: false,
      noAsiste: false,
      tipoInvitacion: "grupal"
    },
    {
      id: 5,
      uuid: "00000000-0000-0000-0000-000000000005",
      usuarioId: 1,
      nombre: "Familia Martínez",
      pases: "4",
      mesa: "3",
      numeroWhats: 7551234567,
      confirmado: true,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "familiar"
    },
    {
      id: 6,
      uuid: "00000000-0000-0000-0000-000000000006",
      usuarioId: 1,
      nombre: "Ana López y Familia",
      pases: "3",
      mesa: "4",
      numeroWhats: 7552345678,
      confirmado: false,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "familiar"
    },
    {
      id: 7,
      uuid: "00000000-0000-0000-0000-000000000007",
      usuarioId: 1,
      nombre: "Carlos Ramírez",
      pases: "2",
      mesa: "5",
      numeroWhats: 7553456789,
      confirmado: true,
      vip: true,
      mensajePersonalizado: "Querido Carlos, tu amistad es muy valiosa para nosotros. Estamos emocionados de compartir este día tan especial contigo.",
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "individual"
    },
    {
      id: 8,
      uuid: "00000000-0000-0000-0000-000000000008",
      usuarioId: 1,
      nombre: "Grupo de la Universidad",
      pases: "6",
      mesa: "6",
      numeroWhats: 7554567890,
      confirmado: true,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "grupal"
    },
    {
      id: 9,
      uuid: "00000000-0000-0000-0000-000000000009",
      usuarioId: 1,
      nombre: "Patricia Hernández",
      pases: "1",
      mesa: "7",
      numeroWhats: 7555678901,
      confirmado: false,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: true,
      tipoInvitacion: "individual"
    },
    {
      id: 10,
      uuid: "00000000-0000-0000-0000-000000000010",
      usuarioId: 1,
      nombre: "Familia González",
      pases: "5",
      mesa: "8",
      numeroWhats: 7556789012,
      confirmado: true,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "familiar"
    },
    {
      id: 11,
      uuid: "00000000-0000-0000-0000-000000000011",
      usuarioId: 1,
      nombre: "Roberto Díaz y Esposa",
      pases: "2",
      mesa: "9",
      numeroWhats: 7557890123,
      confirmado: true,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "familiar"
    },
    {
      id: 12,
      uuid: "00000000-0000-0000-0000-000000000012",
      usuarioId: 1,
      nombre: "María Torres",
      pases: "2",
      mesa: "10",
      numeroWhats: 7558901234,
      confirmado: false,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "individual"
    },
    {
      id: 13,
      uuid: "00000000-0000-0000-0000-000000000013",
      usuarioId: 1,
      nombre: "Familia Vargas",
      pases: "4",
      mesa: "11",
      numeroWhats: 7559012345,
      confirmado: true,
      vip: true,
      mensajePersonalizado: "Querida Familia Vargas, su presencia en nuestra boda es un regalo muy especial. Los esperamos con alegría en este día tan importante.",
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "familiar"
    },
    {
      id: 14,
      uuid: "00000000-0000-0000-0000-000000000014",
      usuarioId: 1,
      nombre: "Grupo del Trabajo",
      pases: "8",
      mesa: "12",
      numeroWhats: 7550123456,
      confirmado: true,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "grupal"
    }
  ]);
}