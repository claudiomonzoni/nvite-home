import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/temas/base/bodas/hero.module.scss";

// imagenes
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
    // Agregar un día para compensar el offset de timezone
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
    if (!isLoading) {
      let ScrollTrigger;
      if (typeof window !== "undefined") {
        import("gsap/ScrollTrigger").then((mod) => {
          ScrollTrigger = mod.default;
          gsap.registerPlugin(ScrollTrigger);

          const tl = gsap.timeline();

          // Animación inicial del contenido
          tl.from(".contenido", {
            opacity: 0,
            y: -30,
            duration: 1,
          })
            .from(".avatarConte", {
              opacity: 0,
              y: -30,
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
            );

          // Animación responsiva
          let mm = gsap.matchMedia();
          mm.add("(min-width: 800px)", () => {
            tl.to(".avatarConte", {
              delay: -.5,
              duration: 2,
              ease: "power4.out",
              transformOrigin: "center",
              width: "100%",
              height: "100%",
              scale: 1,
            }).to(
              ".avatarConte img",
              {
                scale: 1.2,
                duration: 2.2,
                ease: "power4.out",
              },
              "-=2"
            );
          });

          mm.add("(max-width: 799px)", () => {
            tl.to(".avatarConte", {
              delay: -2,
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
            }).to(
              ".avatarConte img",
              {
                scale: 1.2,
                duration: 2.2,
                ease: "power4.out",
              },
              "-=2"
            );
          });
        });
      }
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
    <section className="grid contenido">
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
            {/* <span className={Style.familia} id="invitado">
              {invitado}
            </span> */}
            <img src={divisor.src} alt="divisor bodas nvita" />
            <p className={Style["casamos"]}> Nos casamos </p>
            <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>
            <p>
              Deseamos invitarte a <b>celebrar nuestra boda</b>
            </p>
            <ul id={Style["fecha"]}>
              <li className={Style.fecha}>{`${diaSemana}`}</li>
              <hr className={Style.linea1} />
              <li className={Style.fechaNum}>{adjustedDiaNum}</li>
              <hr className={Style.linea2} />
              <li className={Style.fechaMes}>{mes}</li>
              <li className={Style.fechaAno}>{ano}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
