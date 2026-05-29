import type { APIRoute } from "astro";
import { db, Invitados, eq, and } from "astro:db";

// DELETE is used by the authenticated panel to delete a guest by UUID
export const DELETE: APIRoute = async ({ params, locals }) => {
  const uuid = params.id;
  const user = locals.user;

  if (!user) {
    return new Response(
      JSON.stringify({ message: "No autorizado", success: false }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    if (!uuid) {
      throw new Error("no existe o fue enviado el uuid del usuario");
    }

    // Verificar que el invitado exista y pertenezca al usuario autenticado
    const guests = await db
      .select()
      .from(Invitados)
      .where(eq(Invitados.uuid, uuid));

    if (guests.length === 0) {
      return new Response(
        JSON.stringify({ message: "Invitado no encontrado", success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (guests[0].usuarioId !== user.id) {
      return new Response(
        JSON.stringify({ message: "No autorizado para borrar este invitado", success: false }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    await db
      .delete(Invitados)
      .where(eq(Invitados.uuid, uuid));

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: e instanceof Error ? e.message : "Error al borrar invitado",
        success: false,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

// PATCH is used by the authenticated panel to edit a guest's details by numeric ID
export const PATCH: APIRoute = async ({ params, request, locals }) => {
  const id = params.id;
  const user = locals.user;

  if (!user) {
    return new Response(
      JSON.stringify({ message: "No autorizado", success: false }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    if (!id) {
      throw new Error("No existe o fue enviado el id del usuario.");
    }

    // Verificar que el invitado exista y pertenezca al usuario autenticado
    const guests = await db
      .select()
      .from(Invitados)
      .where(eq(Invitados.id, Number(id)));

    if (guests.length === 0) {
      return new Response(
        JSON.stringify({ message: "Invitado no encontrado", success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    if (guests[0].usuarioId !== user.id) {
      return new Response(
        JSON.stringify({ message: "No autorizado para modificar este invitado", success: false }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    const {
      nombre,
      pases,
      mesa,
      numeroWhats,
      confirmado,
      vip,
      InvitacionEnviada,
      noAsiste,
      tipoInvitacion,
      mensajePersonalizado,
    } = await request.json();

    const updateFields = {
      ...(nombre && { nombre }),
      ...(pases && { pases: Math.trunc(Number(pases)).toString() }),
      ...(mesa !== undefined && { mesa }),
      ...(numeroWhats !== undefined && { numeroWhats }),
      ...(confirmado !== undefined && { confirmado }),
      ...(vip !== undefined && { vip }),
      ...(InvitacionEnviada !== undefined && { InvitacionEnviada }),
      ...(noAsiste !== undefined && { noAsiste }),
      ...(tipoInvitacion !== undefined && { tipoInvitacion }),
      ...(vip && mensajePersonalizado !== undefined && { mensajePersonalizado }),
    };

    await db
      .update(Invitados)
      .set(updateFields)
      .where(eq(Invitados.id, Number(id)));

    return new Response(
      JSON.stringify({
        message: "Invitado actualizado correctamente.",
        success: true,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: e instanceof Error ? e.message : "Ocurrió un error desconocido.",
        success: false,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};