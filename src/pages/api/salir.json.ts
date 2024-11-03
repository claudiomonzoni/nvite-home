import type { APIRoute } from "astro";
import { NvitaAuth } from "../../firebase/config";

export const POST: APIRoute = async () => {
    try {
        await NvitaAuth.signOut();
        return new Response(JSON.stringify({ message: "Sesión cerrada" }), {
            status: 200,
          });
        } catch (error) {
          return new Response(JSON.stringify({ error }), {
            status: 500,
          });
        }

}