import type { APIRoute } from "astro";
import { LANG_COOKIE_NAME, SUPPORTED_LANGS, type Lang } from "../../i18n/detector";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const lang = body.lang as Lang;

    if (!lang || !SUPPORTED_LANGS.includes(lang)) {
      return new Response(
        JSON.stringify({ error: "Idioma no soportado" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Set cookie for 1 year
    cookies.set(LANG_COOKIE_NAME, lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      httpOnly: false, // Accessible from client-side script if needed
    });

    return new Response(
      JSON.stringify({ success: true, lang }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
