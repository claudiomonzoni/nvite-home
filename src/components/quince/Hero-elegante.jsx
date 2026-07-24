import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Style from "../../estilos/temas/elegante/quince/hero.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Hook: useSparkleCanvas ─────────────────────────────────────
// Canvas con puntos diminutos que brillan aleatoriamente,
// simulando papel texturizado reflejando la luz.
// Usa IntersectionObserver para pausar la animación fuera del viewport.
function useSparkleCanvas(canvasRef, isActive) {
  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId = null;
    let sparkles = [];
    let isVisible = true; // Controlado por IntersectionObserver

    // ── Configuración ────────────────────────────────
    const SPARKLE_COUNT = 4000;        // Cantidad de puntos
    const MIN_RADIUS = 0.5;           // Radio mínimo del punto (px)
    const MAX_RADIUS = 2.0;           // Radio máximo del punto (px)
    const MIN_OPACITY = 0.05;         // Opacidad mínima (casi invisible)
    const MAX_OPACITY = 0.85;         // Opacidad máxima del brillo
    const MIN_SPEED = 0.3;            // Velocidad mínima de parpadeo
    const MAX_SPEED = 1.8;            // Velocidad máxima de parpadeo

    // ── Leer color del tema CSS ──────────────────────
    const getSparkleColor = () => {
      const style = getComputedStyle(document.documentElement);
      const color = style.getPropertyValue("--acento").trim();

      const temp = document.createElement("div");
      temp.style.color =  "#ffffff";
      document.body.appendChild(temp);
      const computed = getComputedStyle(temp).color;
      document.body.removeChild(temp);

      const match = computed.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: +match[1], g: +match[2], b: +match[3] };
      return { r: 201, g: 169, b: 110 };
    };

    const color = getSparkleColor();

    // Dimensiones cacheadas (evita getBoundingClientRect en cada frame)
    let cachedWidth = 0;
    let cachedHeight = 0;

    // Ajustar canvas al tamaño del contenedor
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      const newW = rect.width;
      const newH = rect.height;

      canvas.width = newW * dpr;
      canvas.height = newH * dpr;
      canvas.style.width = newW + "px";
      canvas.style.height = newH + "px";
      ctx.scale(dpr, dpr);

      // Solo regenerar sparkles si es la primera vez o el tamaño cambió significativamente
      const sizeChanged = Math.abs(newW - cachedWidth) > 2 || Math.abs(newH - cachedHeight) > 2;
      if (sparkles.length === 0 || sizeChanged) {
        sparkles = generateSparkles();
      }

      cachedWidth = newW;
      cachedHeight = newH;
    };

    // Generar puntos con coordenadas normalizadas (0-1)
    // Así no se reacomodan al redimensionar
    const generateSparkles = () => {
      return Array.from({ length: SPARKLE_COUNT }, () => ({
        nx: Math.random(),  // Posición X normalizada (0-1)
        ny: Math.random(),  // Posición Y normalizada (0-1)
        radius: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
        phase: Math.random() * Math.PI * 2,
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        maxOpacity: MIN_OPACITY + Math.random() * (MAX_OPACITY - MIN_OPACITY),
      }));
    };

    // Loop de animación (usa dimensiones cacheadas, no getBoundingClientRect)
    const animate = (time) => {
      if (!isVisible) {
        animationId = null;
        return;
      }

      ctx.clearRect(0, 0, cachedWidth, cachedHeight);

      const t = time * 0.001;

      for (const s of sparkles) {
        const sin = Math.sin(t * s.speed + s.phase);
        const opacity = s.maxOpacity * Math.max(0, sin * sin * sin);
        if (opacity < 0.01) continue;

        const size = s.radius * 2;
        // Convertir coordenadas normalizadas a píxeles reales
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        ctx.fillRect(s.nx * cachedWidth, s.ny * cachedHeight, size, size);
      }

      animationId = requestAnimationFrame(animate);
    };

    // ── IntersectionObserver: pausar fuera del viewport ──
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        // Reanudar animación al volver a ser visible
        if (isVisible && !animationId) {
          animationId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0 } // Se activa apenas un pixel es visible
    );

    const parent = canvas.parentElement;
    if (parent) observer.observe(parent);

    resize();
    animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [canvasRef, isActive]);
}

export default function HeroElegante({ nombres, fecha, cover, labels, lang = 'es-ES', initialInvitado = null }) {
  const l = {
    loading: labels?.loading || "Quiero que sean parte de la celebración de mis XV años",
    tap: labels?.tap || "Toca para comenzar",
    honor: labels?.honor || "Mis 15 años",
    saveDate: labels?.saveDate || "SAVE THE DATE",
    passes: labels?.passes || "No. de pases",
  };
  const [invitado, setInvitado] = useState(initialInvitado ? initialInvitado.nombre : "-");
  const [pase, setPase] = useState(initialInvitado ? initialInvitado.pases : 0);
  const [iniciado, setIniciado] = useState(false);
  const [animandoSalida, setAnimandoSalida] = useState(false);
  const loadingTextRef = useRef(null);
  const imgRef = useRef(null);
  const sparkleCanvasRef = useRef(null);
  const heroSparkleCanvasRef = useRef(null);

  // Sparkles en la pantalla de carga (se desactiva al iniciar)
  useSparkleCanvas(sparkleCanvasRef, !iniciado);
  // Sparkles en la section hero (se activa al iniciar, se pausa fuera del viewport)
  useSparkleCanvas(heroSparkleCanvasRef, iniciado);

  const handleIniciar = () => {
    setAnimandoSalida(true);
    setTimeout(() => {
      setIniciado(true);
    }, 800);
  };

  useEffect(() => {
    if (initialInvitado) {
      return;
    }

    // confirmacion de id
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");
    const uid = params.get("uid");

    if (id && uid) {
      // Fetch data cuando se monta el componente
      fetch(`${window.location.origin}/api/getInvitado.json?id=${id}&uid=${uid}`)
        .then(res => res.json())
        .then(json => {
          if (json && json[0]) {
            setInvitado(json[0].nombre);
            setPase(json[0].pases);
          }
        })
        .catch(err => console.error("Error fetching guest in Hero-elegante:", err));
    }
  }, [initialInvitado]);

  // Animación del texto de carga
  useEffect(() => {
    if (!iniciado && loadingTextRef.current) {
      const chars = loadingTextRef.current.querySelectorAll('span');

      gsap.fromTo(chars,
        { opacity: 0.2, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: "power2.out"
        }
      );
    }
  }, [iniciado]);

  // Modificar handleIniciar para disparar evento
  const handleIniciarModificado = () => {
    // Disparar evento personalizado para que el audio comience
    window.dispatchEvent(new Event('iniciarInvitacion'));

    // Animar salida del texto y botón
    const chars = loadingTextRef.current?.querySelectorAll('span');
    const button = document.querySelector(`.${Style.tapToStart}`);

    if (chars) {
      gsap.to(chars, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.01,
        ease: "power2.in"
      });
    }

    if (button) {
      gsap.to(button, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in"
      });
    }

    // Esperar a que termine la animación antes de cambiar de pantalla
    setTimeout(() => {
      handleIniciar();
    }, 500);
  };

  // Animación de la invitación
  useEffect(() => {
    if (iniciado) {
      setTimeout(() => {
        const contenido = document.querySelector(".contenido");
        if (contenido) {
          contenido.classList.remove("opa");

          gsap.from(".contenido", { opacity: 0, y: -30, duration: 1, delay: 0 });

          const tl = gsap.timeline();
          tl.from("#imagenArco", {
            opacity: 0,
            y: -30,
            delay: 1,
            duration: 1,
            ease: "power4.out",
          });
          tl.from("#centro *", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power4.out",
            stagger: { amount: 0.5 },
          });
        }
      }, 100);
    }
  }, [iniciado]);

  // Efecto para mantener la imagen fija al hacer scroll usando GSAP ScrollTrigger con efecto de paralaje y retraso suave
  useEffect(() => {
    if (!iniciado || !imgRef.current) return;

    const img = imgRef.current;
    const parent = img.parentElement;

    const ctx = gsap.context(() => {
      gsap.to(img, {
        y: () => parent ? parent.offsetHeight * 0.7 : 0,
        scale: 1.7,
        //ease: "none",
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "bottom top",
          scrub: 1.2, // Retraso suave de 1.2 segundos para el efecto inercia
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [iniciado]);

  // Formatear fecha
  const fechaFormateada = (() => {
    try {
      if (!fecha) return 'Fecha por confirmar';
      const date = new Date(fecha);
      date.setDate(date.getDate() + 1);
      if (isNaN(date.getTime())) return 'Fecha inválida';
      return date.toLocaleDateString(lang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timeZone: 'America/Mexico_City'
      });
    } catch (error) {
      console.error('Error parsing date:', fecha, error);
      return 'Fecha por confirmar';
    }
  })();

  return (
    <>
      {/* Pantalla de carga */}
      {!iniciado && (
        <div
          className={`${Style.loadingScreen} ${animandoSalida ? Style.fadeOut : ''}`}
          onClick={!animandoSalida ? handleIniciarModificado : null}
        >
          {/* Canvas de puntos brillantes — efecto papel texturizado */}
          <canvas
            ref={sparkleCanvasRef}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div className={Style.loadingContent}>
            <h2 className={Style.loadingText} ref={loadingTextRef}>
              {l.loading.split(' ').map((word, i) => (
                <span key={i}>{word}{'\u00A0'}</span>
              ))}
            </h2>
            {!animandoSalida && (
              <p className={Style.tapToStart}>{l.tap}</p>
            )}
          </div>
        </div>
      )}

      <section id={Style["hero"]} className={`contenido opa ${!iniciado ? Style.oculto : ''}`} style={{ position: 'relative' }}>
        {/* Canvas de puntos brillantes en el hero */}
        <canvas
          ref={heroSparkleCanvasRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div className={Style.xv}>
          XV
        </div>
        {/* SVG clipPath con curva Bézier para el arco suave */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="arcoInferior" clipPathUnits="objectBoundingBox">
              {/* 
                Curvas cúbicas (C) — cada esquina tiene su propia curvatura:
                
                L 1,0.82  → baja por el lado derecho hasta el 82% (inicio de la curva)
                C 1,0.96  → control 1: la esquina derecha se redondea (más cerca de 1 = más redonda)
                  0.78,1  → control 2: hasta dónde llega el borde inferior plano desde la derecha
                  0.5,1   → punto final: centro inferior
                C 0.22,1  → control 1: desde dónde el borde inferior plano empieza a subir
                  0,0.96  → control 2: la esquina izquierda se redondea
                  0,0.82  → punto final: sube al 82% por el lado izquierdo
                
                Ajustar:
                - 0.82 → dónde inician las curvas en los lados
                - 0.96 → qué tan redondas son las esquinas (0.85=suave, 1.0=muy redonda)
                - 0.78/0.22 → ancho de la parte plana del fondo
              */}
              <path d="
              M 0,0  
              L 1,0 
              L 1,0.70 
              C 1,0.96 0.78,1 0.5,1 
              C 0.22,1 0,0.96 0,0.70 
              Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Imagen con arco inferior */}
        <div className={Style.imagenPrincipal} id="imagenArco">
          <img ref={imgRef} src={cover} alt="cover" />
        </div>

        {/* Contenido de texto centrado */}
        <div className={Style.contenidoHero} id="centro">
          <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>

          <p className={Style.misQuince}>{l.honor}</p>

          <p className={Style.fecha}>{fechaFormateada}</p>

          <div className={Style.separador}></div>
          <p className={Style.saveDate}>{l.saveDate}</p>
          <div className={Style.separador}></div>

          {invitado && invitado !== "-" && (
            <p className={Style.nombreInvitado}>{invitado}</p>
          )}

          {pase ? (
            <div id={Style["pases"]}>
              {l.passes} <p id={Style["NumeroPases"]}>{pase}</p>
            </div>
          ) : ""}
        </div>
      </section>
    </>
  );
}