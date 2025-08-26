import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/temas/elegante/bodas/hero.module.scss";
import divisor from "../../assets/bodas/imas/divisor-floral-plano1.svg";

//---------------------------------------------------------------------------------------------
export default function Hero({
  nombres,
  ellaIniciales,
  elIniciales,
  fecha,
  cover,
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Crear fecha con timezone local y ajuste
  const getFechaLocal = (fechaStr) => {
    const [year, month, day] = fechaStr.split('-');
    const date = new Date(year, month - 1, parseInt(day) + 1, 12, 0, 0);
    return date;
  };

  // Asegurarnos que fecha sea un objeto Date válido
  const fechaObj = fecha instanceof Date ? 
    (() => {
      const newDate = new Date(fecha);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    })() : 
    getFechaLocal(fecha);
  
  // Validar que la fecha sea válida
  if (isNaN(fechaObj.getTime())) {
    console.error('Fecha inválida:', fecha);
    return <div>Error: Fecha inválida</div>;
  }

  const diaSemana = fechaObj.toLocaleString("es-ES", { weekday: "long" });
  const dia = fechaObj.getDate();
  const mes = fechaObj.toLocaleString("es-ES", { month: "long" });
  const ano = fechaObj.getFullYear();
  const diaNum = dia;

  // asegurar el numero correcto
  const adjustedDiaNum = String(diaNum).padStart(2, "0");

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ScrollTrigger;
    // Solo en cliente
    if (typeof window !== "undefined") {
      import("gsap/ScrollTrigger").then((mod) => {
        ScrollTrigger = mod.default;
        gsap.registerPlugin(ScrollTrigger);

        if (!isLoading) {
          // Configuración de matchMedia para animaciones responsivas

          let mm = gsap.matchMedia();

          // Animaciones para Desktop (800px y más)
          mm.add("(min-width: 800px)", () => {
            const tl = gsap.timeline();

            tl.from(".contenido", {
              opacity: 0,
              y: -30,
              duration: 1,
            })
              .from(".avatarConte", {
                opacity: 0,
                y: -30,
                scale: 0.5,
                duration: 2,
                ease: "power4.out",
              })
              .from(
                "#bande *",
                {
                  opacity: 0,
                  y: -30,
                  duration: 1,
                  ease: "power4.out",
                  stagger: { amount: 1.6 },
                },
                "-=1.5"
              )
              .to(".avatarConte", {
                delay: 1,
                duration: 2,
                ease: "power4.out",
                transformOrigin: "center",
                width: "100%",
                height: "100%",
                scale: 1,
                onComplete: () => {
                  window.dispatchEvent(new Event("hero:ready"));
                  ScrollTrigger.refresh();
                },
              })
              .to(
                ".avatarConte img",
                {
                  scale: 1.2,
                  duration: 2.2,
                  ease: "power4.out",
                },
                "-=2"
              );
          });

          // Animaciones para Móvil (menos de 800px)
          mm.add("(max-width: 799px)", () => {
            const tl = gsap.timeline();

            // Primero anima el contenido
            tl.from(".contenido", {
              opacity: 0,
              y: -30,
              duration: 1,
            }).from("#bande *", {
              opacity: 0,
              y: -30,
              duration: 1,
              ease: "power4.out",
              stagger: { amount: 1.6 },
            });

            // Animación del avatar con ScrollTrigger
            gsap.from(".avatarConte", {
              scrollTrigger: {
                trigger: ".avatarConte",
                start: "top 80%",
                // toggleActions: "play none none reverse",
              },
              opacity: 0,
              y: 30,
              scale: 0.5,
              duration: 1.5,
              ease: "power4.out",
              onComplete: () => {
                gsap.to(".avatarConte", {
                  duration: 2,
                  ease: "power4.out",
                  transformOrigin: "center",
                  width: "100%",
                  height: "700px",
                  scale: 1,
                  onComplete: () => {
                    window.dispatchEvent(new Event("hero:ready"));
                    ScrollTrigger.refresh();
                  },
                });
                gsap.to(".avatarConte img", {
                  scale: 1.2,
                  duration: 2.2,
                  ease: "power4.out",
                });
              },
            });
          });
        }
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className={Style.loadingContainer}>
        <div className={Style.spinner}></div>
        <p className={Style.loadingText}>Cargando invitación...</p>
      </div>
    );
  }

  return (
    <div id={Style["hero"]}>
      <div className={Style["izq"]} id="izq">
        <div id={Style["avatar"]} className="avatarConte">
          <img src={cover} alt="Invitaciones de bodas cover" />
        </div>
      </div>

      <div className={Style["der"]}>
        <div className={Style.bandeja} id="bande">
          <div id={Style["iniciales"]}>
            <div className={Style.amp}>
              <span>{ellaIniciales}</span>&<span>{elIniciales}</span>
            </div>
          </div>
          <p>NOS COMPLACE INVITARTE</p>
          {/* <span className={Style.familia} id="invitado">
              {invitado}
            </span> */}
          <img src={divisor.src} alt="divisor bodas nvita" />
          <p className={Style["casamos"]}>
            {" "}
            A la celebración de nuestra unión{" "}
          </p>
          <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>
          <ul id={Style["fecha"]}>
            <li className={Style.fechaAno}>{ano}</li>
            <li id={Style["fechaConte"]}>
              <li className={Style.fecha}>{`${diaSemana}`}</li>

              <li className={Style.fechaNum}>{adjustedDiaNum}</li>

              <li className={Style.fechaMes}>{mes}</li>
            </li>
          </ul>
          <div className={Style.flecha}>
            <img
              src="/bodas/elegante/abajo.svg"
              alt="flecha bodas nvitaciones"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
