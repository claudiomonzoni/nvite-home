/**
 * Calculates the delivery date by adding business days to the current date
 * If the current day is a weekend, starts counting from next Monday
 * @param days Number of business days to add
 * @returns Delivery date as a string in format "Día DD de Mes"
 */
export const calculateDeliveryDate = (days: number = 2): string => {
  const today = new Date();
  let currentDate = new Date(today);
  
  // If today is weekend, move to next Monday
  const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
  if (dayOfWeek === 0) { // Sunday
    currentDate.setDate(currentDate.getDate() + 1);
  } else if (dayOfWeek === 6) { // Saturday
    currentDate.setDate(currentDate.getDate() + 2);
  }

  // Add business days
  let businessDaysToAdd = days;
  while (businessDaysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    // Skip weekends
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      businessDaysToAdd--;
    }
  }

  const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const weekDay = weekDays[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  
  return `${weekDay} ${day} de ${month}`;
};

export const dispatchCartUpdateEvent = () => {
    document.dispatchEvent(new CustomEvent("cart:updated"));
  };
  
  // COOKIES
  export const saveCartCookie = (cartItems: string[]) => {
    document.cookie = `cartItems=${JSON.stringify(cartItems)};path=/;max-age=31536000`;
  };
  
  export const getCartCookie = () => {
    const cookie = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("cartItems="))
      ?.split("=")[1];
  
    return cookie ? JSON.parse(cookie) : [];
  };
  
  export const deleteCartCookie = () =>
    (document.cookie =
      "cartItems=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");

/**
 * Generates a random number for sales or returns a default
 * @returns A number between 0 and 5
 */
export const generateRandomSales = (): number => {
  return Math.floor(Math.random() * 5); // 0 to 5
};

/**
 * Maneja el cambio de imagen principal en la galería
 * @param targetSrc - URL de la imagen seleccionada
 * @param mainImageEl - Elemento de imagen principal
 * @param thumbnails - NodeList de miniaturas
 */
export const handleGalleryImageChange = (thumb: Element, mainImageEl: HTMLImageElement, thumbnails: NodeListOf<Element>) => {
  const fullSizeImage = thumb.getAttribute('data-full-img');
  if (!fullSizeImage) return;
  
  mainImageEl.src = fullSizeImage;
  // Actualizar clase activa en miniaturas
  thumbnails.forEach(t => {
    if (t === thumb) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
};

/**
 * Inicializa el zoom de la imagen
 * @param imageContainer - Contenedor de la imagen principal
 * @param zoomLevel - Nivel de zoom (2 = 200%)
 */
export const initImageZoom = (imageContainer: HTMLElement, zoomLevel: number = 2) => {
  const image = imageContainer.querySelector('img');
  if (!image) return;

  imageContainer.addEventListener('mousemove', (e) => {
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  });

  imageContainer.addEventListener('mouseenter', () => {
    image.style.transform = `scale(${zoomLevel})`;
  });

  imageContainer.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
};