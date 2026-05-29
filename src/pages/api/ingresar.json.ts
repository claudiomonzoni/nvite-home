import type { APIRoute } from "astro";
import { db, Usuario, Sesion, eq } from "astro:db";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email y contraseña son requeridos." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Iniciar sesión usando la API REST de Firebase (stateless)
    const apiKey = import.meta.env.SECRET_APIKEY;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    const authResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const authData = await authResponse.json();

    if (!authResponse.ok) {
      const errMsg = authData.error?.message || "Credenciales inválidas.";
      return new Response(
        JSON.stringify({ error: errMsg }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const verifiedEmail = authData.email;

    // 2. Verificar que el usuario exista en Astro DB
    const users = await db
      .select()
      .from(Usuario)
      .where(eq(Usuario.email, verifiedEmail));

    if (users.length === 0) {
      return new Response(
        JSON.stringify({ error: "El usuario no está registrado en la base de datos local." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = users[0];

    // 3. Crear sesión en la base de datos
    const sessionId = crypto.randomUUID();
    const expiraAt = new Date();
    expiraAt.setDate(expiraAt.getDate() + 7); // Expiración en 7 días

    await db.insert(Sesion).values({
      id: sessionId,
      usuarioId: user.id,
      expiraAt: expiraAt,
    });

    // 4. Guardar sesión en una cookie HTTP-only y Secure
    cookies.set("session_id", sessionId, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: expiraAt,
    });

    return new Response(
      JSON.stringify({ message: "Ingreso exitoso", success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error en login:", error);
    return new Response(
      JSON.stringify({ error: "Ocurrió un error inesperado al iniciar sesión." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};