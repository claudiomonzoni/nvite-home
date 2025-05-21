// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { stripePriceLoader, stripeProductLoader } from "stripe-astro-loader";
import Stripe from "stripe";
const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);
// 2. Import loader(s)
import { glob } from "astro/loaders";


// 3. Define your collection(s)
const bodas = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/bodas" }),
  schema:
    //  ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      slug: z.string(),
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
      extracto: z.string(),
      descripcion: z.string(),
      whatsapp: z.number(),
      novios: z.string().optional(),
      fecha: z.date(),
      consideraciones: z.array(z.string()).optional(),
      vestimenta: z.string(),
      frase_amor: z.string(),
      ceremonia: z
        .object({
          hora: z.string().optional(),
          lugar: z.string().optional(),
          lat: z.number().optional(),
          lng: z.number().optional(),
        })
        .optional(),
      recepcion: z
        .object({
          hora: z.string().optional(),
          lugar: z.string().optional(),
          lat: z.number().optional(),
          lng: z.number().optional(),
        })
        .optional(),
      itinerario: z
        .array(
          z.object({
            titulo: z.string(),
            lugar: z.string(),
            hora: z.number(),
          })
        )
        .optional(),
      beneficiario: z.string().optional(),
      banco: z.string().optional(),
      cuenta: z.number().optional(),
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
    }),
});

const quince = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/quince" }),
  schema: z.object({
    draft: z.boolean().optional(),
    slug: z.string(),
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
    extracto: z.string(),
    descripcion: z.string(),
    whatsapp: z.number(),
    quinceanera: z.string(),
    fecha: z.date(),
    consideraciones: z.array(z.string()).optional(),
    vestimenta: z.string(),
    frase_amor: z.string(),
    ceremonia: z
      .object({
        hora: z.string().optional(),
        lugar: z.string().optional(),
        lat: z.number().optional(),
        lng: z.number().optional(),
      })
      .optional(),
    recepcion: z
      .object({
        hora: z.string().optional(),
        lugar: z.string().optional(),
        lat: z.number().optional(),
        lng: z.number().optional(),
      })
      .optional(),
    itinerario: z
      .array(
        z.object({
          titulo: z.string(),
          lugar: z.string(),
          hora: z.number(),
        })
      )
      .optional(),
    beneficiario: z.string().optional(),
    banco: z.string().optional(),
    cuenta: z.number().optional(),
    paleta: z.string().optional(),
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
