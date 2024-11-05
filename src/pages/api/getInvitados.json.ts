import type { APIRoute } from "astro";
import { Invitados, db, eq } from "astro:db";
import { NvitaAuth } from "../../firebase/config";
const usuarioEmail = NvitaAuth.currentUser?.email;


export const GET: APIRoute = async () => {
  console.log(usuarioEmail)
  try {
    //aqui hay que hacer el filtro por usuario
    const data = await db.select().from(Invitados).where(eq(Invitados.usuarioId, 2 ));
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : "Ocurrio un error al obtener los invitados",
      })
    );
  }
};
