import type { APIRoute } from "astro";
import { Invitados, Usuario, db, eq, desc } from "astro:db";
import { NvitaAuth } from "../../firebase/config";
const usuarioEmail = NvitaAuth.currentUser?.email;


export const GET: APIRoute = async ({ params}) => {
  const id = params
  // if (isNaN(id)) {
  //   return new Response("Error: el ID debe ser un numero", { status: 400 });
  // }
  // const invitado = await db.select().from(Invitados).where(eq(Invitados.id, id))
  // if (!invitado) {
  //   return new Response("Error: no se encontro el invitado", { status: 404 });
  // }
  return new Response(JSON.stringify(id), { status: 200 });
};
