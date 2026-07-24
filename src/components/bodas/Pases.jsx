// import fondoFloral from "../../assets/bodas/imas/flores-fondo-a.png";
import Style from "../../estilos/temas/base/bodas/pases.module.scss";

import { useEffect, useState } from "react";

export default function Pases({ folder, labels, initialInvitado = null }) {
  const l = {
    attendance: labels?.attendance || "<b> Su asistencia</b> a nuestra boda será una alegría más para nosotros en este día tan especial.",
    weDeliver: labels?.weDeliver || "entregamos",
    youPlural: labels?.youPlural || "Les",
    youSingular: labels?.youSingular || "Te",
    passesPlural: labels?.passesPlural || " pases",
    passSingular: labels?.passSingular || " pase",
  };
  const [invitado, setInvitado] = useState(initialInvitado ? initialInvitado.nombre : "-");
  const [pase, setPase] = useState(initialInvitado ? initialInvitado.pases : 0);
  useEffect(() => {
    const paseSpanEl = document.querySelector(".paseSpan");
    const spanVariosEl = document.querySelector(".variosSpan");

    const updateDOM = (nombre, pasesVal) => {
      setInvitado(nombre);
      setPase(pasesVal);
      if (paseSpanEl && spanVariosEl) {
        if (pasesVal > 1) {
          spanVariosEl.textContent = l.youPlural;
          paseSpanEl.textContent = l.passesPlural;
        } else {
          spanVariosEl.textContent = l.youSingular;
          paseSpanEl.textContent = l.passSingular;
        }
      }
    };

    if (initialInvitado) {
      updateDOM(initialInvitado.nombre, initialInvitado.pases);
      return;
    }

    // confirmacion de id
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");
    const uid = params.get("uid");

    if (id && uid) {
      // Fetch data cuando se monta el componente
      fetch(`${window.location.origin}/api/getInvitado.json?id=${id}&uid=${uid}`)
        .then((res) => res.json())
        .then((json) => {
          if (json && json[0]) {
            updateDOM(json[0].nombre, json[0].pases);
          }
        })
        .catch(err => console.error("Error fetching guest in Pases:", err));
    }
  }, [initialInvitado]);
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
