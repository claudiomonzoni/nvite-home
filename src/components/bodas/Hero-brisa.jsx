import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from '../../estilos/temas/brisa/bodas/hero.module.scss';

// The date in the MDX represents a calendar day, not a timezone-dependent instant.
function invitationDate(value, lang) {
  const raw = value instanceof Date ? value.toISOString() : String(value ?? '');
  const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return '';
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12));
  return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });
}

function TideLine() {
  return <svg className={styles.tide} viewBox="0 0 160 20" fill="none" aria-hidden="true"><path d="M1 10c20-18 38 18 58 0s38 18 58 0 28 0 42 0M1 17c20-18 38 18 58 0s38 18 58 0 28 0 42 0" stroke="currentColor" strokeWidth="1" /></svg>;
}

export default function HeroBrisa({ tipo = 'bodas', nombres, fecha, cover, ellaIniciales, elIniciales, labels = {}, lang = 'es', initialInvitado = null }) {
  const [opened, setOpened] = useState(false);
  const [guest, setGuest] = useState(initialInvitado);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const coverRef = useRef(null);
  const openingRef = useRef(false);
  const en = lang.startsWith('en');
  const wedding = tipo === 'bodas';
  const tap = labels.tap || (en ? 'Open invitation' : 'Abrir invitación');
  const title = wedding ? (labels.weAreGettingMarried || (en ? 'We are getting married' : 'Nos casamos')) : (en ? 'My fifteen years' : 'Mis quince años');
  const date = invitationDate(fecha, en ? 'en' : 'es');
  const monogram = wedding ? `${ellaIniciales || ''} & ${elIniciales || ''}` : 'XV';

  useEffect(() => {
    if (opened) return;
    dialogRef.current?.showModal();
    buttonRef.current?.focus({ preventScroll: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [opened]);

  useEffect(() => {
    if (initialInvitado || wedding) { setGuest(initialInvitado); return; }
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); const uid = params.get('uid');
    if (!id || !uid) return;
    const controller = new AbortController();
    fetch(`/api/getInvitado.json?${new URLSearchParams({ id, uid })}`, { signal: controller.signal })
      .then(res => res.ok ? res.json() : [])
      .then(result => { if (result?.[0]) setGuest(result[0]); })
      .catch(error => { if (error.name !== 'AbortError') console.error('Brisa guest lookup failed', error); });
    return () => controller.abort();
  }, [initialInvitado, wedding]);

  useEffect(() => {
    if (!opened) return;
    titleRef.current?.focus({ preventScroll: true });
    const ready = () => window.dispatchEvent(new Event('hero:ready'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { ready(); return; }
    const context = gsap.context(() => {
      gsap.timeline({ onComplete: ready })
        .fromTo(`.${styles.photo} img`, { scale: 1, opacity: 1 }, { scale: 1, opacity: 1, duration: 1.25, ease: 'power3.out' })
        .fromTo(`.${styles.paper} > *`, { y: 18, opacity: 0, filter: 'blur(4px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, stagger: 0.06, ease: 'power2.out' }, 0.15);
    }, heroRef);
    return () => context.revert();
  }, [opened]);

  useEffect(() => {
    const frame = heroRef.current?.querySelector(`.${styles.photo}`);
    const image = frame?.querySelector('img');
    if (!frame || !image) return;
    const update = () => {
      const rect = frame.getBoundingClientRect();
      Object.assign(image.style, {
        left: `${rect.left}px`, top: '0px', width: `${rect.width}px`, height: `${rect.height}px`,
      });
    };
    // Once the next content reaches the top, the fixed cover is fully covered.
    // Hide it there so transparent sections farther down cannot reveal it again.
    const updateVisibility = () => {
      frame.dataset.covered = String(frame.getBoundingClientRect().bottom <= 0);
    };
    let scrollFrame = 0;
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        updateVisibility();
      });
    };
    const onResize = () => { update(); updateVisibility(); };
    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(frame);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  function openInvitation() {
    if (openingRef.current) return;
    openingRef.current = true;
    window.dispatchEvent(new Event('iniciarInvitacion'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOpened(true); return; }
    const thumbnail = coverRef.current;
    const target = heroRef.current?.querySelector(`.${styles.photo}`);
    if (!thumbnail || !target) { setOpened(true); return; }
    const start = thumbnail.getBoundingClientRect();
    const end = target.getBoundingClientRect();
    const photo = thumbnail.cloneNode();
    photo.removeAttribute('id');
    photo.setAttribute('alt', '');
    photo.setAttribute('aria-hidden', 'true');
    Object.assign(photo.style, {
      position: 'fixed', left: `${start.left}px`, top: `${start.top}px`,
      width: `${start.width}px`, height: `${start.height}px`, maxWidth: 'none',
      margin: '0', borderRadius: '50%', objectFit: 'cover', zIndex: '100001', pointerEvents: 'none',
    });
    dialogRef.current.appendChild(photo);
    thumbnail.style.visibility = 'hidden';
    const finalImage = target.querySelector('img');
    if (finalImage) finalImage.style.visibility = 'hidden';
    gsap.set(heroRef.current.querySelector(`.${styles.paper}`)?.children, { opacity: 0 });
    gsap.timeline({ onComplete: () => {
      document.body.appendChild(photo);
      setOpened(true);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (finalImage) finalImage.style.visibility = 'visible';
        photo.remove();
      }));
    } })
      .to(dialogRef.current.firstElementChild, { opacity: 0, duration: 0.5, ease: 'power2.out' }, 0)
      .to(dialogRef.current, { backgroundColor: 'transparent', duration: 0.8, ease: 'sine.inOut' }, 0.15)
      .to(photo, { left: end.left, top: end.top, width: end.width, height: end.height, borderRadius: '0%', duration: 1.2, ease: 'power2.inOut' }, 0);
  }

  return <>
    <section ref={heroRef} className={`${styles.hero} ${!wedding ? styles.quince : ''}`} aria-label={title}>
      <div className={styles.photo}>
        <img src={cover || '/temas/brisa/orilla.webp'} alt={nombres?.replace(/<[^>]+>/g, '') || title} fetchpriority="high" />

      </div>
      <div className={styles.paper}>
        <span className={styles.monogram} aria-hidden="true">{monogram}</span>
        <h1 ref={titleRef} tabIndex={-1} dangerouslySetInnerHTML={{ __html: nombres || '' }} />
        <TideLine />
        <p className={styles.occasion}>{title}</p>
        <p className={styles.invite} dangerouslySetInnerHTML={{ __html: wedding ? (labels.invite || (en ? 'We would love to celebrate with you.' : 'Queremos compartir este día contigo.')) : (labels.honor || (en ? 'Join me to celebrate my fifteen years.' : 'Tengo el honor de invitarte a celebrar mis XV años.')) }} />
        <time className={styles.date} dateTime={fecha instanceof Date ? fecha.toISOString().slice(0,10) : String(fecha).slice(0,10)}>{date}</time>
        {!wedding && guest?.nombre && <div className={styles.guest}><p>{guest.nombre}</p>{guest.pases > 0 && <span>{labels.passes || (en ? 'Passes' : 'No. de pases')}: {guest.pases}</span>}</div>}
        <a className={styles.scroll} href="#brisa-celebracion">{en ? 'Discover the celebration' : 'Descubre la celebración'}<svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true"><path d="M8 1v21m-6-6 6 6 6-6" stroke="currentColor" /></svg></a>
      </div>
    </section>
    <span id="brisa-celebracion" className={styles.anchor} />
    {!opened && <dialog ref={dialogRef} className={styles.opening} aria-label={en ? 'Open invitation' : 'Abrir invitación'} onCancel={event => { event.preventDefault(); openInvitation(); }}>
      <div className={styles.stationery}>
        <button className={styles.coverButton} onClick={openInvitation} aria-label={en ? 'Open invitation photo' : 'Abrir foto de portada'}><img ref={coverRef} src={cover || '/temas/brisa/orilla.webp'} alt={nombres?.replace(/<[^>]+>/g, '') || title} /></button>
        <h2 dangerouslySetInnerHTML={{ __html: nombres || '' }} />
        <TideLine />
        <p>{labels.loading || (en ? 'An invitation to celebrate together' : 'Una invitación para celebrar juntos')}</p>
        <time>{date}</time>
        <button ref={buttonRef} onClick={openInvitation} className={styles.openButton}>{tap}<svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true"><path d="M1 6h19m-5-5 5 5-5 5" stroke="currentColor" /></svg></button>
      </div>
    </dialog>}
  </>;
}
