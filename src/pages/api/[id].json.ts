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
  } = await request.json();

  try {
    if (!id) {
      throw new Error("no existe o fue enviado el id del usuario");
    }
    await db
      .update(Invitados)
      .set({
        nombre,
        pases,
        mesa,
        numeroWhats,
        confirmado,
        vip,
        InvitacionEnviada,
        noAsiste,
        tipoInvitacion,
      })
      .where(eq(Invitados.id, Number(id)));
    return new Response(null, { status: 200 });
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
      message: "There was an unknown error",
      success: false,
    }),
    {
      status: 404,
    }
  );
};
