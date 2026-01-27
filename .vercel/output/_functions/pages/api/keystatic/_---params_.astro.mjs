import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
import '@keystatic/core/content-components';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return "Iv23liPtfwafd9g1zawQ";
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return "7e3f168bee9c750556e3fc731e6e82e17bd51c4b";
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return "edc9ed98ff9a1d9e2a6cec8bb18f646014387014b13fd32c79478e687a0584fd90feb2124492d5b8";
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "github",
    repo: {
      owner: "claudiomonzoni",
      name: "nvite-home"
    }
    //  kind: 'cloud',
    //},
    //cloud: {
    //  project: 'nvitaciones/nvitaciones',
  },
  collections: {
    bodas: collection({
      label: "Bodas",
      slugField: "titulo",
      path: "src/content/bodas/*",
      format: { contentField: "content" },
      schema: {
        // === INFORMACIÓN BÁSICA ===
        version: fields.text({ label: "Version" }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        titulo: fields.slug({ name: { label: "Título" } }),
        // === INFORMACIÓN DE LOS NOVIOS ===
        novios: fields.text({ label: "Novios" }),
        ellaIniciales: fields.text({ label: "Iniciales de ella" }),
        elIniciales: fields.text({ label: "Iniciales de él" }),
        fecha: fields.date({ label: "Fecha" }),
        // === CONTACTO ===
        whatsapp: fields.text({
          label: "WhatsApp del anfitrion",
          validation: {
            isRequired: true,
            length: { min: 10, max: 15 },
            pattern: { regex: /^[0-9]+$/, message: "Solo se permiten números" }
          }
        }),
        email: fields.text({ label: "Email del anfitrion", validation: { isRequired: false } }),
        // === FRASES ===
        frase_amor: fields.text({ label: "Frase de amor" }),
        // === PADRES ===
        padres: fields.object(
          {
            mamaNovia: fields.text({ label: "Mamá de la novia" }),
            papaNovia: fields.text({ label: "Papá de la novia" }),
            fotopapasNovia: fields.image({
              label: "Foto papás novia",
              directory: "public/bodas/padres",
              publicPath: "/bodas/padres/"
            }),
            mamaNovio: fields.text({ label: "Mamá del novio" }),
            papaNovio: fields.text({ label: "Papá del novio" }),
            fotopapasNovio: fields.image({
              label: "Foto papás novio",
              directory: "public/bodas/padres",
              publicPath: "/bodas/padres/"
            })
          },
          { label: "Padres" }
        ),
        // === IMÁGENES ===
        cover: fields.image({
          label: "Imagen de portada",
          directory: "public/bodas/covers",
          publicPath: "/bodas/covers/"
        }),
        // Audio MP3 para reproducir
        audioMusica: fields.file({
          label: "Audio de la celebración (MP3)",
          description: "Sube un archivo MP3 para reproducir en la invitación",
          directory: "public/bodas/audios",
          publicPath: "/bodas/audios/"
        }),
        galeria: fields.array(
          fields.image({
            label: "Imagen",
            directory: "public/bodas/galeria",
            publicPath: "/bodas/galeria/"
          }),
          {
            label: "Galería",
            itemLabel: () => "Imagen"
          }
        ),
        imagenesSolitarias: fields.array(
          fields.image({
            label: "Imagen solitaria",
            directory: "public/bodas/solitarias",
            publicPath: "/bodas/solitarias/"
          }),
          {
            label: "Imágenes solitarias",
            itemLabel: () => "Imagen solitaria",
            validation: { length: { max: 3 } }
          }
        ),
        // === EVENTOS ===
        ceremonia: fields.object(
          {
            hora: fields.text({ label: "Hora" }),
            lugar: fields.text({ label: "Lugar" }),
            lat: fields.text({
              label: "Latitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            })
          },
          { label: "Ceremonia" }
        ),
        recepcion: fields.object(
          {
            hora: fields.text({ label: "Hora" }),
            lugar: fields.text({ label: "Lugar" }),
            lat: fields.text({
              label: "Latitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            })
          },
          { label: "Recepción" }
        ),
        itinerario: fields.array(
          fields.object(
            {
              titulo: fields.text({ label: "Título" }),
              lugar: fields.text({ label: "Lugar" }),
              hora: fields.text({ label: "Hora" })
            },
            { label: "Evento" }
          ),
          {
            label: "Itinerario",
            itemLabel: (props) => props.fields.titulo.value || "Evento"
          }
        ),
        // === DETALLES ===
        vestimenta: fields.text({
          label: "Vestimenta",
          description: "Describe el código de vestir para el evento (ej: Formal, Casual elegante, etc.)"
        }),
        coloresVestimenta: fields.array(
          fields.text({
            label: "Color",
            description: "Agrega los colores sugeridos en formato hexadecimal (ej: #ffffff)",
            validation: {
              pattern: {
                regex: /^#[0-9A-Fa-f]{6}$/,
                message: "Debe ser un color hexadecimal válido (ej: #ffffff)"
              }
            }
          }),
          {
            label: "Colores de vestimenta",
            description: "Sugiere los tonos de colores que los invitados pueden usar",
            itemLabel: (props) => props.value
          }
        ),
        consideraciones: fields.array(
          fields.text({
            label: "Consideración",
            description: "Agrega consideraciones importantes para los invitados"
          }),
          {
            label: "Consideraciones",
            description: "Información adicional que los invitados deben saber",
            itemLabel: (props) => props.value
          }
        ),
        // === REGALOS ===
        frase_regalos: fields.text({ label: "Frase de regalos" }),
        // === REGALOS ===
        tipoRegalo: fields.multiselect({
          label: "Tipos de regalo",
          options: [
            { label: "Lluvia de sobres", value: "lluvia" },
            { label: "Mesa de regalos", value: "mesa" },
            { label: "Transferencias", value: "transferencias" }
          ]
        }),
        mesaRegalos: fields.array(
          fields.object(
            {
              titulo: fields.text({
                label: "Título",
                description: "Nombre de la tienda o mesa de regalos"
              }),
              url: fields.text({
                label: "URL",
                description: "Enlace directo a la mesa de regalos"
              })
            },
            { label: "Mesa de regalos" }
          ),
          {
            label: "Mesas de regalos",
            description: "Agrega las mesas de regalos con dirección https://",
            itemLabel: (props) => props.fields.titulo.value || "Mesa de regalos"
          }
        ),
        beneficiario: fields.text({
          label: "Beneficiario de transferencia",
          description: "Nombre completo de la persona que recibirá la transferencia"
        }),
        banco: fields.text({
          label: "Banco de transferencia",
          description: "Nombre del banco donde está la cuenta"
        }),
        cuenta: fields.text({
          label: "Cuenta de transferencia",
          description: "Número de cuenta bancaria (CLABE, tarjeta o cuenta)"
        }),
        // === PROGRESO DE INVITADOS ===
        progresoPorcentaje: fields.number({
          label: "% mínimo para mostrar invitados confirmados",
          validation: { min: 0, max: 100 }
        }),
        progresoFrase: fields.text({
          label: "Frase de progreso de invitados confirmados"
        }),
        progresoMostrarSiempre: fields.checkbox({
          label: "Mostrar siempre",
          defaultValue: false
        }),
        // === CONFIGURACIÓN ===
        paleta: fields.select({
          label: "Paleta",
          options: [
            { label: "Base", value: "base" },
            { label: "Invierno", value: "invierno" },
            { label: "Otoño", value: "otono" },
            { label: "Primavera", value: "primavera" },
            { label: "Verano", value: "verano" }
          ],
          defaultValue: "base"
        }),
        theme: fields.object(
          {
            name: fields.select({
              label: "Nombre del tema",
              options: [
                { label: "Base", value: "base" },
                { label: "Clásico", value: "clasico" },
                { label: "Moderno", value: "moderno" },
                { label: "Elegante", value: "elegante" }
              ],
              defaultValue: "base"
            }),
            colors: fields.object(
              {
                primary: fields.text({ label: "Color primario" }),
                secondary: fields.text({ label: "Color secundario" }),
                accent: fields.text({ label: "Color de acento" }),
                background: fields.text({ label: "Color de fondo" }),
                text: fields.text({ label: "Color de texto" })
              },
              { label: "Colores" }
            ),
            typography: fields.object(
              {
                heading: fields.text({ label: "Tipografía de encabezados" }),
                body: fields.text({ label: "Tipografía del cuerpo" })
              },
              { label: "Tipografía" }
            )
          },
          { label: "Tema" }
        ),
        // === CONTENIDO ===
        content: fields.mdx({ label: "Contenido" })
      },
      previewUrl: "/bodas/{slug}"
    }),
    quince: collection({
      label: "XV Años",
      slugField: "titulo",
      path: "src/content/quince/*",
      format: { contentField: "content" },
      schema: {
        version: fields.text({ label: "Version" }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        titulo: fields.slug({ name: { label: "Título" } }),
        whatsapp: fields.text({
          label: "WhatsApp del anfitrion",
          validation: {
            isRequired: true,
            length: { min: 10, max: 15 },
            pattern: { regex: /^[0-9]+$/, message: "Solo se permiten números" }
          }
        }),
        email: fields.text({ label: "Email del anfitrion", validation: { isRequired: false } }),
        quinceanera: fields.text({ label: "Quinceañera" }),
        fecha: fields.date({ label: "Fecha" }),
        frase_amor: fields.text({ label: "Frase de amor" }),
        // === PADRES ===
        padres: fields.object(
          {
            mama: fields.text({ label: "Mamá de la Quinceañera" }),
            papa: fields.text({ label: "Papá de la Quinceañera" }),
            fotopapas: fields.image({
              label: "Foto papás",
              directory: "public/quince/padres",
              publicPath: "/quince/padres/"
            })
          },
          { label: "Padres" }
        ),
        // === PADRINOS ===
        padrinos: fields.array(
          fields.text({
            label: "Nombre del padrino",
            description: "Agrega el nombre completo del padrino"
          }),
          {
            label: "Padrinos",
            description: "Lista de padrinos de la quinceañera",
            itemLabel: (props) => props.value || "Padrino"
          }
        ),
        ceremonia: fields.object(
          {
            hora: fields.text({ label: "Hora" }),
            lugar: fields.text({ label: "Lugar" }),
            lat: fields.text({
              label: "Latitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            })
          },
          { label: "Ceremonia" }
        ),
        recepcion: fields.object(
          {
            hora: fields.text({ label: "Hora" }),
            lugar: fields.text({ label: "Lugar" }),
            lat: fields.text({
              label: "Latitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido"
                }
              }
            })
          },
          { label: "Recepción" }
        ),
        itinerario: fields.array(
          fields.object(
            {
              titulo: fields.text({ label: "Título" }),
              lugar: fields.text({ label: "Lugar" }),
              hora: fields.text({ label: "Hora" })
            },
            { label: "Evento" }
          ),
          {
            label: "Itinerario",
            itemLabel: (props) => props.fields.titulo.value || "Evento"
          }
        ),
        cover: fields.image({
          label: "Imagen de portada",
          directory: "public/quince/covers",
          publicPath: "/quince/covers/"
        }),
        // Audio MP3 para reproducir
        audioMusica: fields.file({
          label: "Audio de la celebración (MP3)",
          description: "Sube un archivo MP3 para reproducir en la invitación",
          directory: "public/quince/audios",
          publicPath: "/quince/audios/"
        }),
        // Galería de imágenes (array de imágenes)
        galeria: fields.array(
          fields.image({
            label: "Imagen",
            directory: "public/quince/galeria",
            publicPath: "/quince/galeria/"
          }),
          {
            label: "Galería",
            itemLabel: () => "Imagen"
          }
        ),
        imagenesSolitarias: fields.array(
          fields.image({
            label: "Imagen solitaria",
            directory: "public/quince/solitarias",
            publicPath: "/quince/solitarias/"
          }),
          {
            label: "Imágenes solitarias",
            itemLabel: () => "Imagen solitaria",
            validation: { length: { max: 3 } }
          }
        ),
        frase_regalos: fields.text({ label: "Frase de regalos" }),
        regalos: fields.array(
          fields.object(
            {
              titulo: fields.text({ label: "Título" }),
              url: fields.text({ label: "URL" })
            },
            { label: "Regalo" }
          ),
          {
            label: "Regalos",
            itemLabel: (props) => props.fields.titulo.value || "Regalo"
          }
        ),
        tipoRegalos: fields.multiselect({
          label: "Tipos de regalos",
          options: [
            { label: "Lluvia de sobres", value: "lluvia" },
            { label: "Mesa de regalos", value: "mesa" },
            { label: "Transferencias", value: "transferencias" }
          ]
        }),
        beneficiario: fields.text({ label: "Beneficiario de transferencia" }),
        banco: fields.text({ label: "Banco de transferencia" }),
        cuenta: fields.text({ label: "Cuenta de transferencia" }),
        // Progreso de Invitados (para componente ProgresoInvitados)
        progresoPorcentaje: fields.number({
          label: "% mínimo para mostrar invitados confirmados",
          validation: { min: 0, max: 100 }
        }),
        progresoFrase: fields.text({
          label: "Frase de progreso de invitados confirmados"
        }),
        progresoMostrarSiempre: fields.checkbox({
          label: "Mostrar siempre el progreso de invitados?",
          defaultValue: false
        }),
        consideraciones: fields.array(
          fields.text({
            label: "Consideración",
            description: "Agrega consideraciones importantes para los invitados"
          }),
          {
            label: "Consideraciones",
            description: "Información adicional que los invitados deben saber",
            itemLabel: (props) => props.value
          }
        ),
        vestimenta: fields.text({
          label: "Vestimenta",
          description: "Describe el código de vestir para el evento (ej: Formal, Casual elegante, etc.)"
        }),
        coloresVestimenta: fields.array(
          fields.text({
            label: "Color",
            description: "Agrega los colores sugeridos en formato hexadecimal (ej: #ffffff)",
            validation: {
              pattern: {
                regex: /^#[0-9A-Fa-f]{6}$/,
                message: "Debe ser un color hexadecimal válido (ej: #ffffff)"
              }
            }
          }),
          {
            label: "Colores de vestimenta",
            description: "Sugiere los tonos de colores que los invitados pueden usar",
            itemLabel: (props) => props.value
          }
        ),
        paleta: fields.select({
          label: "Paleta",
          options: [
            { label: "Base", value: "base" },
            { label: "Invierno", value: "invierno" },
            { label: "Otoño", value: "otono" },
            { label: "Primavera", value: "primavera" },
            { label: "Verano", value: "verano" }
          ],
          defaultValue: "base"
        }),
        theme: fields.object(
          {
            name: fields.select({
              label: "Nombre del tema",
              options: [
                { label: "Base", value: "base" },
                { label: "Clásico", value: "clasico" },
                { label: "Moderno", value: "moderno" },
                { label: "Elegante", value: "elegante" }
              ],
              defaultValue: "base"
            }),
            colors: fields.object(
              {
                primary: fields.text({ label: "Color primario" }),
                secondary: fields.text({ label: "Color secundario" }),
                accent: fields.text({ label: "Color de acento" }),
                background: fields.text({ label: "Color de fondo" }),
                text: fields.text({ label: "Color de texto" })
              },
              { label: "Colores" }
            ),
            typography: fields.object(
              {
                heading: fields.text({ label: "Tipografía de encabezados" }),
                body: fields.text({ label: "Tipografía del cuerpo" })
              },
              { label: "Tipografía" }
            )
          },
          { label: "Tema" }
        ),
        content: fields.mdx({
          label: "Contenido"
          // components: {
          //   Encabezados: block({
          //     label: 'Encabezados',
          //     schema: {
          //       texto: fields.text({ label: 'Texto' }),
          //     }
          //   }),
          // }
        })
      },
      previewUrl: "/quince/{slug}"
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
