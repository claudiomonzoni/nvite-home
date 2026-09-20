description: Guia paso a paso para que una persona o un agente cree y registre un nuevo tema para invitaciones de bodas, XV anos o ambos.

# Cómo Crear un Nuevo Tema Manualmente

Este documento explica el proceso real para registrar un nuevo tema (por ejemplo, `glass`) en el sistema. Debe servir tanto como guia manual como lista de comprobacion para un agente de IA.

## Paso 1: Crear la estructura de carpetas y el archivo SCSS
Temas actualmente conectados:

| Evento | Temas en el router | Heros disponibles |
| --- | --- | --- |
| Bodas | `base`, `clasico`, `moderno`, `elegante`, `glass` | `Hero.jsx`, `Hero-elegante.jsx`, `Hero-glass.jsx` |
| XV anos | `base`, `elegante`, `glass` | `Hero.jsx`, `Hero-elegante.jsx`, `Hero-glass.jsx` |

La lista debe actualizarse si cambia `src/estilos/bodas/redireccion.scss`, `src/estilos/quince/redireccion.scss` o alguno de los `switch` de las paginas `[slug].astro`.

1. Ve a la ruta principal de estilos de los temas: `src/estilos/temas/`.
2. Crea una nueva carpeta con el nombre de tu tema en minúsculas, sin espacios ni caracteres especiales (ej. `glass`).
3. Dentro, crea las subcarpetas de los eventos compatibles (`bodas` y/o `quince`).
4. Dentro de cada evento que quieras soportar, crea su respectivo archivo de variables (ej. `_variables.scss` para bodas, o `variablesquince.scss` para quince años).

Como minimo, cada evento necesita un archivo de variables y uno global:

```text
src/estilos/temas/<tema>/bodas/_variables.scss
src/estilos/temas/<tema>/bodas/globales.scss
src/estilos/temas/<tema>/quince/variablesquince.scss
src/estilos/temas/<tema>/quince/globales.scss
```
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

// 3. Aplicar cada paleta del evento XV anos
:root[data-paleta-quince="invierno"] {
  @include invierno();
}
:root[data-paleta-quince="base"] {
  @include base();
}
:root[data-paleta-quince="otono"] {
  @include otono();
}
:root[data-paleta-quince="primavera"] {
  @include primavera();
}
:root[data-paleta-quince="verano"] {
  @include verano();
}

// 4. Configurar las variables de tipografias por defecto
:root[data-paleta-quince] {
  --font-heading-default: "Playfair Display", serif;
  --font-body-default: "Outfit", sans-serif;
  
  // (Opcional) Variables para el estilo "Glass"
  // --glass-bg: rgba(255, 255, 255, 0.15);
}

// Configurar elementos globales asegurando el uso de `var()`
// En XV anos, acotar tambien las reglas globales al evento y al tema.
:root[data-paleta-quince][data-theme="glass"] h1,
:root[data-paleta-quince][data-theme="glass"] h2,
:root[data-paleta-quince][data-theme="glass"] h3,
:root[data-paleta-quince][data-theme="glass"] h4,
:root[data-paleta-quince][data-theme="glass"] h5,
:root[data-paleta-quince][data-theme="glass"] h6 {
  font-family: var(--font-heading, var(--font-heading-default));
}
:root[data-paleta-quince][data-theme="glass"] body,
:root[data-paleta-quince][data-theme="glass"] p,
:root[data-paleta-quince][data-theme="glass"] span,
:root[data-paleta-quince][data-theme="glass"] div {
  font-family: var(--font-body, var(--font-body-default));
}
```

> **Importante:** Asegúrate de que las rutas de los `@use` sean correctas según la ubicación de tu archivo, así como el origen de las paletas (`quince` o `bodas`).

El layout de bodas usa `data-paleta`; el layout de XV anos usa `data-paleta-quince`. No declares las fuentes de XV anos en un `:root` sin atributo: los componentes compartidos pueden cargar CSS de ambos eventos y una regla global puede cambiar las fuentes de bodas.
## Paso 3: Definir el Mixin Global y Conectar el Tema en el Router

Para que Astro compile e inyecte tu nuevo CSS, el sistema centralizado de enrutamiento de estilos debe conocerlo:

1. **SCSS Globales (`globales.scss`):** Si copiaste el archivo `globales.scss` del tema "Base" hacia tu carpeta "glass", abre tu archivo y renombra el mixin para que coincida con tu tema:
   ```scss
   @mixin tema-glass() {
     // ...
   ```
2. **El Router de Estilos (`redireccion.scss`):** Ve a `src/estilos/quince/redireccion.scss` (o el equivalente en `bodas`). Importa tu nuevo archivo `globales` en la parte superior y registra el mixin:
   ```scss
   // 1. Importar los SCSS globales de tu tema (este archivo ya importa internamente tus variablesquince)
   @use "../temas/glass/quince/globales" as *;

  // 2. Ejecutar y renderizar el CSS cuando el html tenga el tag data-theme
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

## Paso 7: Componentes compartidos y aislamiento

`src/components/comunes/Confirmacion.jsx` importa estilos de bodas y XV anos al mismo tiempo. Si el nuevo tema tiene una variante de confirmacion:

1. Crea el modulo SCSS para cada evento soportado.
2. Importa los modulos nuevos en `Confirmacion.jsx`.
3. Agrega el tema al `themeMap` para `bodas`, `quince` o ambos.
4. Comprueba que los estilos de XV anos no emitan `:root` globales.

Busca tambien imports cruzados de `variables*.scss`, `globales.scss` y `hero.module.scss`. Un build puede terminar correctamente aunque una variable global de XV anos termine sobrescribiendo una fuente de bodas.

## Paso 8: Tipografias personalizadas desde el contenido

Los layouts `src/layouts/bodas/Layout.astro` y `src/layouts/quince/Layout.astro` leen `theme.typography` del MDX. Si `heading` o `body` tienen valor, el layout:

- escribe `--font-heading` y/o `--font-body` en un selector que incluye la paleta y el tema;
- agrega un enlace a la familia correspondiente de Google Fonts.

Si el frontmatter contiene `typography: {}`, se utilizan las fuentes por defecto del tema. No es necesario escribir fuentes manualmente en Keystatic para usar los defaults.

## Paso 9: Registro actual en Keystatic

El archivo es `keystatic.config.ts`. El objeto `theme.name` aparece una vez en la coleccion `bodas` y otra en `quince`. Actualmente ambas listas contienen `base`, `clasico`, `moderno`, `elegante` y `glass`, pero el router de XV anos solo implementa `base`, `elegante` y `glass`.

Antes de agregar una opcion al CMS, confirma que el evento correspondiente ya tiene:

- su carpeta de estilos;
- su import y mixin en `redireccion.scss`;
- su caso en el `[slug].astro`;
- sus componentes especificos o un fallback valido.

## Paso 10: Validacion

Las invitaciones se escriben en archivos `.mdx`. Su bloque de frontmatter, delimitado por `---`, usa sintaxis YAML. No es un archivo YAML separado; es la metadata YAML que Astro/Keystatic leen al inicio del MDX.

Para una invitacion de prueba, el inicio del archivo `.mdx` puede verse asi:

```mdx
---
version: Lux
titulo: prueba-tema
paleta: base
theme:
  name: nuevo
  colors: {}
  typography: {}
---

# Contenido de la invitacion
```

Prueba al menos una invitacion de bodas y una de XV anos. En DevTools comprueba:

1. `document.documentElement.dataset.theme` coincide con el tema.
2. Bodas tiene `data-paleta`; XV anos tiene `data-paleta-quince`.
3. `getComputedStyle(document.documentElement).getPropertyValue('--font-heading')` devuelve la fuente esperada.
4. Las fuentes personalizadas aparecen en Network cuando se solicitan.
5. Ninguna hoja CSS contiene una regla de XV anos como `:root { --font-heading: ... }`.

Antes de publicar ejecuta:

```bash
npm run build
```

El build debe terminar correctamente. Las advertencias deprecadas de Vite o Sass no sustituyen esta comprobacion; revisa tambien el CSS generado si el tema toca variables globales.

## Checklist final

- [ ] El nombre del tema coincide en carpetas, SCSS, Keystatic y `switch`.
- [ ] Solo se registro en los eventos que realmente lo soportan.
- [ ] Cada evento tiene variables y `globales.scss` compatibles con sus paletas.
- [ ] Las variables de XV anos usan `data-paleta-quince`.
- [ ] Los componentes compartidos tienen el mapeo necesario.
- [ ] `theme.typography` funciona como override opcional.
- [ ] Se probaron bodas y XV anos en local.
- [ ] `npm run build` termina correctamente.
