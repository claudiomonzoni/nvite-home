# Guía de Actualización a Astro 6

Este documento contiene las instrucciones detalladas paso a paso para que un agente o desarrollador realice la actualización de este proyecto de **Astro v5** a **Astro v6**.

---

## 📋 Requisitos Previos

Astro 6 elimina por completo el soporte para Node 18 y Node 20.

1. **Node.js**: Asegúrate de tener instalado **Node.js 22.12.0 o superior** en tu entorno local.
2. **Entorno de Producción**: Asegúrate de que el dashboard de **Vercel** esté configurado para compilar con Node 22.
3. **Archivo de Configuración de Versión (Opcional)**: Puedes crear un archivo `.nvmrc` en la raíz del proyecto para fijar la versión de Node:
   ```bash
   22.12.0
   ```

---

## 🛠️ Paso 1: Actualización de Dependencias Oficiales

Ejecuta el asistente de actualización oficial para subir de versión Astro y sus adaptadores/integraciones:

```bash
npx @astrojs/upgrade
```

Esto actualizará los siguientes paquetes en el [package.json](file:///c:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/package.json):
- `astro` ➡️ `^6.0.0`
- `@astrojs/db` ➡️ `^0.20.0` o superior
- `@astrojs/mdx` ➡️ `^4.4.0` o superior
- `@astrojs/react` ➡️ `^4.5.0` o superior
- `@astrojs/sitemap` ➡️ `^3.8.0` o superior
- `@astrojs/vercel` ➡️ `^10.0.0` o superior (necesario para compatibilidad con Vite 7 y la API de entornos)

---

## 📦 Paso 2: Actualización de Keystatic (Crítico)

Las versiones anteriores de Keystatic causan fallos de compilación e incompatibilidades en el panel de administración debido a cambios en el árbol de contexto de React en Astro 6.

Instala la última versión de Keystatic (debe ser la versión **5.1.0 o superior**):

```bash
yarn add @keystatic/astro@latest @keystatic/core@latest
```

---

## 🔒 Paso 3: Resolución de Dependencias de `stripe-astro-loader`

La versión instalada de `stripe-astro-loader` (`1.5.0`) es compatible en tiempo de ejecución con Zod 4 y Astro 6. Sin embargo, su `package.json` restringe las dependencias cruzadas a `astro: "^4.14.0 || ^5.0.0"`.

Al realizar el proceso de actualización, es posible que el gestor de paquetes de advertencias de dependencias cruzadas. Si usas yarn/npm, puedes omitir la advertencia o configurar una resolución temporal en tu [package.json](file:///c:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/package.json) agregando:

```json
"resolutions": {
  "stripe-astro-loader/astro": "^6.0.0"
}
```

---

## 📝 Paso 4: Cambios en el código fuente

### A. Actualizar e Limpiar [src/content.config.ts](file:///c:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content.config.ts)

1. **Importar Zod de `astro/zod`**:
   Importar `z` desde `astro:content` está deprecated. Modifica la parte superior de tu archivo:
   ```typescript
   // Antes:
   import { defineCollection, z } from "astro:content";

   // Después:
   import { defineCollection } from "astro:content";
   import { z } from "astro/zod";
   ```

2. **Eliminar la colección `imagenes`**:
   Astro 6 exige que todas las colecciones posean un `loader`. La colección `imagenes` no lo tiene y como **no se utiliza en ningún sitio del proyecto**, comentar el codigo por completo:
   ```typescript
   // COMENTAR esta colección:
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

   // Y remuévela del export final con un comentario de como debe usarse en el futuro de ser necesaria
   export const collections = { bodas, quince, productos, precios };
   ```

3. **(Opcional) Limpiar validaciones deprecated de Zod**:
   Modifica las validaciones de email en tus colecciones de `bodas` y `quince` para evitar advertencias de desuso:
   * Cambia `email: z.string().email().optional()` por `email: z.email().optional()`.
   * Cambia `progresoEmail: z.string().email().optional()` por `progresoEmail: z.email().optional()`.

### B. Limpiar Importaciones en [src/layouts/Layout.astro](file:///c:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro)

Astro 6 elimina el componente `<ViewTransitions />` en favor de `<ClientRouter />` (que ya está implementado en tu layout).
Edita la línea 8 del layout para eliminar el import obsoleto:

```typescript
// Antes:
import { ClientRouter, ViewTransitions } from "astro:transitions";

// Después:
import { ClientRouter } from "astro:transitions";
```

---

## 🧪 Paso 5: Verificación y Pruebas

Una vez realizados todos los pasos anteriores, ejecuta los siguientes comandos para confirmar que todo funciona correctamente:

1. **Instalación de paquetes limpia**:
   ```bash
   yarn install
   ```
2. **Prueba de compilación de producción**:
   ```bash
   yarn build
   ```
3. **Prueba de desarrollo y CMS**:
   Inicia el servidor de desarrollo local y navega a `/keystatic` para verificar que el administrador de Keystatic carga sin errores:
   ```bash
   yarn dev
   ```
