import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as t}from"./index.DhYZZe0J.js";import{g as n}from"./index.ZORhgBxb.js";import{S as a}from"./hero_module.8862d141.3fUkwvSP.js";import{i as o}from"./invitados.BSkQLOwt.js";function v({nombres:d,fecha:c}){const[m,l]=t.useState("-"),[r,p]=t.useState(0);return t.useEffect(()=>{document.querySelector(".contenido").classList.remove("opa");const h=window.location.search,s=new URLSearchParams(h).get("id");s&&s<o.length&&(l(o[s].nombre),p(o[s].pases));const i=n.timeline();n.from(".contenido",{opacity:0,y:-30,duration:1,delay:.2}),i.from("#bande",{opacity:0,y:-30,delay:2,height:500,duration:1,ease:"power4.out"}),i.from("#centro *",{opacity:0,y:-30,duration:1,ease:"power4.out",stagger:{amount:.5}})},[]),e.jsx(e.Fragment,{children:e.jsx("section",{id:a.hero,className:"grid contenido opa",children:e.jsxs("div",{className:a.bandeja,id:"bande",children:[e.jsxs("div",{className:a.centro,id:"centro",children:[e.jsx("span",{className:a.familia,id:"invitado",children:m}),e.jsx("h1",{dangerouslySetInnerHTML:{__html:d}}),e.jsxs("p",{children:["desean invitarte a ",e.jsx("b",{children:"celebrar su boda"})]}),e.jsx("p",{className:a.fecha,children:c})]}),r>0?e.jsx(e.Fragment,{children:e.jsxs("div",{id:a.pases,children:["No. de pases: ",e.jsx("span",{id:"NumeroPases",children:r})]})}):e.jsx(e.Fragment,{})]})})})}export{v as default};