# 📱 Documentación: Pantalla de Carga con Texto Animado

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Componentes Afectados](#componentes-afectados)
3. [Cómo Funciona](#cómo-funciona)
4. [Ajustes Comunes](#ajustes-comunes)
5. [Estructura del Código](#estructura-del-código)
6. [Personalización Avanzada](#personalización-avanzada)

---

## 🎯 Descripción General

La pantalla de carga es una interfaz elegante que se muestra antes de la invitación principal. Incluye:

- **Texto animado carácter por carácter** usando GSAP
- **Botón "Toca para comenzar"** con animación de pulso
- **Sincronización con audio** - el audio inicia cuando el usuario hace clic
- **Animaciones de salida** suaves cuando se hace clic

---

## 📂 Componentes Afectados

### Componentes JavaScript/JSX:
```
src/components/quince/Hero.jsx
src/components/bodas/Hero.jsx
src/components/bodas/Hero-elegante.jsx
```

### Archivos de Estilos (SCSS):
```
src/estilos/temas/base/quince/hero.module.scss
src/estilos/temas/base/bodas/hero.module.scss
src/estilos/temas/elegante/bodas/hero.module.scss
```

### Componentes de Audio:
```
src/components/quince/Audio.astro
src/components/bodas/Audio.astro
```

---

## ⚙️ Cómo Funciona

### 1. **Flujo de la Aplicación**

```
┌─────────────────────────────────────┐
│  1. Página carga                    │
│  2. Muestra pantalla de carga       │
│  3. Texto se anima (una vez)        │
│  4. Usuario hace clic               │
│  5. Texto sale animado              │
│  6. Botón hace fadeOut              │
│  7. Evento 'iniciarInvitacion'      │
│  8. Audio comienza                  │
│  9. Pantalla hace fadeOut           │
│  10. Invitación aparece             │
└─────────────────────────────────────┘
```

### 2. **Sistema de Estados**

En los componentes Hero se usan dos estados principales:

```javascript
const [iniciado, setIniciado] = useState(false);
const [animandoSalida, setAnimandoSalida] = useState(false);
```

- `iniciado`: Controla si se muestra la pantalla de carga o la invitación
- `animandoSalida`: Controla la animación de salida de la pantalla

### 3. **Evento Personalizado**

Cuando el usuario hace clic, se dispara un evento:

```javascript
window.dispatchEvent(new Event('iniciarInvitacion'));
```

Este evento es escuchado por el componente `Audio.astro` para iniciar la reproducción.

---

## 🎨 Ajustes Comunes

### ✏️ Cambiar el Texto de la Frase

**Ubicación:** Componentes Hero (línea ~110-115)

**Quinceañeras:**
```javascript
{"Queremos que seas parte de nuestra celebración de XV años".split('').map((char, i) => (
  <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
))}
```

**Bodas:**
```javascript
{"Queremos que seas parte de nuestra boda".split('').map((char, i) => (
  <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
))}
```

**Para cambiar:**
1. Reemplaza el texto entre comillas
2. Mantén el `.split('')` y el resto del código
3. Los espacios se convierten automáticamente en `\u00A0` (espacio no separable)

---

### 🎬 Ajustar Velocidad de Animación de Entrada

**Ubicación:** Componentes Hero (línea ~60-70)

```javascript
gsap.fromTo(chars, 
  { opacity: 0.2, y: 10 },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.6,      // ⬅️ Duración total de cada letra
    stagger: 0.02,      // ⬅️ Delay entre letras (más = más lento)
    ease: "power2.out"
  }
);
```

**Valores recomendados:**
- `duration`: 0.4 - 1.0 segundos
- `stagger`: 0.01 - 0.05 segundos

---

### 🎬 Ajustar Velocidad de Animación de Salida

**Ubicación:** Componentes Hero (línea ~75-95)

```javascript
// Animación del texto
gsap.to(chars, {
  opacity: 0,
  y: 20,              // ⬅️ Distancia que baja (px)
  duration: 0.4,      // ⬅️ Duración de la animación
  stagger: 0.01,      // ⬅️ Delay entre letras
  ease: "power2.in"
});

// Animación del botón
gsap.to(button, {
  opacity: 0,
  scale: 0.9,         // ⬅️ Escala final (1 = tamaño normal)
  duration: 0.3,      // ⬅️ Duración
  ease: "power2.in"
});
```

---

### 🎨 Cambiar Colores del Texto

**Ubicación:** Archivos SCSS (línea ~235-250)

```scss
.loadingText {
  font-family: var(--font-heading), serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 300;
  color: rgba(var(--acento-rgb, 212, 175, 55), 0.15); // ⬅️ Color del texto
  line-height: 1.4;
  margin: 0 0 3rem;
  letter-spacing: 0.02em;
  
  span {
    display: inline-block;
    opacity: 0.2;  // ⬅️ Opacidad inicial de cada letra
  }
}
```

**Para cambiar el color:**
- Modifica el valor `0.15` (opacidad del color acento)
- Valores: 0.1 (muy claro) - 0.3 (más oscuro)

---

### 🎨 Cambiar Estilo del Botón

**Ubicación:** Archivos SCSS (línea ~255-275)

```scss
.tapToStart {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--acento);              // ⬅️ Color del texto
  font-weight: 500;
  letter-spacing: 0.1em;
  margin: 0;
  animation: pulse 2s ease-in-out infinite;
  padding: 3rem 2rem;                // ⬅️ Espaciado interno
  display: inline-block;
  background: rgba(var(--acento-rgb, 212, 175, 55), 0.05); // ⬅️ Fondo
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(var(--acento-rgb, 212, 175, 55), 0.1); // ⬅️ Fondo al hover
    transform: scale(1.05);          // ⬅️ Escala al hover
  }
}
```

**Nota:** En Hero-elegante se removieron los bordes para un look más minimalista.

---

### ⏱️ Ajustar Tiempos de Transición

**Ubicación:** Componentes Hero (línea ~15-25 y ~95-100)

```javascript
const handleIniciar = () => {
  setAnimandoSalida(true);
  setTimeout(() => {
    setIniciado(true);
  }, 800);  // ⬅️ Tiempo antes de mostrar invitación (ms)
};

// Dentro de handleIniciarModificado
setTimeout(() => {
  handleIniciar();
}, 500);  // ⬅️ Tiempo de espera después de animar salida (ms)
```

**Tiempos totales:**
- Animación de salida: ~500ms
- Fade out de pantalla: ~800ms
- **Total:** ~1300ms desde el clic hasta ver la invitación

---

### 🎨 Cambiar Fondo de la Pantalla

**Ubicación:** Archivos SCSS (línea ~210-220)

```scss
.loadingScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%); // ⬅️ Fondo
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
  animation: fadeIn 0.5s ease-in-out;
}
```

**Para cambiar:**
- Modifica los colores del gradiente
- O usa un color sólido: `background: #ffffff;`

---

## 🔧 Estructura del Código

### Componente Hero (Estructura Básica)

```javascript
export default function Hero({ nombres, fecha, cover }) {
  // 1. Estados
  const [iniciado, setIniciado] = useState(false);
  const [animandoSalida, setAnimandoSalida] = useState(false);
  const loadingTextRef = useRef(null);

  // 2. Funciones de control
  const handleIniciar = () => { /* ... */ };
  const handleIniciarModificado = () => { /* ... */ };

  // 3. Animación de entrada del texto
  useEffect(() => {
    if (!iniciado && loadingTextRef.current) {
      // Animación GSAP de entrada
    }
  }, [iniciado]);

  // 4. Animación de la invitación
  useEffect(() => {
    if (iniciado) {
      // Animaciones GSAP de la invitación
    }
  }, [iniciado]);

  // 5. Render
  return (
    <>
      {/* Pantalla de carga */}
      {!iniciado && (
        <div onClick={handleIniciarModificado}>
          {/* Texto animado */}
          {/* Botón */}
        </div>
      )}
      
      {/* Invitación principal */}
      <section className={!iniciado ? Style.oculto : ''}>
        {/* Contenido de la invitación */}
      </section>
    </>
  );
}
```

---

### Componente Audio.astro (Estructura)

```astro
<div id="rola">
  <h3>Escucha la <b>canción</b> de ...</h3>
  <audio controls id="audioInvitacion">
    <source src={src} type="audio/mpeg" />
  </audio>
</div>

<script>
  // Escuchar evento personalizado
  window.addEventListener('iniciarInvitacion', () => {
    const audio = document.getElementById('audioInvitacion');
    if (audio) {
      audio.play().catch(error => {
        console.log('Error al reproducir:', error);
      });
    }
  });
</script>
```

---

## 🚀 Personalización Avanzada

### Cambiar Tipo de Animación de Entrada

Puedes cambiar el efecto de entrada modificando las propiedades iniciales:

```javascript
// Efecto actual (de abajo hacia arriba)
gsap.fromTo(chars, 
  { opacity: 0.2, y: 10 },
  { opacity: 1, y: 0, ... }
);

// Efecto de izquierda a derecha
gsap.fromTo(chars, 
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, ... }
);

// Efecto de escala
gsap.fromTo(chars, 
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, ... }
);

// Efecto de rotación
gsap.fromTo(chars, 
  { opacity: 0, rotation: -45 },
  { opacity: 1, rotation: 0, ... }
);
```

---

### Cambiar Tipo de Animación de Salida

```javascript
// Efecto actual (hacia abajo)
gsap.to(chars, {
  opacity: 0,
  y: 20,
  ...
});

// Efecto hacia arriba
gsap.to(chars, {
  opacity: 0,
  y: -20,
  ...
});

// Efecto de dispersión
gsap.to(chars, {
  opacity: 0,
  y: gsap.utils.random(-30, 30),
  x: gsap.utils.random(-30, 30),
  ...
});

// Efecto de escala
gsap.to(chars, {
  opacity: 0,
  scale: 0,
  ...
});
```

---

### Agregar Más Elementos Animados

Si quieres agregar un logo o imagen a la pantalla de carga:

**1. En el JSX:**
```javascript
<div className={Style.loadingContent}>
  {/* Logo */}
  <img 
    src="/ruta/al/logo.png" 
    alt="Logo" 
    className={Style.loadingLogo}
  />
  
  {/* Texto existente */}
  <h2 className={Style.loadingText} ref={loadingTextRef}>
    ...
  </h2>
  
  {/* Botón existente */}
  <p className={Style.tapToStart}>...</p>
</div>
```

**2. En el SCSS:**
```scss
.loadingLogo {
  width: 100px;
  height: 100px;
  margin-bottom: 2rem;
  animation: fadeIn 0.5s ease-in-out;
}
```

**3. Animar la salida:**
```javascript
const logo = document.querySelector(`.${Style.loadingLogo}`);
if (logo) {
  gsap.to(logo, {
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
    ease: "power2.in"
  });
}
```

---

### Cambiar Easing (Curva de Animación)

GSAP ofrece diferentes tipos de easing:

```javascript
// Suave
ease: "power1.out"

// Medio
ease: "power2.out"  // ⬅️ Actual

// Fuerte
ease: "power4.out"

// Elástico
ease: "elastic.out(1, 0.3)"

// Rebote
ease: "bounce.out"

// Circular
ease: "circ.out"
```

---

## 📝 Notas Importantes

### ⚠️ Políticas de Autoplay de Navegadores

Los navegadores modernos bloquean el autoplay de audio. Por eso:

1. ✅ El audio NO tiene `autoplay` en el HTML
2. ✅ Se reproduce DESPUÉS de la interacción del usuario (clic)
3. ✅ Esto cumple con las políticas de Chrome, Firefox, Safari, etc.

### 🔄 Sincronización

El evento `'iniciarInvitacion'` se dispara **antes** de las animaciones de salida para que el audio comience lo más rápido posible.

### 📱 Responsive

Todos los tamaños de fuente usan `clamp()` para adaptarse automáticamente:

```scss
font-size: clamp(min, preferido, max);
// Ejemplo: clamp(1.8rem, 6vw, 3rem)
```

---

## 🐛 Solución de Problemas

### El audio no se reproduce

**Causa:** El navegador bloqueó el autoplay

**Solución:** Asegúrate de que el evento se dispara DESPUÉS del clic del usuario

```javascript
// ✅ Correcto - después del clic
onClick={handleIniciarModificado}

// ❌ Incorrecto - antes del clic
useEffect(() => {
  window.dispatchEvent(new Event('iniciarInvitacion'));
}, []);
```

---

### La animación se ve cortada

**Causa:** El texto es muy largo para el contenedor

**Solución:** Ajusta el `max-width` del contenedor

```scss
.loadingContent {
  max-width: 90%;  // ⬅️ Aumenta este valor
  text-align: center;
  padding: 2rem;
}
```

---

### El botón no desaparece

**Causa:** El selector CSS no encuentra el elemento

**Solución:** Verifica que el botón tenga la clase correcta

```javascript
const button = document.querySelector(`.${Style.tapToStart}`);
console.log('Botón encontrado:', button); // Debug
```

---

## 📚 Recursos Adicionales

- [Documentación de GSAP](https://greensock.com/docs/)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [CSS Clamp Calculator](https://clamp.font-size.app/)

---

## ✅ Checklist de Cambios

Cuando hagas modificaciones, verifica:

- [ ] Los tres componentes Hero están sincronizados
- [ ] Los estilos SCSS están actualizados
- [ ] Las animaciones tienen tiempos coherentes
- [ ] El texto se lee correctamente
- [ ] El audio se reproduce al hacer clic
- [ ] La experiencia es fluida en móvil y desktop
- [ ] No hay errores en la consola del navegador

---

**Última actualización:** 2026-02-05

**Versión:** 1.0

**Autor:** Documentación generada para nvite-home
