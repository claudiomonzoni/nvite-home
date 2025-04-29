export async function shootConfetti() {
  if (typeof window === 'undefined') return;

  if (typeof window.confetti !== 'function') {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  try {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ['circle', 'square', 'heart'], // Múltiples formas
      colors: [
        '#ff1493', // Deep pink
        '#00ff00', // Verde
        '#ff4500', // Naranja rojizo
        '#9400d3', // Violeta
        '#4169e1', // Azul real
        '#ffd700'  // Dorado
      ]
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 35,
        scalar: 1.2,
        shapes: defaults.shapes[Math.floor(Math.random() * defaults.shapes.length)], // Forma aleatoria
        colors: defaults.colors.sort(() => 0.5 - Math.random()).slice(0, 3) // 3 colores aleatorios
      });

      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 0.75,
        shapes: defaults.shapes[Math.floor(Math.random() * defaults.shapes.length)], // Forma aleatoria
        colors: defaults.colors.sort(() => 0.5 - Math.random()).slice(0, 3) // 3 colores aleatorios
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    
  } catch (error) {
    console.error('Error en confetti:', error);
  }
}

