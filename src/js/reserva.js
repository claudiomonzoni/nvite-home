const nombre = document.getElementById("nombre");
const fecha = document.getElementById("fecha");
const evento = document.getElementById("evento");
const empezar = document.getElementById("empezar");
const numeroWhats = 5217551132468;


//user agent
const ua = navigator.userAgent;

//si es cel app si es pc web.app
const enviar = (e) => {
  e.preventDefault();

  if (nombre.value === "" || fecha.value === "" ) {
    console.log("vacio");
  } else {
    empezar.classList.remove("desactivado");
  }
  //comprobar si es cel o pc
  let whats = "";
  if (/Mobile/i.test(ua)) {
    whats = `https://api.whatsapp.com/send/?phone=${numeroWhats}&text=`;
  } else {
    whats = `https://web.whatsapp.com/send/?phone=${numeroWhats}&text=`;
  }

  envio(whats, nombre.value, fecha.value, evento.value);
};

const envio = (whats, nombre, fecha, evento) => {
  const url = `
  ${whats}Hola,%20me%20contacto%20desde%20nvitaciones.com,%20deseo%20obtener%20una%20invitación%20para%20mi%20evento:%0aNombre:%20${nombre}%0afecha%20del%20evento:%20${fecha},%0aTipo%20de%20evento:%20${evento}
  `;

  empezar.href = url;
};

nombre.addEventListener("focusout", enviar);
fecha.addEventListener("focusout", enviar);
evento.addEventListener("focusout", enviar);
