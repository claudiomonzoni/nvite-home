import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function animateBrisaItinerary() {
  if (document.documentElement.dataset.theme !== 'brisa') return;
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll<HTMLElement>('.itinerario').forEach(section => {
    if (section.dataset.animated) return;
    section.dataset.animated = 'true';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    section.querySelectorAll<HTMLElement>('ol > li').forEach((item, index) => {
      gsap.fromTo(item.children,
        { x: index % 2 === 0 ? -48 : 48, opacity: 0, filter: 'blur(8px)' },
        {
          x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1,
          stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none reverse' },
        },
      );
    });
    ScrollTrigger.refresh();
  });
}
