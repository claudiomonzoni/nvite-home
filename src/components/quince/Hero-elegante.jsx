import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Style from "../../estilos/temas/elegante/quince/hero.module.scss";

export default function HeroElegante({ nombres, fecha, cover, labels, lang = 'es-ES' }) {
  const l = {
    loading: labels?.loading || "Queremos que seas parte de nuestra celebración de XV años",
    tap: labels?.tap || "Toca para comenzar",
    honor: labels?.honor || "Mis 15 años",
    saveDate: labels?.saveDate || "SAVE THE DATE",
    passes: labels?.passes || "No. de pases",
  };
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [animandoSalida, setAnimandoSalida] = useState(false);
  const loadingTextRef = useRef(null);

  const handleIniciar = () => {
    setAnimandoSalida(true);
    setTimeout(() => {
      setIniciado(true);
    }, 800);
  };

  useEffect(() => {
    // confirmacion de id
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");
    const uid = params.get("uid");

    // Fetch data cuando se monta el componente
    fetch(`${window.location.origin}/api/getInvitado.json?id=${id}&uid=${uid}`)
      .then(res => res.json())
      .then(json => {
        setInvitado(json[0].nombre);
        setPase(json[0].pases);
      })
  }, []);

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

          gsap.from(".contenido", { opacity: 0, y: -30, duration: 1, delay: 0.2 });

          const tl = gsap.timeline();
          tl.from("#imagenArco", {
            opacity: 0,
            y: -30,
            delay: 1.5,
            duration: 1,
            ease: "power4.out",
          });
          tl.from("#centro *", {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power4.out",
            stagger: { amount: 0.5 },
          });
        }
      }, 100);
    }
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

      <section id={Style["hero"]} className={`contenido opa ${!iniciado ? Style.oculto : ''}`}>
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
          <img src={cover} alt="cover" />
        </div>

        {/* Contenido de texto centrado */}
        <div className={Style.contenidoHero} id="centro">
          <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>

          <p className={Style.misQuince}>{l.honor}</p>

          <p className={Style.fecha}>{fechaFormateada}</p>

          <div className={Style.separador}></div>
          <p className={Style.saveDate}>{l.saveDate}</p>
          <div className={Style.separador}></div>

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