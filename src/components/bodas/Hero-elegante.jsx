import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/temas/elegante/bodas/hero.module.scss";

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

  // Asegurarnos que fecha sea string y tenga el formato correcto
  const fechaString = String(fecha);
  const [year, month, day] = fechaString
    .split("-")
    .map((num) => parseInt(num, 10));

  const fechaObj = new Date(year, month - 1, day);

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
            start: "top 80%", // Esto hará que la animación comience cuando el elemento esté al 80% de la altura de la ventana
            toggleActions: "play none none reverse",
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
              height: "100%",
              scale: 1,
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
    <section className="grid pantalla">
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
            <p>NOS COMPLACE INVITARTE A NUESTRO GRAN DÍA</p>
            {/* <span className={Style.familia} id="invitado">
              {invitado}
            </span> */}
            <img src={divisor.src} alt="divisor bodas nvita" />
            <p className={Style["casamos"]}> Y celebrar juntos nuestra unión </p>
            <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>
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
