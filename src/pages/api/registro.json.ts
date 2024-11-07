import type { APIRoute } from "astro";
import { Usuario, db } from "astro:db";
import sanitize from "sanitize-html";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NvitaAuth } from "../../firebase/config";

export const POST: APIRoute = async ({ request }) => {
  const { email, password, ruta, tipoInvitacion } = await request.json();

  try {
    // creo usuario
    await createUserWithEmailAndPassword(NvitaAuth, email, password);

    // creo usuario en la db
    const req = await db.insert(Usuario).values({
      email: sanitize(email),
      ruta: sanitize(ruta),
      tipo: sanitize(tipoInvitacion),
    });

    return new Response(
      JSON.stringify({
        message: "Cuenta registrada en firebase",
        message2: req,
        success: true,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
};
