import type { APIRoute } from "astro";
import { db, Invitados, eq } from "astro:db";
import sanitize from "sanitize-html";

export const PATCH: APIRoute = async ({ params, request }) => {
  const uuid = params.uuid;

  try {
    if (!uuid) {
      return new Response(
        JSON.stringify({ message: "UUID de invitación no proporcionado.", success: false }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await request.json();
    const { confirmado, noAsiste, pases, comentarios, personasNoAsisten } = body;

    // Verificar que el invitado exista
    const guests = await db
      .select()
      .from(Invitados)
      .where(eq(Invitados.uuid, uuid));

    if (guests.length === 0) {
      return new Response(
        JSON.stringify({ message: "Invitación no encontrada.", success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Preparar campos autorizados para actualizar (solo confirmación)
    const guest = guests[0];

    // Si pasesOriginales es null (registro anterior al feature), lo inicializamos
    // con el valor actual de pases ANTES de que lo sobreescribamos con los confirmados.
    const pasesOriginalesActual = guest.pasesOriginales ?? guest.pases;

    const updateFields: Record<string, any> = {
      ...(confirmado !== undefined && { confirmado: !!confirmado }),
      ...(noAsiste !== undefined && { noAsiste: !!noAsiste }),
      ...(pases !== undefined && { pases: Math.trunc(Number(pases)).toString() }),
      ...(comentarios !== undefined && { comentarios: sanitize(comentarios) }),
      ...(personasNoAsisten !== undefined && { personasNoAsisten: sanitize(personasNoAsisten) }),
      // Siempre preservar el valor original de pases asignados
      pasesOriginales: pasesOriginalesActual,
    };

    await db
      .update(Invitados)
      .set(updateFields)
      .where(eq(Invitados.uuid, uuid));

    return new Response(
      JSON.stringify({
        message: "Asistencia actualizada correctamente.",
        success: true,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al actualizar asistencia:", error);
    return new Response(
      JSON.stringify({
        message: "Ocurrió un error inesperado al procesar la confirmación.",
        success: false,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
