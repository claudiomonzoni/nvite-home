---
description: Instrucciones para personalizar colores y tipografías por invitación MDX
---

# Personalización de Colores y Tipografías por Invitación

Este documento explica cómo implementar la funcionalidad para sobrescribir colores y tipografías de manera independiente en cada invitación (MDX), sin afectar al resto de las invitaciones.

## 📋 Estado Actual del Sistema

### Estructura de Temas
- **Keystatic Config**: Define `theme` con subcampos:
  - `name`: Selector del tema (base, clásico, moderno, elegante)
  - `colors`: Objeto con propiedades (primary, secondary, accent, background, text)
  - `typography`: Objeto con propiedades (heading, body)

### Estructura de Paletas
- **Paletas predeterminadas**: base, invierno, otoño, primavera, verano
- **Ubicación**: `src/estilos/paletas/quince/[nombre].scss`
- **Formato**: Mixins de SCSS que definen variables CSS

### Cómo funciona actualmente
1. En cada MDX se define:
   - `paleta`: Selector de paleta (base, invierno, etc.)
   - `theme.name`: Selector de tema (base, clásico, etc.)
   - `theme.colors`: {} (vacío por defecto)
   - `theme.typography`: {} (vacío por defecto)

2. En el Layout (`src/layouts/quince/Layout.astro`):
   - Se pasan como atributos data: `data-paleta={paleta}` y `data-theme={name}`
   - El HTML queda: `<html lang="es" data-paleta="invierno" data-theme="base">`

3. En los estilos (`src/estilos/quince/redireccion.scss`):
   - Se aplican las paletas según `data-paleta`
   - Se aplican los temas según `data-theme`

## 🎯 Objetivo

Permitir que en cualquier MDX se puedan definir colores y tipografías personalizadas que sobrescriban las del tema y paleta predeterminados, sin afectar a otras invitaciones.

## 🛠️ Pasos de Implementación

### PASO 1: Modificar el Layout para inyectar estilos inline

**Archivo**: `src/layouts/quince/Layout.astro`

**Qué hacer**:
1. Extraer los valores de `colors` y `typography` del prop `theme`
2. Generar un bloque de estilos CSS inline que sobrescriba las variables CSS
3. Inyectar este bloque dentro del `<head>` del HTML

**Ejemplo de código**:

```astro
---
// ... código existente ...
const { title, url, cover, paleta, theme } = Astro.props;
const { name, colors, typography } = theme || {};

// Generar CSS personalizado solo si hay valores
const customStyles = [];

// Colores personalizados
if (colors) {
  if (colors.primary) customStyles.push(`--primario: ${colors.primary};`);
  if (colors.secondary) customStyles.push(`--secundario: ${colors.secondary};`);
  if (colors.accent) customStyles.push(`--acento: ${colors.accent};`);
  if (colors.background) customStyles.push(`--fondo: ${colors.background};`);
  if (colors.text) customStyles.push(`--texto: ${colors.text};`);
}

// Tipografías personalizadas
if (typography) {
  if (typography.heading) customStyles.push(`--font-heading: '${typography.heading}', serif;`);
  if (typography.body) customStyles.push(`--font-body: '${typography.body}', sans-serif;`);
}

const customStylesString = customStyles.length > 0 
  ? `<style>:root { ${customStyles.join(' ')} }</style>`
  : '';
---

<!doctype html>
<html lang="es" data-paleta={paleta} data-theme={name}>
  <head>
    <!-- ... metadatos existentes ... -->
    
    <!-- Inyectar estilos personalizados -->
    {customStyles.length > 0 && (
      <style set:html={`
        :root {
          ${customStyles.join('\n          ')}
        }
      `} />
    )}
  </head>
  <body>
    <slot />
  </body>
</html>
```

### PASO 2: Adaptar las variables SCSS para usar las CSS variables

**Archivos afectados**:
- Todos los archivos SCSS que usen colores (`hero.module.scss`, `globales.scss`, etc.)

**Qué hacer**:
1. Asegurarse de que todos los estilos usen las variables CSS (`var(--primario)`, `var(--acento)`, etc.) en lugar de variables SCSS
2. Si hay fuentes definidas, usar las variables CSS de tipografía

**Ejemplo**:
```scss
// ❌ MAL (variable SCSS)
color: $primario;

// ✅ BIEN (variable CSS)
color: var(--primario);

// ✅ Tipografía personalizable
font-family: var(--font-heading, "Sacramento"), serif;
body {
  font-family: var(--font-body, "Old Standard TT"), sans-serif;
}
```

### PASO 3: Cargar fuentes de Google Fonts dinámicamente (opcional)

**Archivo**: `src/layouts/quince/Layout.astro`

**Qué hacer**:
Si se definen fuentes personalizadas en `typography`, cargarlas dinámicamente desde Google Fonts.

**Ejemplo**:
```astro
---
// ... código existente ...

// Generar links de Google Fonts si hay tipografías personalizadas
const fontLinks: string[] = [];
if (typography?.heading && typography.heading !== 'Sacramento') {
  fontLinks.push(`https://fonts.googleapis.com/css2?family=${typography.heading.replace(/ /g, '+')}&display=swap`);
}
if (typography?.body && typography.body !== 'Old Standard TT') {
  fontLinks.push(`https://fonts.googleapis.com/css2?family=${typography.body.replace(/ /g, '+')}&display=swap`);
}
---

<head>
  <!-- ... otros links ... -->
  
  <!-- Fuentes personalizadas -->
  {fontLinks.map(link => (
    <link rel="stylesheet" href={link} />
  ))}
</head>
```

### PASO 4: Actualizar las variables SCSS base para incluir fallbacks

**Archivo**: `src/estilos/temas/base/quince/variablesquince.scss`

**Qué hacer**:
Asegurarse de que las variables de tipografía estén definidas como CSS variables con fallbacks.

**Ejemplo**:
```scss
:root {
  --font-heading: "Sacramento", cursive;
  --font-body: "Old Standard TT", serif;
}

// En los estilos globales
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading, "Sacramento"), cursive;
}

body, p, span, div {
  font-family: var(--font-body, "Old Standard TT"), serif;
}
```

### PASO 5: Probar la funcionalidad

**En Keystatic**:
1. Abrir una invitación MDX (por ejemplo, `cloe-guadalupe.mdx`)
2. En el campo `Theme > Colors`, agregar valores:
   ```
   primary: #FF6B6B
   accent: #4ECDC4
   ```
3. En el campo `Theme > Typography`, agregar valores:
   ```
   heading: Playfair Display
   body: Lato
   ```
4. Guardar y verificar que:
   - Los colores se apliquen correctamente
   - Las fuentes se carguen y se apliquen
   - Otras invitaciones NO se vean afectadas

## 🔍 Verificación

### Checklist de pruebas:
- [ ] Los colores personalizados se aplican correctamente
- [ ] Las tipografías personalizadas se cargan desde Google Fonts
- [ ] Las tipografías personalizadas se aplican a los elementos correctos
- [ ] Las invitaciones sin personalización siguen usando la paleta/tema predeterminado
- [ ] Múltiples invitaciones con personalizaciones diferentes no se afectan entre sí
- [ ] Los fallbacks funcionan si no hay valores personalizados

## 📝 Notas Importantes

1. **Prioridad CSS**: Los estilos inline en `:root` tienen mayor prioridad que los definidos en archivos SCSS, por lo que sobrescriben correctamente.

2. **Mapeo de nombres**: Asegurarse de que los nombres de las propiedades en Keystatic coincidan con las variables CSS:
   - `primary` → `--primario`
   - `secondary` → `--secundario`
   - `accent` → `--acento`
   - `background` → `--fondo`
   - `text` → `--texto`

3. **Compatibilidad de fuentes**: Google Fonts requiere nombres exactos. Considerar agregar validación o un selector en Keystatic.

4. **Performance**: Cargar solo las fuentes necesarias para evitar impacto en rendimiento.

5. **Cache**: Si se usan fuentes personalizadas, considerar el impacto en el tiempo de carga inicial.

## 🎨 Ejemplo de Uso en MDX

```yaml
---
# ... otros campos ...
paleta: invierno
theme:
  name: base
  colors:
    primary: "#FF6B6B"
    accent: "#4ECDC4"
    background: "#F7F7F7"
  typography:
    heading: "Playfair Display"
    body: "Lato"
---
```

Este enfoque permite:
- ✅ Personalización total por invitación
- ✅ No afecta a otras invitaciones
- ✅ Mantiene compatibilidad con sistema de paletas/temas existente
- ✅ Fácil de implementar y mantener
