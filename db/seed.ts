import { Usuario, Invitados, Mesas, Proveedores, PagosProveedor, TareasProveedor, db } from 'astro:db';

export default async function seed() {
  await db.insert(Usuario).values([
    {
      id: 1,
      email: "claudiomonzoni@hotmail.com",
      tipo: "bodas",
      ruta: "nvita-bodas-clasica",
      rol: "admin",
      nombreEvento: "Boda de Claudio y Wendy",
      fechaEvento: new Date("2026-07-27"), // Faltan 12 días (Alerta preventiva 15 días)
      addonMesas: true,
      addonRecordatorios: false,
      addonProveedores: true,
    },
    {
      id: 2,
      email: "nvitaplusboda@nvita.me",
      tipo: "bodas",
      ruta: "nvita-bodas-lux",
      rol: "cliente",
      nombreEvento: "Enlace de Claudio y Wendy Plus",
      fechaEvento: new Date("2026-08-15"), // Faltan 31 días (Normal)
      addonMesas: false,
      addonRecordatorios: false,
      addonProveedores: false,
    },
    {
      id: 3,
      email: "nvitacionluxquince@nvitaciones.com",
      tipo: "quince",
      ruta: "nvita-quince-lux",
      rol: "cliente",
      nombreEvento: "XV de Sofía",
      fechaEvento: new Date("2026-07-19"), // Faltan 4 días (Alerta crítica 5 días)
      addonMesas: true,
      addonRecordatorios: false,
      addonProveedores: true,
    }
  ]);

  await db.insert(Mesas).values([
    {
      id: 1,
      usuarioId: 1,
      nombre: "Mesa Principal",
      capacidad: 10,
    },
    {
      id: 2,
      usuarioId: 1,
      nombre: "Mesa 1",
      capacidad: 8,
    },
    {
      id: 3,
      usuarioId: 1,
      nombre: "Mesa 2",
      capacidad: 8,
    },
    {
      id: 4,
      usuarioId: 3,
      nombre: "Mesa de Honor",
      capacidad: 12,
    }
  ]);

  await db.insert(Invitados).values([
    {
      id: 1,
      uuid: "00000000-0000-0000-0000-000000000001",
      usuarioId: 1,
      nombre: "Ricardo Salinas Pliego",
      pases: "3",
      mesa: "Mesa Principal",
      mesaId: 1,
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
      mesa: null,
      mesaId: null,
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
      mesa: null,
      mesaId: null,
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
      pases: "8",
      mesa: "Mesa de Honor",
      mesaId: 4,
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
      mesa: "Mesa 1",
      mesaId: 2,
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
      mesa: "Mesa 1",
      mesaId: 2,
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
      mesa: "Mesa Principal",
      mesaId: 1,
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
      mesa: null,
      mesaId: null,
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
      mesa: null,
      mesaId: null,
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
      mesa: "Mesa 2",
      mesaId: 3,
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
      mesa: "Mesa 2",
      mesaId: 3,
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
      mesa: null,
      mesaId: null,
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
      mesa: "Mesa Principal",
      mesaId: 1,
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
      mesa: null,
      mesaId: null,
      numeroWhats: 7550123456,
      confirmado: true,
      vip: false,
      InvitacionEnviada: true,
      noAsiste: false,
      tipoInvitacion: "grupal"
    }
  ]);

  await db.insert(Proveedores).values([
    {
      id: 1,
      usuarioId: 1,
      nombre: "Fotografía y Video Studio Lux",
      categoria: "Fotografía y Video",
      contactoNombre: "Carlos Mendoza",
      contactoTelefono: "5512345678",
      presupuestoTotal: 15000,
      fechaLimitePago: new Date("2026-07-30"),
      notas: "Incluye sesión de novios previa y álbum digital.",
    },
    {
      id: 2,
      usuarioId: 1,
      nombre: "DJ & Iluminación Pro",
      categoria: "Música / DJ",
      contactoNombre: "DJ Alex",
      contactoTelefono: "5598765432",
      presupuestoTotal: 12000,
      fechaLimitePago: new Date("2026-08-05"),
      notas: "Requiere conexión de 220v en la pista de baile.",
    }
  ]);

  await db.insert(PagosProveedor).values([
    {
      id: 1,
      proveedorId: 1,
      monto: 5000,
      fecha: new Date("2026-06-01"),
      concepto: "Anticipo 33%",
    },
    {
      id: 2,
      proveedorId: 1,
      monto: 5000,
      fecha: new Date("2026-07-01"),
      concepto: "Segundo abono",
    },
    {
      id: 3,
      proveedorId: 2,
      monto: 4000,
      fecha: new Date("2026-06-15"),
      concepto: "Anticipo apartado",
    }
  ]);

  await db.insert(TareasProveedor).values([
    {
      id: 1,
      proveedorId: 1,
      titulo: "Entregar lista de tomas requeridas",
      fechaLimite: new Date("2026-07-29"),
      completada: false,
    },
    {
      id: 2,
      proveedorId: 1,
      titulo: "Firmar contrato de servicio",
      fechaLimite: null,
      completada: true,
    },
    {
      id: 3,
      proveedorId: 2,
      titulo: "Definir canciones para vals y entrada",
      fechaLimite: new Date("2026-08-01"),
      completada: false,
    }
  ]);
}