import type { APIRoute } from "astro";
import { Invitados, db, eq, and } from "astro:db";
import { NvitaAuth } from "../../firebase/config";
const usuarioEmail = NvitaAuth.currentUser?.email;
console.log(Invitados)

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
    // se debe enviar una url como esta: http://localhost:4321/quince/nvita-quince-lux?id=c3503cbe-205b-43a7-bb2a-77989eb48714&uid=3
    //donde el id de la invitación debe de existir con el uuid del usuario que la creo
    const response = await db.select()
    .from(Invitados)
    .where(and(eq(Invitados.uuid, id), eq(Invitados.usuarioId, Number(uid)))
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
