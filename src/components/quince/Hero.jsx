import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Style from "../../estilos/temas/base/quince/hero.module.scss";

export default function Hero({ nombres, fecha, cover }) {
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
    const pase = document.querySelector(".paseSpan");
    const spanVarios = document.querySelector(".variosSpan");

    // Fetch data cuando se monta el componente
    fetch(`${window.location.origin}/api/getInvitado.json?id=${id}&uid=${uid}`)
    .then(res => res.json())
    .then(json=>{

      setInvitado(json[0].nombre);
      setPase(json[0].pases);
      if (json[0].pases > 1) {
        spanVarios.textContent = "Los";
        pase.textContent = " pases";
      } else {
        spanVarios.textContent = "Te";
        pase.textContent = " pase";
      }
    }
    )
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
          // Sin repeat para que solo se anime una vez
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
          
          const tl = gsap.timeline();
          gsap.from(".contenido", { opacity: 0, y: -30, duration: 1, delay: 0.2 });
          tl.from("#bande", {
            opacity: 0,
            y: -30,
            delay: 2,
            height: 500,
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
              {"Queremos que seas parte de nuestra celebración de XV años".split('').map((char, i) => (
                <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h2>
            {!animandoSalida && (
              <p className={Style.tapToStart}>Toca para comenzar</p>
            )}
          </div>
        </div>
      )}

      <section id={Style["hero"]} className={`contenido opa ${!iniciado ? Style.oculto : ''}`}>
        <div className={Style["laimagen"]}>
          <img src={cover} alt="cover" />
        </div>
        <div className={Style.bandeja} id="bande">
          <div className={Style.centro} id="centro">
            
            <p className={Style.familia} id="invitado">
              {invitado}
            </p>
            <p>
            Tengo el honor de invitarlos a celebrar mis XV años
            </p>
            <p className={Style.fecha}>
              La cita es el día  
              <b>
                {'\u00A0' + (() => {
                  try {
                    if (!fecha) return 'Fecha por confirmar';
                    // Add 1 day to compensate for timezone
                    const date = new Date(fecha);
                    date.setDate(date.getDate() + 1);
                    
                    if (isNaN(date.getTime())) return 'Fecha inválida';
                    
                    return date.toLocaleDateString('es-ES', {
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
                })() + '\u00A0'}
              </b>
              y me encantará compartirlo contigo.
              Con cariño,
            </p>
              <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>
          {
            pase ? (
              <div id={Style["pases"]}>
              No. de pases <p id={Style["NumeroPases"]}>{pase}</p>
            </div>
            ) : (
              ""
            )
          }
          </div>
        </div>
      </section>
    </>
  );
}