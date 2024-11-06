import type { APIRoute } from "astro";
import sanitize from "sanitize-html";

import { Invitados, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  try {
    const {
      usuarioId,
      nombre,
      pases,
      mesa,
      numeroWhats,
      confirmado,
      vip,
      InvitacionEnviada,
      noAsiste,
      fechaEnvitado,
      invitacionFamiliar,
      invitacionIndividual,
      invitacionGrupal,
    } = body;

    // comprobamos que los campos no esten vacios
    if (
      typeof nombre !== "string" ||
      typeof pases !== "string"
      // typeof usuarioId !== "number" ||
      // typeof confirmado !== "boolean" ||
      // typeof vip !== "boolean" ||
      // typeof InvitacionEnviada !== "boolean" ||
      // typeof noAsiste !== "boolean" ||
      // typeof fechaEnvitado !== "string" ||
      // typeof invitacionFamiliar !== "boolean" ||
      // typeof invitacionIndividual !== "boolean" ||
      // typeof invitacionGrupal !== "boolean"
    ) {
      throw new Error("llene los campos obligatorios");
    }
    // hacemos el reg en la bd
    const req = await db.insert(Invitados).values({
      usuarioId: sanitize(usuarioId),
      nombre: sanitize(nombre),
      pases: sanitize(pases),
      mesa: sanitize(mesa),
      numeroWhats: sanitize(numeroWhats),
      confirmado,
      vip,
      InvitacionEnviada,
      noAsiste,
      fechaEnvitado: sanitize(fechaEnvitado),
      invitacionFamiliar,
      invitacionIndividual,
      invitacionGrupal,
    });

    return new Response(
      JSON.stringify({
        message: req,
        success: true,
      }),
      {
        status: 201,
      }
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
          status: 404,
        }
      );
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
  }
};
