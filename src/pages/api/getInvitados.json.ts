import type { APIRoute } from "astro";
import { Invitados, Usuario, db, eq, desc } from "astro:db";
import { NvitaAuth } from "../../firebase/config";


export const GET: APIRoute = async () => {
  try {
    const usuarioEmail = NvitaAuth.currentUser?.email;
    if(!usuarioEmail){
      return new Response(
        JSON.stringify({message: "usuario indefinido"}),
        {status: 401}
      )
    }
    //aqui hay que hacer el filtro por usuario
    const user = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail ));
    // Verificar que el usuario exista y tenga un ID válido
    if (!user.length || !user[0].id) {
      return new Response(
        JSON.stringify({ message: "Usuario no encontrado o sin ID válido" }), 
        { status: 404 }
      );
    }
    // Consulta para obtener los invitados del usuario
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
