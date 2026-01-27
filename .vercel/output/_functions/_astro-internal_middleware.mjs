import { d as defineMiddleware, s as sequence } from './chunks/index_G2Ke-KmO.mjs';
import { N as NvitaAuth } from './chunks/config_B1_1FYaz.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BpDf-4nN.mjs';
import 'kleur/colors';
import './chunks/astro/server_CohHI9gX.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const estaDentro = NvitaAuth.currentUser;
  const { pathname } = context.url;
  const method = context.request.method;
  if (pathname.startsWith("/_astro/") || pathname.startsWith("/_image") || // ✅ Permitir imágenes optimizadas por Astro
  pathname.match(/\.(png|jpe?g|gif|webp|svg|ico|css|js|woff2?|ttf|otf)$/)) {
    return next();
  }
  const rutasProtegidas = [
    /^\/api\/addInvitados\.json$/
    // Ruta para agregar invitados
  ];
  const esRutaProtegida = rutasProtegidas.some((ruta) => ruta.test(pathname));
  if (esRutaProtegida && (method === "POST" || method === "DELETE")) {
    if (!estaDentro) {
      return new Response(JSON.stringify({ message: "No autorizado" }), { status: 401 });
    }
    return next();
  }
  if (estaDentro && (pathname === "/panel/ingresar" || pathname === "/panel/registro")) {
    return context.redirect("/panel");
  }
  const rutasPublicas = [
    /^\/$/,
    // Página principal
    /^\/api\/getInvitados\.json$/,
    // Ruta específica de la API
    /^\/api\/getInvitado\.json$/,
    // Ruta para obtener invitado
    /^\/api\/\d+\.json$/,
    // Ruta para actualizar invitado (PATCH)
    /^\/panel\/ingresar$/,
    // Página de ingreso
    /^\/panel\/registro$/,
    // Página de registro
    /^\/keystatic(\/.*)?$/,
    // Cualquier subruta en /bodas
    /^\/bodas(\/.*)?$/,
    // Cualquier subruta en /bodas
    /^\/quince(\/.*)?$/,
    // Cualquier subruta en /bodas
    /^\/invitaciones-quince(\/.*)?$/,
    // Cualquier subruta en /quince
    /^\/invitaciones-pdf(\/.*)?$/,
    // Cualquier subruta en /quince
    /^\/nvitaciones(\/.*)?$/,
    // Cualquier subruta en /quince
    /^\/terminos-condiciones(\/.*)?$/,
    // Cualquier subruta en /terminos-condiciones
    /^\/404(\/.*)?$/
    // Cualquier subruta en /terminos-condiciones
  ];
  const esRutaPublica = rutasPublicas.some((ruta) => ruta.test(pathname));
  if (!estaDentro) {
    if (esRutaPublica || pathname.startsWith("/api/")) {
      return next();
    } else {
      return context.redirect("/panel/ingresar");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
