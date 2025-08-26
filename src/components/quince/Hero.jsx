import { useEffect, useState } from "react";
import gsap from "gsap";
import Style from "../../estilos/temas/base/quince/hero.module.scss";

export default function Hero({ nombres, fecha, cover }) {
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
            
            <p className={Style.familia} id="invitado">
              {invitado}
            </p>
            <p>
            Tengo el honor de invitarlos a celebrar mis XV años
            </p>
            <p className={Style.fecha}>
            La cita es el día  
            <b>
              {'\u00A0' + new Date(fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
              }) + '\u00A0'}
              </ b>
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