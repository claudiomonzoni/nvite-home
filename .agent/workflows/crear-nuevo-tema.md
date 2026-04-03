---
description: Instrucciones paso a paso para crear de forma manual un nuevo tema de diseño (como "Glass") para invitaciones de Bodas o XV Años.
---

# Cómo Crear un Nuevo Tema Manualmente

Este documento explica el proceso para registrar un nuevo tema (ej. `glass`) en el sistema, aplicable para `bodas` y/o `quince`.

## Paso 1: Crear la estructura de carpetas y el archivo SCSS

1. Ve a la ruta principal de estilos de los temas: `src/estilos/temas/`.
2. Crea una nueva carpeta con el nombre de tu tema en minúsculas, sin espacios ni caracteres especiales (ej. `glass`).
3. Dentro, crea las subcarpetas de los eventos compatibles (`bodas` y/o `quince`).
4. Dentro de cada evento que quieras soportar, crea su respectivo archivo de variables (ej. `_variables.scss` para bodas, o `variablesquince.scss` para quince años).

**Ejemplo de ruta y archivo resultante para XV años:**
`src/estilos/temas/glass/quince/variablesquince.scss`

## Paso 2: Configurar las variables y tipografías

Dentro del archivo recién creado, debes importar y aplicar las gamas de colores (paletas) y configurar las tipografías correspondientes.

### Ejemplo de contenido (`src/estilos/temas/glass/quince/variablesquince.scss`):

```scss
// 1. Importar TODAS las paletas disponibles correspondientes al tipo de evento (quince o bodas)
@use '../../../paletas/quince/invierno' as *;
@use '../../../paletas/quince/base' as *;
@use '../../../paletas/quince/otono' as *;
@use '../../../paletas/quince/primavera' as *;
@use '../../../paletas/quince/verano' as *;

// 2. Importar la(s) fuente(s) desde Google Fonts para el nuevo tema
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;600&family=Playfair+Display&display=swap");

// 3. Aplicar cada paleta usando el data-attribute :root[data-paleta="..."]
:root[data-paleta="invierno"] {
  @include invierno();
}
:root[data-paleta="base"] {
  @include base();
}
:root[data-paleta="otono"] {
  @include otono();
}
:root[data-paleta="primavera"] {
  @include primavera();
}
:root[data-paleta="verano"] {
  @include verano();
}

// 4. Configurar las variables globales de tipografías por defecto con soporte de fallback CSS
// 🚨 MUY IMPORTANTE: Usa el selector de tu data-theme para no afectar a otras plantillas.
:root[data-theme="glass"] {
  --font-heading-default: "Playfair Display", serif;
  --font-body-default: "Outfit", sans-serif;
  
  // (Opcional) Variables para el estilo "Glass"
  // --glass-bg: rgba(255, 255, 255, 0.15);
}

// Configurar elementos globales asegurando el uso de `var()`
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading, var(--font-heading-default));
}
body, p, span, div {
  font-family: var(--font-body, var(--font-body-default));
}
```

> **Importante:** Asegúrate de que las rutas de los `@use` sean correctas según la ubicación de tu archivo, así como el origen de las paletas (`quince` o `bodas`).

## Paso 3: Definir el Mixin Global y Conectar el Tema en el Router

Para que Astro compile e inyecte tu nuevo CSS, el sistema centralizado de enrutamiento de estilos debe conocerlo:

1. **SCSS Globales (`globales.scss`):** Si copiaste el archivo `globales.scss` del tema "Base" hacia tu carpeta "glass", abre tu archivo y asegúrate de renombrar el mixin genérico de la línea ~4 para que coincida con tu tema:
   ```scss
   @mixin tema-glass() {
     // ...
   ```
2. **El Router de Estilos (`redireccion.scss`):** Ve a `src/estilos/quince/redireccion.scss` (o el equivalente en `bodas`). Importa tu nuevo archivo `globales` en la parte superior e "inyéctalo" como un nuevo tema usando el mixin que acabas de modificar:
   ```scss
   // 1. Importar los SCSS globales de tu tema (este archivo ya importa internamente tus variablesquince)
   @use "../temas/glass/quince/globales" as *;

   // 2. Ejecutar y renderizar el CSS cuando el html tenga el tag de tu data-theme
   :root[data-theme="glass"] {
     @include tema-glass();
   }
   ```

## Paso 4: Estructurar Componentes y Módulos SCSS (Vital para personalización)

En caso de que tu tema requiera adaptar o añadir módulos propios en la carpeta `src/estilos/temas/glass/quince/` (como por ejemplo `hero.module.scss`), es **obligatorio** que el código utilice las variables CSS de manera nativa y NO las variables de SCSS ni valores en crudo. 

Esto es lo que permite que Keystatic y los MDX sobrescriban configuraciones dinámicamente:

```scss
// ❌ MAL (variable SCSS de Sass o colores duros)
background-color: $primario;
color: #e5989b;

// ✅ BIEN (variable CSS estándar)
background-color: var(--primario);
color: var(--texto, var(--primario)); // Permitiendo fallbacks si es necesario
```

## Paso 5: Registrar el nuevo tema en Keystatic (CMS)

Para que el tema "Glass" (o el que estés creando) se pueda elegir desde el panel de administración:

1. Abre el archivo `keystatic.config.ts` ubicado en la raíz del proyecto.
2. Localiza el esquema del campo `"theme" > "name"` (que es donde están "base", "clasico", "moderno", etc.). Suele repetirse o estar abstraído para las colecciones `bodas` y `quinceaneras`.
3. Agrega la nueva opción en el listado de `options`:

```typescript
theme: fields.object({
  name: fields.select({
    label: "Nombre del tema",
    options: [
      { label: "Base", value: "base" },
      { label: "Clásico", value: "clasico" },
      { label: "Moderno", value: "moderno" },
      { label: "Elegante", value: "elegante" },
      // 👇 Agregar la nueva opción aquí
      { label: "Glass", value: "glass" },
    ],
    defaultValue: "base",
  }),
  colors: fields.object({ ... }),
  typography: fields.object({ ... }),
})
```

4. Haz este cambio en todas las colecciones donde quieras que esté disponible el nuevo tema.

Una vez hecho esto, al acceder a `/keystatic` ya se podrá seleccionar "Glass" desde el menú desplegable de Tema.

## Paso 6: Crear y Vincular Componentes Temáticos (Ej. Hero)

Cada tema (como "Glass") típicamente requiere de su propio bloque principal gráfico, como el componente `Hero`. Al crear un tema nuevo, **no debes sobrescribir** el componente de otro tema, sino que debes crear un componente asociado a tu nuevo tema para cada evento (Bodas y/o XV).

1. **Crear el Componente JSX**: Ve a la carpeta `src/components/quince/` (o `bodas/`). Duplica un archivo hero existente, como `Hero.jsx` o `Hero-elegante.jsx`, y cámbiale el nombre para reflejar tu nuevo tema, por ejemplo: `Hero-glass.jsx`.
2. **Importar y Renderizar Condicionalmente en Astro**: Para que Astro aplique tu Hero cuando se seleccione "glass", debes ajustar el renderizador:
   - Abre el layout dinámico de la página del evento: `src/pages/quince/[slug].astro`
   - Importa tu componente arriba en las importaciones: 
     `import HeroGlass from "../../components/quince/Hero-glass.jsx";`
   - Busca el bloque reactivo de `switch (quince.data.theme.name)` (o `boda.data...` independientemente) y añade el nuevo caso de uso:

```astro
    {
      (() => {
        switch (quince.data.theme.name) {
          case 'elegante':
            return <HeroElegante {...props} />;
          case 'base':
            return <HeroBase {...props} />;
          // 👇 Agregar el mapeo de renderizado del componente para "Glass":
          case 'glass':
            return (
              <HeroGlass
                // ... tus propiedades (nombres, fecha, cover, etc) equivalentes
                client:load
              />
            );
          default:
            return null;
        }
      })()
    }
```

Repite esta misma filosofía operativa en caso de que tu nuevo tema difiera radicalmente de la estructura HTML original de otros componentes (Contador, Itinerario, etc.) e implementa las diferencias a nivel JSX/Astro y refiriéndolas en el mismo `[slug].astro`.
