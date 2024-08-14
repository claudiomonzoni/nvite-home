import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/bodas/hero.module.scss";
import invitadosData from "../../pages/bodas/data/invitados.json";

// imagenes

import avatar from "../../assets/bodas/nvitaPlus/avatar.jpg";
import divisor from "../../assets/bodas/nvitaPlus/divisor-floral-plano 1.svg";

export default function Hero({ nombres, dia, diaNum, mes, ano }) {
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
  useEffect(() => {
    document.querySelector(".contenido").classList.remove("opa");
    // confirmacion de id
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");
    // animacion intro
    if (id && id < invitadosData.length) {
      setInvitado(invitadosData[id].nombre);
      setPase(invitadosData[id].pases);
    }
    const tl = gsap.timeline();
    gsap.from(".contenido", { opacity: 0, y: -30, duration: 1, delay: 0.2 });
    tl.from("#bande *", {
      opacity: 0,
      y: -30,
      delay: 2,
      duration: 1,
      ease: "power4.out",
      stagger: { amount: 0.5 },
    });
  }, []);
  return (
    <>
      <section className="grid contenido">
        <div id={Style["hero"]}>
          <div className={Style["izq"]}>
            <div id={Style["avatar"]}>
              <img src={avatar.src} alt="Invitaciones de bodas avatar" />
            </div>
          </div>

          <div className={Style["der"]}>
            <div className={Style.bandeja} id="bande">
              <div id={Style["iniciales"]}>
                <div className={Style.amp}>
                  <span>E</span>&<span>M</span>
                </div>
              </div>
              {/* <span className={Style.familia} id="invitado">
                {invitado}
              </span> */}
              <img src={divisor.src} alt="divisor bodas nvita" />
              <p className={Style["casamos"]}> Nos casamos </p>
              <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>
              <p>
                deseamos invitarte a <b>celebrar nuestra boda el:</b>
              </p>
              <ul id={Style["fecha"]}>
                <li className={Style.fecha}>{dia}</li>
                <hr className={Style.linea1} />
                <li className={Style.fechaNum}>{diaNum}</li>
                <hr className={Style.linea2} />
                <li className={Style.fechaMes}>{mes}</li>
                <li className={Style.fechaAno}>{ano}</li>
              </ul>
              {pase > 0 ? (
                <>
                  <div id={Style["pases"]}>
                    No. de pases: <span id="NumeroPases">{pase}</span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
