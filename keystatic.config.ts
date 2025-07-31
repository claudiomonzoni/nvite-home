import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
   // repo: {
   //   owner:'claudiomonzoni',
   //   name:'nvite-home'
   // }
  },
  collections: {
    bodas: collection({
      label: "Bodas",
      slugField: "slug",
      path: "src/content/bodas/*",
      format: { contentField: "content" },
      schema: {
        version: fields.text({ label: "Version" }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        slug: fields.text({ 
          label: "Slug",
          defaultValue: () => ''
        }),
        cover: fields.image({
          label: "Imagen de portada",
          directory: "public/images/bodas",
          publicPath: "bodas/covers/",
        }),
        ellaIniciales: fields.text({ label: "Iniciales de ella" }),
        elIniciales: fields.text({ label: "Iniciales de él" }),
        titulo: fields.text({ 
          label: "Título",
          validation: { length: { max: 80 } }
        }),
        extracto: fields.text({ label: "Extracto" }),
        descripcion: fields.text({ label: "Descripción" }),
        whatsapp: fields.number({ label: "WhatsApp" }),
        email: fields.text({ label: "Email" }),
        novios: fields.text({ label: "Novios" }),
        fecha: fields.date({ label: "Fecha" }),
        frase_amor: fields.text({ label: "Frase de amor" }),
        frase_regalos: fields.text({ label: "Frase de regalos" }),
        padres: fields.object({
          mamaNovia: fields.text({ label: "Mamá de la novia" }),
          papaNovia: fields.text({ label: "Papá de la novia" }),
          fotopapasNovia: fields.text({ label: "Foto papás novia" }),
          mamaNovio: fields.text({ label: "Mamá del novio" }),
          papaNovio: fields.text({ label: "Papá del novio" }),
          fotopapasNovio: fields.text({ label: "Foto papás novio" }),
        }, { label: "Padres" }),
        consideraciones: fields.array(
          fields.text({ label: "Consideración" }),
          { label: "Consideraciones", itemLabel: (props) => props.value }
        ),
        coloresVestimenta: fields.array(
          fields.text({ label: "Color" }),
          { label: "Colores de vestimenta", itemLabel: (props) => props.value }
        ),
        vestimenta: fields.text({ label: "Vestimenta" }),
        ceremonia: fields.object({
          hora: fields.text({ label: "Hora" }),
          lugar: fields.text({ label: "Lugar" }),
          lat: fields.number({ label: "Latitud" }),
          lng: fields.number({ label: "Longitud" }),
        }, { label: "Ceremonia" }),
        recepcion: fields.object({
          hora: fields.text({ label: "Hora" }),
          lugar: fields.text({ label: "Lugar" }),
          lat: fields.number({ label: "Latitud" }),
          lng: fields.number({ label: "Longitud" }),
        }, { label: "Recepción" }),
        iterario: fields.array(
          fields.object({
            titulo: fields.text({ label: "Título" }),
            lugar: fields.text({ label: "Lugar" }),
            hora: fields.text({ label: "Hora" }),
          }, { label: "Evento" }),
          { label: "Itinerario", itemLabel: (props) => props.fields.titulo.value || "Evento" }
        ),
        beneficiario: fields.text({ label: "Beneficiario" }),
        banco: fields.text({ label: "Banco" }),
        cuenta: fields.number({ label: "Cuenta" }),
        paleta: fields.text({ label: "Paleta" }),
        tipoRegalo: fields.array(
          fields.text({ label: "Tipo de regalo" }),
          { label: "Tipos de regalo", itemLabel: (props) => props.value }
        ),
        mesaRegalos: fields.array(
          fields.object({
            titulo: fields.text({ label: "Título" }),
            url: fields.text({ label: "URL" }),
          }, { label: "Mesa de regalos" }),
          { label: "Mesas de regalos", itemLabel: (props) => props.fields.titulo.value || "Mesa de regalos" }
        ),
        theme: fields.object({
          name: fields.text({ label: "Nombre del tema" }),
          colors: fields.object({
            primary: fields.text({ label: "Color primario" }),
            secondary: fields.text({ label: "Color secundario" }),
            accent: fields.text({ label: "Color de acento" }),
            background: fields.text({ label: "Color de fondo" }),
            text: fields.text({ label: "Color de texto" }),
          }, { label: "Colores" }),
          typography: fields.object({
            heading: fields.text({ label: "Tipografía de encabezados" }),
            body: fields.text({ label: "Tipografía del cuerpo" }),
          }, { label: "Tipografía" }),
        }, { label: "Tema" }),
        content: fields.mdx({ label: "Contenido" }),
      },
    }),

    quince: collection({
      label: "XV Años",
      slugField: "titulo",
      path: "src/content/quince/*",
      format: { contentField: "content" },
      schema: {
        version: fields.text({ label: "Version" }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        slug: fields.text({ label: "Slug" }),
        cover: fields.image({
          label: "Imagen de portada",
          directory: "public/quince/covers",
          publicPath: "/images/quince/",
        }),
        titulo: fields.slug({ name: { label: 'Titulo' } }),
        extracto: fields.text({ label: "Extracto" }),
        descripcion: fields.text({ label: "Descripción" }),
        whatsapp: fields.number({ label: "WhatsApp" }),
        quinceanera: fields.text({ label: "Quinceañera" }),
        fecha: fields.date({ label: "Fecha" }),
        frase_amor: fields.text({ label: "Frase de amor" }),
        frase_regalos: fields.text({ label: "Frase de regalos" }),
        regalos: fields.array(
          fields.object({
            titulo: fields.text({ label: "Título" }),
            url: fields.text({ label: "URL" }),
          }, { label: "Regalo" }),
          { label: "Regalos", itemLabel: (props) => props.fields.titulo.value || "Regalo" }
        ),
        tipoRegalos: fields.array(
          fields.text({ label: "Tipo de regalo" }),
          { label: "Tipos de regalos", itemLabel: (props) => props.value }
        ),
        consideraciones: fields.array(
          fields.text({ label: "Consideración" }),
          { label: "Consideraciones", itemLabel: (props) => props.value }
        ),
        vestimenta: fields.text({ label: "Vestimenta" }),
        ceremonia: fields.object({
          hora: fields.text({ label: "Hora" }),
          lugar: fields.text({ label: "Lugar" }),
          lat: fields.number({ label: "Latitud" }),
          lang: fields.number({ label: "Longitud" }),
        }, { label: "Ceremonia" }),
        recepcion: fields.object({
          hora: fields.text({ label: "Hora" }),
          lugar: fields.text({ label: "Lugar" }),
          lat: fields.number({ label: "Latitud" }),
          lang: fields.number({ label: "Longitud" }),
        }, { label: "Recepción" }),
        iterario: fields.array(
          fields.object({
            titulo: fields.text({ label: "Título" }),
            lugar: fields.text({ label: "Lugar" }),
            hora: fields.text({ label: "Hora" }),
          }, { label: "Evento" }),
          { label: "Itinerario", itemLabel: (props) => props.fields.titulo.value || "Evento" }
        ),
        beneficiario: fields.text({ label: "Beneficiario" }),
        banco: fields.text({ label: "Banco" }),
        cuenta: fields.number({ label: "Cuenta" }),
        paleta: fields.text({ label: "Paleta" }),
        theme: fields.object({
          name: fields.text({ label: "Nombre del tema" }),
          colors: fields.object({
            primary: fields.text({ label: "Color primario" }),
            secondary: fields.text({ label: "Color secundario" }),
            accent: fields.text({ label: "Color de acento" }),
            background: fields.text({ label: "Color de fondo" }),
            text: fields.text({ label: "Color de texto" }),
          }, { label: "Colores" }),
          typography: fields.object({
            heading: fields.text({ label: "Tipografía de encabezados" }),
            body: fields.text({ label: "Tipografía del cuerpo" }),
          }, { label: "Tipografía" }),
        }, { label: "Tema" }),
        content: fields.mdx({ label: "Contenido" }),
      },
    }),
  },
});
