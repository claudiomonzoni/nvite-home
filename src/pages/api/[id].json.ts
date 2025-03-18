import type { APIRoute } from "astro";
import { db, Invitados, eq } from "astro:db";

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;
  try {
    if (!id) {
      throw new Error("no existe o fue enviado el id del usuario");
    }
    await db
      .delete(Invitados)
      .where(eq(Invitados.id, Number(id)));

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 404,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "Error al borrar invitado",
      success: false,
    }),
    {
      status: 404,
    }
  );
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = params.id;
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

  try {
    if (!id) {
      throw new Error("No existe o fue enviado el id del usuario.");
    }

    await db
      .update(Invitados)
      .set({
        nombre,
        pases: Math.trunc(Number(pases)).toString(),
        mesa,
        numeroWhats,
        confirmado,
        vip,
        InvitacionEnviada,
        noAsiste,
        tipoInvitacion,
        mensajePersonalizado: vip ? mensajePersonalizado : null,
      })
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
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  return new Response(
    JSON.stringify({
      message: "Ocurrió un error desconocido.",
      success: false,
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
};
