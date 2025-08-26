// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { stripePriceLoader, stripeProductLoader } from "stripe-astro-loader";
import Stripe from "stripe";
const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);
// 2. Import loader(s)
import { glob } from "astro/loaders";
import { version } from "react";

// Definir el esquema del theme
const themeSchema = z.object({
  name: z.string(),
  colors: z.object({
    primary: z.string().optional(),
    secondary: z.string().optional(),
    accent: z.string().optional(),
    background: z.string().optional(),
    text: z.string().optional()
  }).optional(),
  typography: z.object({
    heading: z.string().optional(),
    body: z.string().optional()
  }).optional()
}).optional();

// 3. Define your collection(s)
const bodas = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/bodas" }),
  schema:
    //  ({ image }) =>
    z.object({
      version: z.string(),
      draft: z.boolean().optional(),
      //slug: z.string(),
      cover: z.string(),
      ellaIniciales: z.string(),
      elIniciales: z.string(),
      titulo: z
        .string()
        .max(
          80,
          "Para un mejor Seo, por favor ingrese un titulo de menos de 80 caracteres"
        ),
      // cover: image().refine((img) => img.width >= 200, {
      //   message:
      //     "¡La imagen de portada debe tener al menos 200 píxeles de ancho!",
      // }),
      whatsapp: z.string().optional(),
      email: z.string().email().optional(),
      novios: z.string().optional(),
       fecha: z.date(),
       frase_amor: z.string(),
      frase_regalos: z.string().optional(),
      // Progreso de Invitados
      progresoEmail: z.string().email().optional(),
      progresoPorcentaje: z.number().optional(),
      progresoFrase: z.string().optional(),
      progresoMostrarSiempre: z.boolean().optional(),
      // Padres
      padres: z.object({
        mamaNovia: z.string().optional(),
        papaNovia: z.string().optional(),
        fotopapasNovia: z.string().optional(),
        mamaNovio: z.string().optional(),
        papaNovio: z.string().optional(),
        fotopapasNovio: z.string().optional(),
      }).optional(),
      // Consideraciones importantes para los invitados
      consideraciones: z.array(z.string()).optional(),
      // Colores sugeridos para la vestimenta (formato hexadecimal)
      coloresVestimenta: z.array(z.string()).optional(),
      // Código de vestir para el evento
      vestimenta: z.string(),
      ceremonia: z
        .object({
          hora: z.string().optional(),
          lugar: z.string().optional(),
          lat: z.string().optional(),
          lng: z.string().optional(),
        })
        .optional(),
      recepcion: z
        .object({
          hora: z.string().optional(),
          lugar: z.string().optional(),
          lat: z.string().optional(),
          lng: z.string().optional(),
        })
        .optional(),
      itinerario: z
        .array(
          z.object({
            titulo: z.string(),
            lugar: z.string().optional(),
            hora: z.string().optional(),
          })
        )
        .optional(),
      beneficiario: z.string().optional(),
      banco: z.string().optional(),
      cuenta: z.string().optional(),
      paleta: z.string().optional(),
      tipoRegalo: z.array(z.string()).optional(),
      mesaRegalos: z
        .array(
          z.object({
            titulo: z.string(),
            url: z.string(),
          })
        )
        .optional(),
      // Galería
      galeria: z.array(z.string()).optional(),
      // Imágenes solitarias (máximo 3)
      imagenesSolitarias: z.array(z.string()).optional(),
      // Carpeta de pases
      json: z.string().optional(),
      theme: themeSchema
    }),
});

const quince = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/quince" }),
  schema: z.object({
    version: z.string(),
    draft: z.boolean().optional(),
    slug: z.string().optional(),
    cover: z.string(),
    titulo: z
      .string()
      .max(
        80,
        "Para un mejor Seo, por favor ingrese un titulo de menos de 80 caracteres"
      ),

    // cover: image().refine((img) => img.width >= 200, {
    //   message:
    //     "¡La imagen de portada de quince debe tener al menos 700 píxeles de ancho!",
    // }).optional(),
    whatsapp: z.string().optional(),
    email: z.string().email().optional(),
    quinceanera: z.string(),
    fecha: z.date(),
      // Padres
      padres: z.object({
        mama: z.string().optional(),
        papa: z.string().optional(),
        fotopapas: z.string().optional(),
      }).optional(),
    // Consideraciones importantes para los invitados
    consideraciones: z.array(z.string()).optional(),
    // Código de vestir para el evento
    vestimenta: z.string(),
    // Colores sugeridos para la vestimenta (formato hexadecimal)
    coloresVestimenta: z.array(z.string()).optional(),
    frase_amor: z.string(),
    frase_regalos: z.string().optional(),
    // ProgresoInvitados
    progresoEmail: z.string().email().optional(),
    progresoPorcentaje: z.number().optional(),
    progresoFrase: z.string().optional(),
    progresoMostrarSiempre: z.boolean().optional(),
    regalos: z.array(z.object({ titulo: z.string(), url: z.string() })).optional(),
    tipoRegalos: z.array(z.string()).optional(),
    ceremonia: z
      .object({
        hora: z.string().optional(),
        lugar: z.string().optional(),
        lat: z.string().optional(),
        lng: z.string().optional(),
      })
      .optional(),
    recepcion: z
      .object({
        hora: z.string().optional(),
        lugar: z.string().optional(),
        lat: z.string().optional(),
        lng: z.string().optional(),
      })
      .optional(),
    itinerario: z
      .array(
        z.object({
          titulo: z.string(),
          lugar: z.string().optional(),
          hora: z.string().optional(),
        })
      )
      .optional(),
    beneficiario: z.string().optional(),
    banco: z.string().optional(),
    cuenta: z.string().optional(),
    paleta: z.string().optional(),
    // Galería de imágenes cargadas desde Keystatic/MDX
    galeria: z.array(z.string()).optional(),
    // Imágenes solitarias (máximo 3)
    imagenesSolitarias: z.array(z.string()).optional(),
    theme: themeSchema
  }),
});

const productos = defineCollection({
  loader: stripeProductLoader(stripe),
  schema: z.object({
    id: z.string(),
    active: z.boolean(),
    name: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    metadata: z.record(z.string()).optional(),  // Cambiado para aceptar cualquier clave-valor string
    default_price: z.string().nullable().optional(),
  }),
});

const precios = defineCollection({
  loader: stripePriceLoader(stripe),
  schema: z.object({
    id: z.string(),
    currency: z.string(),
    unit_amount: z.number(),
  })
});


const imagenes = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      Alt: z.string(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { bodas, quince, imagenes, productos, precios };
