// import fondoFloral from "../../assets/bodas/imas/flores-fondo-a.png";
import Style from "../../estilos/temas/base/bodas/pases.module.scss";

import { useEffect, useState } from "react";

export default function Pases({ folder }) {
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
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
      .then((res) => res.json())
      .then((json) => {
        setInvitado(json[0].nombre);
        setPase(json[0].pases);

        if (json[0].pases > 1) {
          spanVarios.textContent = "Les";
          pase.textContent = " pases";
        } else {
          spanVarios.textContent = "Te";
          pase.textContent = " pase";
        }
      });
  }, []);
  return (
    <section className="grid contenido">
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
        <div>
          <li id={Style["pase"]}>
            {pase} <span className="paseSpan"></span>
          </li>
        </div>
      </div>
    </section>
  );
}
