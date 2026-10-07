import React from 'react';
import { createRoot } from 'react-dom/client';
import HeroBodas from '../src/components/bodas/Hero-brisa';
import HeroQuince from '../src/components/quince/Hero-brisa';
const HeroBrisa = (props) => props.tipo === 'quince' ? <HeroQuince {...props} /> : <HeroBodas {...props} />;
import ConfirmacionBasica from '../src/components/bodas/ConfirmacionBasica';
import ConfirmacionQuince from '../src/components/quince/ConfirmacionBasica';
import '../src/estilos/bodas/redireccion.scss';
import '../src/estilos/quince/redireccion.scss';

const params = new URLSearchParams(location.search);
const quince = params.get('evento') === 'quince';
const en = params.get('lang') === 'en';
document.documentElement.lang = en ? 'en' : 'es';
document.documentElement.removeAttribute('data-paleta');
document.documentElement.setAttribute(quince ? 'data-paleta-quince' : 'data-paleta', params.get('paleta') || 'base');
if (params.has('custom')) {
  const custom = document.createElement('style');
  custom.textContent = `:root[${quince ? 'data-paleta-quince' : 'data-paleta'}="base"][data-theme="brisa"] { --primario: #613f47; --texto: #613f47; --font-heading: Georgia, serif; }`;
  document.head.append(custom);
}
const Confirmation = quince ? ConfirmacionQuince : ConfirmacionBasica;
createRoot(document.getElementById('root')).render(<>
  <HeroBrisa tipo={quince ? 'quince' : 'bodas'} nombres={quince ? 'Valentina' : 'Camila & Mateo'} ellaIniciales="C" elIniciales="M" fecha={new Date('2027-06-12')} cover="/temas/brisa/orilla.webp" lang={en ? 'en' : 'es'} />
  <main className="grid contenido">
    <p className="frase">{en ? 'A life together. A day to remember.' : quince ? 'Un nuevo capítulo, rodeada de quienes más quiero.' : 'Una vida juntos, un día para recordar.'}</p>
    <div id="contador"><div className="bande"><p id="falta">{en ? 'Our celebration begins in' : 'Nuestra celebración comienza en'}</p><div className="tiempo-container">{[['248',en?'days':'días'],['12',en?'hours':'horas'],['36',en?'minutes':'minutos']].map(([n,l])=><div className="tiempo-item" key={l}><div className="numero">{n}</div><p>{l}</p></div>)}</div></div></div>
    <div id="titulos"><h2>{en ? 'The celebration' : 'La celebración'}</h2></div>
    <div id="bloqueMapa"><div className="der"><div className="bandeja"><h3>{en ? 'By the sea' : 'Frente al mar'}</h3><address>{en ? 'Sample beach reception' : 'Recepción de muestra en la playa'}</address><div id="bandeReloj"><hr/><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M12 6v6l4 2" stroke="currentColor"/></svg><hr/></div><time>5:30 P.M.</time></div><a className="btn" href="#rsvp">{en?'Confirm attendance':'Confirmar asistencia'}</a></div></div>
    <div id="titulos"><h2>{en?'A day to share':'Un día para compartir'}</h2></div>
    <ol>{[[en?'Ceremony':'Ceremonia','5:30 P.M.'],[en?'Dinner':'Cena','7:00 P.M.'],[en?'Celebration':'Celebración','8:00 P.M.']].map(([name,time])=><li key={name}><h4>{name}</h4><p>{time}</p></li>)}</ol>
    <div id="rsvp"><Confirmation themeName="brisa" whatsapp="" dias_antes={15} labels={en?{title:'Will you join us?',subtitle:'Let us know if you can celebrate with us.',label:'Your name and number of guests',btnConfirm:'Confirm attendance'}:{}} /></div>
  </main>
  <footer><p style={{textAlign:'center',fontSize:'0.8rem'}}>Brisa · {en?'Component preview. Illustrative event data.':'Vista de componentes. Datos ilustrativos.'} <a href={`?evento=${quince?'bodas':'quince'}`}>{quince?'Ver bodas':'Ver XV años'}</a></p></footer>
</>);

