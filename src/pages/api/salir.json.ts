import type { APIRoute } from "astro";
import { db, Sesion, eq } from "astro:db";

export const POST: APIRoute = async ({ cookies }) => {
  try {
    const sessionId = cookies.get("session_id")?.value;

    if (sessionId) {
      // 1. Eliminar la sesión de la base de datos
      await db.delete(Sesion).where(eq(Sesion.id, sessionId));
    }

    // 2. Eliminar la cookie de sesión
    cookies.delete("session_id", {
      path: "/",
    });

    return new Response(JSON.stringify({ message: "Sesión cerrada", success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return new Response(JSON.stringify({ error: "Ocurrió un error al cerrar la sesión." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};