import type { APIRoute } from "astro";
import { db, Usuario, Sesion, eq } from "astro:db";
import sanitize from "sanitize-html";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { email, password, ruta, tipoInvitacion } = await request.json();

    if (!email || !password || !ruta || !tipoInvitacion) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Crear usuario usando la API REST de Firebase (stateless)
    const apiKey = import.meta.env.SECRET_APIKEY;
    const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    const authResponse = await fetch(signUpUrl, {
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
      const errMsg = authData.error?.message || "Error al crear la cuenta en Firebase.";
      return new Response(
        JSON.stringify({ error: errMsg }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const verifiedEmail = authData.email;
    const firebaseUid = authData.localId;

    // 2. Crear usuario en la base de datos local Astro DB
    await db.insert(Usuario).values({
      email: sanitize(verifiedEmail),
      ruta: sanitize(ruta),
      tipo: sanitize(tipoInvitacion),
      firebaseUid: firebaseUid,
      rol: "cliente",
    });

    // Como insertResult puede no retornar el ID insertado directamente dependiendo del dialecto de Astro DB,
    // vamos a recuperar el usuario recién creado para obtener su ID autoincremental
    const users = await db
      .select()
      .from(Usuario)
      .where(eq(Usuario.email, verifiedEmail));
    
    if (users.length === 0) {
      throw new Error("No se pudo recuperar el usuario registrado de la base de datos.");
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
      JSON.stringify({
        message: "Cuenta registrada con éxito",
        success: true,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error en registro:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Ocurrió un error inesperado al registrar el usuario.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
