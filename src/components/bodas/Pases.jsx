// import fondoFloral from "../../assets/bodas/imas/flores-fondo-a.png";
import Style from "../../estilos/bodas/pases.module.scss";

import { useEffect, useState } from "react";

export default function Pases({ folder }) {
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
  useEffect(() => {
    // confirmacion de id
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");

    const pase = document.querySelector(".paseSpan");
    const spanVarios = document.querySelector(".variosSpan");
    // Fetch data cuando se monta el componente
    fetch(`/bodas/${folder}/data/invitados.json`)
    .then((res) => res.json())
    .then((json) => {
      if (id && id < json.length) {
        setInvitado(json[id].nombre);
        setPase(json[id].pases);
        console.log(json)
          if (json[id].pases > 1) {
            spanVarios.textContent = "Les";
            pase.textContent = " pases";
          } else {
            spanVarios.textContent = "Te";
            pase.textContent = " pase";
          }

        }
      });
   
  }, []);
  return (
    <section class="grid contenido">
      <div id={Style["bande"]}>
        <h2 id={Style["invitados"]}>{invitado}</h2>
        <p>
          <b> Su asistencia</b> a nuestra boda será una alegría más para
          nosotros en este día tan especial.
        </p>
        <h3>
          <span id={Style["varios"]} className="variosSpan"></span> entregamos
        </h3>
        <hr />
        <div >
          <li id={Style["pase"]}>
            {pase} <span  className="paseSpan"></span>
          </li>
        </div>
      </div>
    </section>
  );
}
