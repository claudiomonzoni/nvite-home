import { d as defineMiddleware, s as sequence } from './chunks/index_DlMulNML.mjs';
import { N as NvitaAuth } from './chunks/config_B1_1FYaz.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D-jwUdGp.mjs';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const estaDentro = NvitaAuth.currentUser;
  const { pathname } = context.url;
  if (estaDentro && (pathname === "/panel/ingresar" || pathname === "/panel/registro")) {
    return context.redirect("/panel");
  }
  const rutasPublicas = [
    /^\/$/,
    // Página principal
    /^\/api\/getInvitados\.json$/,
    // Ruta específica de la API
    /^\/panel\/ingresar$/,
    // Página de ingreso
    /^\/panel\/registro$/,
    // Página de registro
    /^\/bodas(\/.*)?$/,
    // Cualquier subruta en /bodas
    /^\/quince(\/.*)?$/
    // Cualquier subruta en /quince
    // /^\/api\/.*$/                        // Todas las rutas de la API con método GET
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
