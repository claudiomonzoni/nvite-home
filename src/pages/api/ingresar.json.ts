import type { APIRoute } from "astro";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NvitaAuth } from "../../firebase/config";


export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();

  try {
    await signInWithEmailAndPassword(NvitaAuth, email, password);
    return new Response(JSON.stringify({ message: "Ingreso exitoso" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
};