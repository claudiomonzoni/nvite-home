import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/quince/hero.module.scss";
import invitadosData from "../../assets/quince/quincePlus/data/invitados.json";

export default function Hero({ nombres, fecha, cover, folder }) {
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
  useEffect(() => {
    document.querySelector(".contenido").classList.remove("opa");
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
    .then(json =>{

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

  
    // animacion intro
  
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
      <section id={Style["hero"]} className="contenido opa">
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
            <span className="variosSpan"></span>  invitamos a mis <b>XV años</b>
            </p>
            <p className={Style.fecha}>{fecha.toLocaleString()}</p>
          </div>
              <div id={Style["pases"]}>
                No. de <span className="paseSpan">pases</span> <br /> <span id="NumeroPases">{pase}</span>
              </div>
       
        </div>
      </section>
    </>
  );
}
