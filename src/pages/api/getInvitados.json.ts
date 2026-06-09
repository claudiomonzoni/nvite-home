import type { APIRoute } from "astro";
import { Invitados, db, eq, desc } from "astro:db";

export const GET: APIRoute = async ({ locals }) => {
  const user = locals.user;

  // 1. Proteger el endpoint requiriendo sesión activa
  if (!user) {
    return new Response(
      JSON.stringify({ error: "No autorizado. Inicie sesión para ver los invitados." }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // 2. Retornar únicamente los invitados asociados al usuario autenticado (prevención de IDOR)
    const data = await db
      .select()
      .from(Invitados)
      .where(eq(Invitados.usuarioId, user.id))
      .orderBy(desc(Invitados.id));

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al obtener lista de invitados:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al obtener la lista de invitados.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
