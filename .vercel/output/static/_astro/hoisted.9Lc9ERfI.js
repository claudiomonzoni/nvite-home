import"./hoisted.BB6L4wlp.js";const d=document.querySelectorAll("#copiar"),m=document.querySelectorAll("#confirmo"),f=document.querySelectorAll("#reset");d.forEach(e=>{e.addEventListener("click",t=>{const r=t.target.parentElement.parentElement.getAttribute("data-id");t.target.parentElement.parentElement.classList.add("invitado"),p(t.target.value),c(r,!0,!1,!1)})});m.forEach(e=>{e.addEventListener("click",t=>{const r=t.target.parentElement.parentElement.getAttribute("data-id");t.target.parentElement.parentElement.classList.remove("invitado"),t.target.parentElement.parentElement.classList.add("confirmado"),c(r,!0,!0,!1)})});f.forEach(e=>{e.addEventListener("click",t=>{const r=t.target.parentElement.parentElement.getAttribute("data-id");t.target.parentElement.parentElement.classList.remove("invitado"),t.target.parentElement.parentElement.classList.remove("confirmado"),c(r,!0,!0,!0)})});function p(e){navigator.clipboard.writeText(e),alert("Invitación copiada en la memoria de tu dispositivo, ya la puedes pegar: "+e)}function c(e,t,r,s){const l={id:e,copiado:t,confirmo:r,limpiado:s},i=a.find(n=>n.id===e);i||(a.push(l),localStorage.setItem("invitados",JSON.stringify(a))),i&&r==!0&&a.forEach((n,o)=>{n.id===e&&(a.splice(o,1,l),localStorage.setItem("invitados",JSON.stringify(a)))}),i&&s==!0&&a.forEach((n,o)=>{n.id===e&&(a.splice(o,1),localStorage.setItem("invitados",JSON.stringify(a)))})}const u=JSON.parse(localStorage.getItem("invitados"));if(u===null)var a=[];else a=JSON.parse(localStorage.getItem("invitados")),a.forEach((e,t)=>{const r=document.querySelector(`#invitados li[data-id="${e.id}"]`);e&&(e.copiado&&r.classList.add("invitado"),e.confirmo&&r.classList.add("confirmado"),e.limpiado&&(r.classList.remove("invitado"),r.classList.remove("confirmado")))});