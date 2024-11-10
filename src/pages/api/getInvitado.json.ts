import type { APIRoute } from "astro";
import { Invitados, Usuario, db, eq, desc, and } from "astro:db";
import { NvitaAuth } from "../../firebase/config";
const usuarioEmail = NvitaAuth.currentUser?.email;




export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const uid = url.searchParams.get('uid');
  
  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    // 
    // se debe enviar una url como esta: http://localhost:4321/api/getInvitado.json?id=1&uid=1
    //donde el id de la invitación debe de existir con el id del usuario que la creo
    const response = await db.select()
    .from(Invitados)
    .where(and(eq(Invitados.id, Number(id)), eq(Invitados.usuarioId, Number(uid)))
    )
   if (response.length === 0) {
    return new Response(JSON.stringify({ error: 'No invitado found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(response), {
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
