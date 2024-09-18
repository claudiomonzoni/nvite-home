import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/quince/hero.module.scss";
import invitadosData from "../../assets/quince/quincePlus/data/invitados.json";


export default function Hero({ nombres, fecha, cover }) {
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
  }, []);
  return (
    <>



      <section id={Style["hero"]} className="contenido opa" >
        <div className={Style["laimagen"]}>
          <img src={cover} alt="cover" />
        </div>
        <div className={Style.bandeja} id="bande">
          <div className={Style.centro} id="centro">
            <span className={Style.familia} id="invitado">
              {invitado}
            </span>
            <h1 dangerouslySetInnerHTML={{ __html: nombres }}></h1>
            <p>
              Te invitamos a mis <b>XV años</b>
            </p>
            <p className={Style.fecha}>{fecha.toLocaleString()}</p>
          </div>
          {pase > 0 ? 
          <>
          <div id={Style["pases"]}>
            No. de pases: <span id="NumeroPases">{pase}</span>
          </div>
          </> : <></>}
        </div>
      </section>
          
    </>
  );
}
