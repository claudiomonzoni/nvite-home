// import fondoFloral from "../../assets/bodas/imas/flores-fondo-a.png";
import Style from "../../estilos/temas/base/bodas/pases.module.scss";

import { useEffect, useState } from "react";

export default function Pases({ folder, labels }) {
  const l = {
    attendance: labels?.attendance || "<b> Su asistencia</b> a nuestra boda será una alegría más para nosotros en este día tan especial.",
    weDeliver: labels?.weDeliver || "entregamos",
    youPlural: labels?.youPlural || "Les",
    youSingular: labels?.youSingular || "Te",
    passesPlural: labels?.passesPlural || " pases",
    passSingular: labels?.passSingular || " pase",
  };
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
          spanVarios.textContent = l.youPlural;
          pase.textContent = l.passesPlural;
        } else {
          spanVarios.textContent = l.youSingular;
          pase.textContent = l.passSingular;
        }
      });
  }, []);
  return (
    <section className="grid contenido" id="pases">
      <div id="bande">
        <h2 id="invitados">{invitado}</h2>
        <p dangerouslySetInnerHTML={{ __html: l.attendance }}></p>
        <h3>
          <span id="varios" className="variosSpan"></span> {l.weDeliver}
        </h3>
        <hr />
        <div>
          <li id="pase">
            {pase} <span className="paseSpan"></span>
          </li>
        </div>
      </div>
    </section>
  );
}
