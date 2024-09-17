import { z, defineCollection } from "astro:content";
// 2. Define a `type` and `schema` for each collection
const bodas = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) => z.object({
    titulo: z
      .string()
      .max(
        80,
        "Para un mejor Seo, por favor ingrese un titulo de menos de 80 caracteres"
      ),
      cover: image().refine((img) => img.width >= 1080, {
        message:
          "¡La imagen de portada debe tener al menos 1080 píxeles de ancho!",
      }),
      coverAlt: z.string(),
    extracto: z.string(),
    descripcion: z.string(),
    whatsapp: z.number(),
    novios : z.string(),
    fecha: z.date(),
    consideraciones: z.array(z.string()),
    vestimenta: z.string(),
    frase_amor: z.string(),
    ceremonia: z.object({
      horario: z.string(),
      direccion: z.string(),
      lat: z.number(),
      lng: z.number(),
    }),
    recepcion: z.object({
      horario: z.string(),
      direccion: z.string(),
      lat: z.number(),
      lng: z.number(),
    }),
    itinerario: z.array(
      z.object({
        titulo: z.string(),
        lugar: z.string(),
        hora: z.number(),
      })
    ),
    beneficiario: z.string(),
    banco: z.string(),
    cuenta: z.number(),
  }),
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

//   Aqui puedo hacer otro esquema como playa y agregarlo al array de collections con una coma
export const collections = { bodas, imagenes };
