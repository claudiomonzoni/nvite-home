import type { APIRoute } from "astro";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NvitaAuth } from "../../firebase/config";


export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();

  try {
    await createUserWithEmailAndPassword(NvitaAuth, email, password);
    return new Response(JSON.stringify({ message: "Cuenta registrada" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
};