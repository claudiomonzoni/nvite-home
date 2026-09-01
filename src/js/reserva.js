function initReservaForm() {
  const nombre = document.getElementById("nombre");
  const fecha = document.getElementById("fecha");
  const evento = document.getElementById("evento");
  const empezar = document.getElementById("empezar");
  const numeroWhats = "5217551132468";

  if (!nombre || !fecha || !evento || !empezar) return;

  const isEn =
    document.documentElement.lang?.startsWith("en") ||
    document.cookie.includes("nvite_lang=en");

  const ua = navigator.userAgent;

  const enviar = () => {
    if (nombre.value.trim() === "" || fecha.value.trim() === "") {
      empezar.classList.add("desactivado");
      return;
    }
    empezar.classList.remove("desactivado");

    const baseUrl = /Mobile/i.test(ua)
      ? `https://api.whatsapp.com/send/?phone=${numeroWhats}&text=`
      : `https://web.whatsapp.com/send/?phone=${numeroWhats}&text=`;

    const msg = isEn
      ? `Hello! I'm contacting you from nvitaciones.com, I'd like to get an invitation for my event:\nName: ${nombre.value}\nEvent Date: ${fecha.value}\nEvent Type: ${evento.value}`
      : `Hola, me contacto desde nvitaciones.com, deseo obtener una invitación para mi evento:\nNombre: ${nombre.value}\nFecha del evento: ${fecha.value}\nTipo de evento: ${evento.value}`;

    empezar.href = baseUrl + encodeURIComponent(msg);
  };

  nombre.addEventListener("input", enviar);
  nombre.addEventListener("focusout", enviar);
  fecha.addEventListener("input", enviar);
  fecha.addEventListener("focusout", enviar);
  evento.addEventListener("change", enviar);
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  initReservaForm();
} else {
  document.addEventListener("DOMContentLoaded", initReservaForm);
}
document.addEventListener("astro:page-load", initReservaForm);
