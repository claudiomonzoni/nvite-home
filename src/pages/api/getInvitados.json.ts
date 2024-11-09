import type { APIRoute } from "astro";
import { Invitados, Usuario, db, eq, desc } from "astro:db";
import { NvitaAuth } from "../../firebase/config";
const usuarioEmail = NvitaAuth.currentUser?.email;


export const GET: APIRoute = async () => {
  try {
    //aqui hay que hacer el filtro por usuario
    const user = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail ));
    const data = await db
    .select()
    .from(Invitados)
    .orderBy(desc(Invitados.id))
    .where(eq(Invitados.usuarioId, user[0].id )); 
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
