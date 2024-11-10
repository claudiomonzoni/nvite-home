import type { APIRoute } from "astro";
import { Invitados, Usuario, db, eq, desc } from "astro:db";
import { NvitaAuth } from "../../firebase/config";
const usuarioEmail = NvitaAuth.currentUser?.email;
const losu = [{"id":1,"usuarioId":1,"nombre":"Ricardo Salinas Pliego","pases":"3","mesa":"2","numeroWhats":123456789,"confirmado":true,"vip":true,"InvitacionEnviada":true,"noAsiste":false,"tipoInvitacion":"individual"}]



export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  
  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await db.select().from(Invitados).where(eq(Invitados.id, Number(id)))
   // Verifica si se encontró un resultado
   if (response.length === 0) {
    return new Response(JSON.stringify({ error: 'No invitado found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(response[0]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
