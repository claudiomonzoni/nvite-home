import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/bodas/hero.module.scss";

// imagenes
import divisor from "../../assets/bodas/imas/divisor-floral-plano1.svg";

//---------------------------------------------------------------------------------------------
export default function Hero({
  nombres,
  ellaIniciales,
  elIniciales,
  dia,
  diaNum,
  mes,
  ano,
  cover
}) {
  // Ensure correct day number
  const adjustedDiaNum = String(diaNum).padStart(2, '0');
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);


  useEffect(() => {
    document.querySelector(".contenido").classList.remove("invisible");
    const tl = gsap.timeline();
    gsap.from(".contenido", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.2,
    });
    tl.from(".avatarConte", {
      opacity: 0,
      y: -30,
      scale: 0.5, // Empieza más pequeño
      delay: 0.6,
      duration: 2,
      ease: "power4.out",
      
      onComplete: () => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 800px)", () => {
          const tl = gsap.timeline();
          tl.to(".avatarConte", {
            delay: 1,
            duration: 2,
            ease: "power4.out",
            transformOrigin:'center',
            width:'100%',
            height:'100%',
            scale: 1,
          })
          .to(".avatarConte img", {
            scale: 1.2,
            duration: 2.2,
            ease: "power4.out",
          }, "-=2"); // Iniciar al mismo tiempo que la animación anterior
        });
        
        mm.add("(max-width: 799px)", () => {
          const tl = gsap.timeline();
          tl.to(".avatarConte", {
            delay: 1,
            duration: 2,
            ease: "power4.out",
            transformOrigin:'center',
            width:'100%',
            height:'100%',
            scale: 1,
          })
          .to(".avatarConte img", {
            scale: 1.2,
            duration: 2.2,
            ease: "power4.out",
          }, "-=2"); // Iniciar al mismo tiempo que la animación anterior
        });
      }
    });

    tl.from("#bande *", {
      opacity: 0,
      y: -30,
      delay: -1,
      duration: 1,
      ease: "power4.out",
      stagger: { amount: 1.6 },
    });
  }, []);

  //---------------------------------------------------------------------------------------------

  return (
    <>
      <section className="grid contenido invisible">
        <div id={Style["hero"]} >
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
                <li className={Style.fecha}>{dia}</li>
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
    </>
  );
}
