# Walkthrough: Módulo de Proveedores (Panel LUX) y Unificación UI/UX

Hemos implementado exitosamente el **Módulo de Proveedores** en el panel de administración (`nvite-home`) y llevado a cabo una **unificación de UI/UX** responsiva en todo el panel de administración (**Invitados**, **Gestión de Mesas** y **Proveedores**). Además, habilitamos la activación de este módulo desde el Panel de Control de Administración de Clientes y mejoramos el diseño general del mismo.

---

## 🚀 Cambios Realizados y Unificación de UI/UX

### 1. Unificación de Modales y Cierre por Backdrop Click
- **Botón de Cierre Flotante `[ X ]`**: Todos los modales en **Editar Invitado**, **Agregar Invitado**, **Crear/Editar Mesas** y **Proveedores** comparten el mismo botón flotante circular blanco (`position: absolute; top: 1.5rem; right: 1.5rem;`), sombra sutil y rotación de 90° al posar el cursor.
- **Backdrop Oscuro con Desenfoque (Blur)**: `dialog::backdrop` estandarizado globalmente en `globales.scss` con `background: rgba(101, 106, 141, 0.65)` ($primario) y `backdrop-filter: blur(5px)`.
- **Cierre al Tocar Fuera (Backdrop Click)**: Todos los modales del panel se cierran al hacer clic sobre el fondo translúcido (en proveedores se incluye salvaguarda si hay cambios pendientes por guardar).

### 2. Coherencia en Inputs (Sin Sombras, Solo Línea de Borde)
- Eliminadas las sombras globales (`box-shadow: none !important;`) en todos los `input`, `select` y `textarea` del panel.
- Borde limpio unificado (`border: 1.5px solid #cbd5e1; border-radius: 8px;`) con resplandor suave al enfocar (`:focus`).

### 3. Coherencia Iconográfica
- Sincronizados los iconos de edición en todas las tarjetas utilizando el icono de lápiz relleno (`mdi:pencil`).

### 4. Responsividad Táctica y Botones Flotantes en Móvil
- **Barra de Acciones Flotante**: En pantallas móviles, los botones principales (**`⚡ Precargar Comunes`** y **`+ Agregar Proveedor`**) se fijan de forma permanente en la parte inferior de la pantalla (`position: fixed; bottom: 0; left: 0;`), integrándose con la estética general del panel de Invitados y Mesas.
- **Margen Inferior Inteligente**: Añadido relleno extra en la base (`padding-bottom: 6rem`) para evitar que el contenido sea cubierto por la barra flotante.
- **Responsividad Nativa del Grid**: Se eliminó el contenedor `div` intermedio e innecesario en `index.astro` para permitir que el módulo de proveedores herede directamente la alineación responsiva y fluida del grid de Astro.

### 5. Control de Activación de Proveedores (`addonProveedores`) en el Panel de Administrador
- **Base de Datos**: Vinculada la columna `addonProveedores` en la tabla `Usuario`.
- **Tipado**: Añadida la propiedad `addonProveedores` a la interfaz `user` en `src/env.d.ts`.
- **API Endpoint (`src/pages/api/admin/usuarios.json.ts`)**: Actualizadas las peticiones `GET`, `POST` y `PATCH` para listar, crear y actualizar el addon de proveedores de cada usuario cliente.
- **Panel de Control de Clientes (`src/pages/panel/admin/index.astro`)**:
  - Se agregó la columna "Proveedores" en el listado de clientes bajo la lista de addons activos.
  - Se añadieron checkboxes en los modales de **Crear Cliente** y **Editar Cliente** para activar/desactivar el Gestor de Proveedores a voluntad.

### 6. Refactorización del Ancho y Columnas del Panel de Clientes Admin
- **Ancho Completo Fluido**: Removido el límite `max-width: 1800px` de `.admin-content` para permitir que el panel se expanda de forma fluida al 100% de la pantalla en cualquier resolución alta.
- **Listado Simplificado con Tooltips**:
  - **Email**: Se reemplazó el texto del correo por un botón de icono (`mdi:email`) con enlace `mailto:` directo y tooltip nativo (`title`) al pasar el cursor.
  - **Ruta**: Se reemplazó el slug textual por un botón de enlace (`mdi:link-variant`) que abre la invitación en una pestaña nueva con tooltip explicativo.
  - **Estilos Premium**: Ambos botones de tooltip poseen micro-animaciones en hover (`translateY(-2px)`), sombras de profundidad y colores curados distintivos.

---

## 🧪 Instrucciones para probar con `yarn dev`

1. Inicia el servidor de desarrollo en local.
2. Entra al panel de administración en `http://localhost:4321/panel/admin` (asegúrate de que tu usuario tenga rol de admin).
3. Verifica que la tabla se expanda sin límites en monitores anchos y que las columnas de Email y Ruta contengan los nuevos iconos interactivos.
