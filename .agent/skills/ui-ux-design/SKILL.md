---
name: ui-ux-design
description: Directrices avanzadas de diseño de interfaz (UI), experiencia de usuario (UX), componentes responsivos, modales y sistemas de diseño premium para nvitaciones.
---

# Skill de Diseño UI / UX - Nvitaciones

Este documento define el estándar de diseño, experiencia de usuario e interfaz gráfica para los módulos del panel de administración de **Nvitaciones**.

---

## 🎨 1. Principios de Estética y Visualidad (WOW Factor)

1. **Diseño Espacioso y Limpio**: Evitar tarjetas comprimidas o abarrotadas. Utilizar márgenes amplios (`gap: 1.5rem` a `2rem`, `padding: 1.5rem` a `2rem`).
2. **Jerarquía Tipográfica Clara**:
   - Títulos principales: Font weight 700-800, colores contrastantes (`$primario: #656A8D`, `#1e293b`).
   - Etiquetas secundarias: Font size `0.85rem`, colores atenuados (`#64748b`).
3. **Paleta de Colores y Badges de Estado**:
   - 🟢 **Liquidado / Confirmado**: Fondo `#dcfce7`, texto `#15803d`, borde `#bbf7d0`.
   - 🟠 **Pendiente / Parcial**: Fondo `#fffbeb`, texto `#b45309`, borde `#fde68a`.
   - 🔴 **Urgente / Sobrecupo / Declinado**: Fondo `#fef2f2`, texto `#b91c1c`, borde `#fecaca`.
   - 🔵 **Información / Categoría**: Fondo `#e0e7ff`, texto `#4338ca`, borde `#c7d2fe`.
4. **Sombras y Bordes Modernos**:
   - Tarjetas principales: `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); border: 1px solid #e2e8f0; border-radius: 16px;`.
   - Modales dialog: `box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.3); border-radius: 20px;`.

---

## 📱 2. Disposición de Tarjetas y Grid Responsivo

- **Ancho Amplio de Tarjetas**: Las tarjetas del panel no deben ser angostas. Deben tener un ancho mínimo amplio (`minmax(380px, 1fr)` o `minmax(420px, 1fr)`), similar a las tarjetas de invitados.
- **Distribución de Columnas**:
  - Desktop (>1024px): Grid de 2 a 3 columnas anchas o diseño de 2 columnas principales.
  - Tablet / Celular (<768px): 1 columna fluida con padding adaptativo (`1rem`).

---

## 🪟 3. Mecánica y Experiencia en Modales (`<dialog>`)

1. **Boton Cierre [X] destacado**: Esquina superior derecha con estado hover visible (`background: #f1f5f9; hover: #fef2f2; color: #dc2626`).
2. **Cierre por Clic en Fondo (Backdrop Click)**: Todos los modales deben poder cerrarse haciendo clic en cualquier parte fuera del recuadro blanco del modal.
3. **Aislamiento de Formulario (Cero Superposición)**:
   - Los formularios dentro de modales deben usar la estructura `<label class="form-label"><span>Título</span><input ... /></label>` para evitar que el SCSS global deforme o encime los textos sobre los inputs.
   - Las cajas de texto deben tener `min-height: 44px`, padding cómodo `0.65rem 0.9rem`, y bordes `1.5px solid #cbd5e1`.
4. **Distribución Interna en 2 Columnas**:
   - Columna 1 (Izquierda): Edición de datos principales e historial financiero.
   - Columna 2 (Derecha): Checklist interactivo, notas de requerimientos y acciones rápidas.

---

## ⚡ 4. Interacción y Micro-animaciones

- Transición en hover para tarjetas: `transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);`.
- Transición en botones: `transition: all 0.2s ease-in-out;`.
