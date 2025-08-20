import { config, fields, collection } from "@keystatic/core";
import { wrapper, block } from "@keystatic/core/content-components";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner:'claudiomonzoni',
      name:'nvite-home'
    },

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
            length: { min: 10, max: 15 },
            pattern: { regex: /^[0-9]+$/, message: "Solo se permiten números" },
          },
        }),
        email: fields.text({ label: "Email del anfitrion" }),

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
                publicPath: "/bodas/padres/",
              }),
              mamaNovio: fields.text({ label: "Mamá del novio" }),
              papaNovio: fields.text({ label: "Papá del novio" }),
              fotopapasNovio: fields.image({
                label: "Foto papás novio",
                directory: "public/bodas/padres",
                publicPath: "/bodas/padres/",
              }),
            },
            { label: "Padres" }
          ),

        // === IMÁGENES ===
        cover: fields.image({
          label: "Imagen de portada",
          directory: "public/bodas/covers",
          publicPath: "/bodas/covers/",
        }),
        galeria: fields.array(
          fields.image({
            label: "Imagen",
            directory: "public/bodas/galeria",
            publicPath: "/bodas/galeria/",
          }),
          {
            label: "Galería",
            itemLabel: () => "Imagen",
          }
        ),
        imagenesSolitarias: fields.array(
          fields.image({
            label: "Imagen solitaria",
            directory: "public/bodas/solitarias",
            publicPath: "/bodas/solitarias/",
          }),
          {
            label: "Imágenes solitarias",
            itemLabel: () => "Imagen solitaria",
            validation: { length: { max: 3 } },
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
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
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
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
          },
          { label: "Recepción" }
        ),
        itinerario: fields.array(
          fields.object(
            {
              titulo: fields.text({ label: "Título" }),
              lugar: fields.text({ label: "Lugar" }),
              hora: fields.text({ label: "Hora" }),
            },
            { label: "Evento" }
          ),
          {
            label: "Itinerario",
            itemLabel: (props) => props.fields.titulo.value || "Evento",
          }
        ),

        // === DETALLES ===
        vestimenta: fields.text({
          label: "Vestimenta",
          description:
            "Describe el código de vestir para el evento (ej: Formal, Casual elegante, etc.)",
        }),
        coloresVestimenta: fields.array(
          fields.text({
            label: "Color",
            description:
              "Agrega los colores sugeridos en formato hexadecimal (ej: #ffffff)",
            validation: {
              pattern: {
                regex: /^#[0-9A-Fa-f]{6}$/,
                message: "Debe ser un color hexadecimal válido (ej: #ffffff)",
              },
            },
          }),
          {
            label: "Colores de vestimenta",
            description:
              "Sugiere los tonos de colores que los invitados pueden usar",
            itemLabel: (props) => props.value,
          }
        ),
        consideraciones: fields.array(
          fields.text({
            label: "Consideración",
            description:
              "Agrega consideraciones importantes para los invitados",
          }),
          {
            label: "Consideraciones",
            description: "Información adicional que los invitados deben saber",
            itemLabel: (props) => props.value,
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
            { label: "Transferencias", value: "transferencias" },
          ],
        }),
        mesaRegalos: fields.array(
          fields.object(
            {
              titulo: fields.text({
                label: "Título",
                description: "Nombre de la tienda o mesa de regalos",
              }),
              url: fields.text({
                label: "URL",
                description: "Enlace directo a la mesa de regalos",
              }),
            },
            { label: "Mesa de regalos" }
          ),
          {
            label: "Mesas de regalos",
            description: "Agrega las mesas de regalos con dirección https://",
            itemLabel: (props) =>
              props.fields.titulo.value || "Mesa de regalos",
          }
        ),
        beneficiario: fields.text({
          label: "Beneficiario de transferencia",
          description:
            "Nombre completo de la persona que recibirá la transferencia",
        }),
        banco: fields.text({
          label: "Banco de transferencia",
          description: "Nombre del banco donde está la cuenta",
        }),
        cuenta: fields.text({
          label: "Cuenta de transferencia",
          description: "Número de cuenta bancaria (CLABE, tarjeta o cuenta)",
        }),

        // === PROGRESO DE INVITADOS ===
        progresoPorcentaje: fields.number({
          label: "% mínimo para mostrar invitados confirmados",
          validation: { min: 0, max: 100 },
        }),
        progresoFrase: fields.text({
          label: "Frase de progreso de invitados confirmados",
        }),
        progresoMostrarSiempre: fields.checkbox({
          label: "Mostrar siempre",
          defaultValue: false,
        }),

        // === CONFIGURACIÓN ===
        paleta: fields.select({
          label: "Paleta",
          options: [
            { label: "Base", value: "base" },
            { label: "Invierno", value: "invierno" },
            { label: "Otoño", value: "otono" },
            { label: "Primavera", value: "primavera" },
            { label: "Verano", value: "verano" },
          ],
          defaultValue: "base",
        }),
        theme: fields.object(
          {
            name: fields.select({
              label: "Nombre del tema",
              options: [
                { label: "Base", value: "base" },
                { label: "Clásico", value: "clasico" },
                { label: "Moderno", value: "moderno" },
                { label: "Elegante", value: "elegante" },
              ],
              defaultValue: "base",
            }),
            colors: fields.object(
              {
                primary: fields.text({ label: "Color primario" }),
                secondary: fields.text({ label: "Color secundario" }),
                accent: fields.text({ label: "Color de acento" }),
                background: fields.text({ label: "Color de fondo" }),
                text: fields.text({ label: "Color de texto" }),
              },
              { label: "Colores" }
            ),
            typography: fields.object(
              {
                heading: fields.text({ label: "Tipografía de encabezados" }),
                body: fields.text({ label: "Tipografía del cuerpo" }),
              },
              { label: "Tipografía" }
            ),
          },
          { label: "Tema" }
        ),
        // === CONTENIDO ===
        content: fields.mdx({ label: "Contenido" }),
      },
      previewUrl: "/bodas/{slug}",
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
            length: { min: 10, max: 15 },
            pattern: { regex: /^[0-9]+$/, message: "Solo se permiten números" },
          },
        }),
        email: fields.text({ label: "Email del anfitrion" }),
        quinceanera: fields.text({ label: "Quinceañera" }),
        fecha: fields.date({ label: "Fecha" }),
        frase_amor: fields.text({ label: "Frase de amor" }),

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
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
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
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
            lng: fields.text({
              label: "Longitud",
              validation: {
                length: { min: 1 },
                pattern: {
                  regex: /^-?\d+\.\d+$/,
                  message: "Debe ser un número decimal válido",
                },
              },
            }),
          },
          { label: "Recepción" }
        ),
        itinerario: fields.array(
          fields.object(
            {
              titulo: fields.text({ label: "Título" }),
              lugar: fields.text({ label: "Lugar" }),
              hora: fields.text({ label: "Hora" }),
            },
            { label: "Evento" }
          ),
          {
            label: "Itinerario",
            itemLabel: (props) => props.fields.titulo.value || "Evento",
          }
        ),
        cover: fields.image({
          label: "Imagen de portada",
          directory: "public/quince/covers",
          publicPath: "/quince/covers/",
        }),
        // Galería de imágenes (array de imágenes)
        galeria: fields.array(
          fields.image({
            label: "Imagen",
            directory: "public/quince/galeria",
            publicPath: "/quince/galeria/",
          }),
          {
            label: "Galería",
            itemLabel: () => "Imagen",
          }
        ),
        imagenesSolitarias: fields.array(
          fields.image({
            label: "Imagen solitaria",
            directory: "public/quince/solitarias",
            publicPath: "/quince/solitarias/",
          }),
          {
            label: "Imágenes solitarias",
            itemLabel: () => "Imagen solitaria",
            validation: { length: { max: 3 } },
          }
        ),
        frase_regalos: fields.text({ label: "Frase de regalos" }),
        regalos: fields.array(
          fields.object(
            {
              titulo: fields.text({ label: "Título" }),
              url: fields.text({ label: "URL" }),
            },
            { label: "Regalo" }
          ),
          {
            label: "Regalos",
            itemLabel: (props) => props.fields.titulo.value || "Regalo",
          }
        ),
        tipoRegalos: fields.multiselect({
          label: "Tipos de regalos",
          options: [
            { label: "Lluvia de sobres", value: "lluvia" },
            { label: "Mesa de regalos", value: "mesa" },
            { label: "Transferencias", value: "transferencias" },
          ],
        }),
        beneficiario: fields.text({ label: "Beneficiario de transferencia" }),
        banco: fields.text({ label: "Banco de transferencia" }),
        cuenta: fields.text({ label: "Cuenta de transferencia" }),
        // Progreso de Invitados (para componente ProgresoInvitados)
        progresoPorcentaje: fields.number({
          label: "% mínimo para mostrar invitados confirmados",
          validation: { min: 0, max: 100 },
        }),
        progresoFrase: fields.text({
          label: "Frase de progreso de invitados confirmados",
        }),
        progresoMostrarSiempre: fields.checkbox({
          label: "Mostrar siempre el progreso de invitados?",
          defaultValue: false,
        }),

        consideraciones: fields.array(
          fields.text({
            label: "Consideración",
            description:
              "Agrega consideraciones importantes para los invitados",
          }),
          {
            label: "Consideraciones",
            description: "Información adicional que los invitados deben saber",
            itemLabel: (props) => props.value,
          }
        ),
        vestimenta: fields.text({
          label: "Vestimenta",
          description:
            "Describe el código de vestir para el evento (ej: Formal, Casual elegante, etc.)",
        }),
        coloresVestimenta: fields.array(
          fields.text({
            label: "Color",
            description:
              "Agrega los colores sugeridos en formato hexadecimal (ej: #ffffff)",
            validation: {
              pattern: {
                regex: /^#[0-9A-Fa-f]{6}$/,
                message: "Debe ser un color hexadecimal válido (ej: #ffffff)",
              },
            },
          }),
          {
            label: "Colores de vestimenta",
            description:
              "Sugiere los tonos de colores que los invitados pueden usar",
            itemLabel: (props) => props.value,
          }
        ),

        paleta: fields.select({
          label: "Paleta",
          options: [
            { label: "Base", value: "base" },
            { label: "Invierno", value: "invierno" },
            { label: "Otoño", value: "otono" },
            { label: "Primavera", value: "primavera" },
            { label: "Verano", value: "verano" },
          ],
          defaultValue: "base",
        }),
        theme: fields.object(
          {
            name: fields.select({
              label: "Nombre del tema",
              options: [
                { label: "Base", value: "base" },
                { label: "Clásico", value: "clasico" },
                { label: "Moderno", value: "moderno" },
                { label: "Elegante", value: "elegante" },
              ],
              defaultValue: "base",
            }),
            colors: fields.object(
              {
                primary: fields.text({ label: "Color primario" }),
                secondary: fields.text({ label: "Color secundario" }),
                accent: fields.text({ label: "Color de acento" }),
                background: fields.text({ label: "Color de fondo" }),
                text: fields.text({ label: "Color de texto" }),
              },
              { label: "Colores" }
            ),
            typography: fields.object(
              {
                heading: fields.text({ label: "Tipografía de encabezados" }),
                body: fields.text({ label: "Tipografía del cuerpo" }),
              },
              { label: "Tipografía" }
            ),
          },
          { label: "Tema" }
        ),

        content: fields.mdx({
          label: "Contenido",
          // components: {
          //   Encabezados: block({
          //     label: 'Encabezados',
          //     schema: {
          //       texto: fields.text({ label: 'Texto' }),
          //     }
          //   }),
          // }
        }),
      },
      previewUrl: "/quince/{slug}",
    }),
  },
});
