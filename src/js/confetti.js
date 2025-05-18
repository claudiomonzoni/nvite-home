// Exportación con nombre en lugar de default
export const shootConfetti = async () => {
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
    const colors = [
      '#ff61d2', '#ff90e8', '#ffc4f3', '#ffd9f9', // Rosas
      '#00d4ff', '#00fff7', '#73ffff', // Azules
      '#fffd37', '#fff620', '#ffef00', // Amarillos
      '#ff3477', '#ff0051', '#ff005d'  // Magentas
    ];

    const defaults = {
      spread: 120,        // Incrementar el spread para mejor distribución desde el centro
      ticks: 100,
      gravity: 0.5,
      decay: 0.95,
      startVelocity: 20,  // Aumentar velocidad inicial
      shapes: ['square', 'circle', 'triangle'], // Formas de las partículas
      colors: colors,
      scalar: 0.9,
      origin: { x: 0.5, y: 0.55 }  // Centrar el origen del confetti
    };

    function shoot() {
      window.confetti({
        ...defaults,
        particleCount: 150,  // Aumentar partículas ya que solo hay una fuente
      });
    }

    shoot();
    setTimeout(shoot, 150);
    setTimeout(shoot, 300);
  } catch (error) {
    console.error('Error en confetti:', error);
  }
};
