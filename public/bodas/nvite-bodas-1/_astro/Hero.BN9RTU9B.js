import{i as t,j as e}from"./invitados.Dkge6UgP.js";import{r as i}from"./index.NEDEFKed.js";import{g as n}from"./index.ZORhgBxb.js";import{S as a}from"./index.0ff681b1.CAesLWEX.js";function g({nombres:r,fecha:d}){const[c,l]=i.useState("ID inexistente"),[m,p]=i.useState(0);return i.useEffect(()=>{document.querySelector(".contenido").classList.remove("opacidad");const h=window.location.search,s=new URLSearchParams(h).get("id");s&&s<t.length&&(l(t[s].nombre),p(t[s].pases));const o=n.timeline();n.from(".contenido",{opacity:0,y:-30,duration:1,delay:.2}),o.from("#bande",{opacity:0,y:-30,delay:2,height:500,duration:1,ease:"power4.out"}),o.from("#centro *",{opacity:0,y:-30,duration:1,ease:"power4.out",stagger:{amount:.5}})},[]),e.jsx(e.Fragment,{children:e.jsx("section",{id:a.hero,className:"grid contenido opacidad",children:e.jsxs("div",{className:a.bandeja,id:"bande",children:[e.jsxs("div",{className:a.centro,id:"centro",children:[e.jsx("span",{className:a.familia,id:"invitado",children:c}),e.jsx("h1",{dangerouslySetInnerHTML:{__html:r}}),e.jsxs("p",{children:["desean invitarte a ",e.jsx("b",{children:"celebrar su boda"})]}),e.jsx("p",{className:a.fecha,children:d})]}),e.jsxs("div",{id:a.pases,children:["No. de pases: ",e.jsx("span",{id:"NumeroPases",children:m})]})]})})})}export{g as default};