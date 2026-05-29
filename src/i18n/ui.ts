export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Invitaciones - General
    'invitation.ceremony': 'Ceremonia',
    'invitation.reception': 'Recepción',
    'invitation.itinerary': 'Itinerario',
    'invitation.dressCode': 'Código de Vestir',
    'invitation.colorPalette': 'Paleta de Colores',
    'invitation.considerations': 'Consideraciones',
    'invitation.details': 'Detalles',
    'invitation.gifts': 'Regalos',
    'invitation.rsvp': 'Confirmar Asistencia',
    'invitation.rsvp.daysBefore': 'Favor de confirmar antes del',
    'invitation.rsvp.btn': 'Confirmar por WhatsApp',
    'invitation.location': 'Ver ubicación',
    'invitation.time': 'Hora',
    'invitation.place': 'Lugar',
    
    // Bodas
    'wedding.parents': 'Con la bendición de sus padres',
    'wedding.ourWedding': 'Nuestra Boda',
    'wedding.saveTheDate': 'Aparta la fecha',
    'wedding.groom': 'El Novio',
    'wedding.bride': 'La Novia',
    
    // XV Años
    'quince.myFifteen': 'Mis XV Años',
    'quince.parents': 'En compañía de mis padres',
    'quince.godparents': 'Y mis padrinos',
    
    // Regalos
    'gifts.cash': 'Lluvia de Sobres',
    'gifts.cashMessage': 'Si así lo deseas, puedes darnos el regalo en efectivo, el cual podrán colocar en un sobre',
    'gifts.transfer': 'Transferencia',
    'gifts.stores': 'Mesa de Regalos',
    'gifts.bank': 'Banco',
    'gifts.account': 'Cuenta',
    'gifts.beneficiary': 'A nombre de',

    // RSVP Form & Messages
    'rsvp.confirmYes': '¡Confirmo asistencia! 😄',
    'rsvp.confirmNo': 'Lo lamento, no podré asistir 😔',
    'rsvp.howMany': '¿Cuántos pases usarán?',
    'rsvp.selectPasses': 'Selecciona el número de pases',
    'rsvp.messageOptional': 'Envíanos algún saludo (opcional):',
    'rsvp.messagePlaceholder': 'Escribe aquí tu mensaje...',
    'rsvp.btnConfirm': 'Confirmar mi asistencia',
    'rsvp.btnDecline': 'No podré asistir',
    'rsvp.modalYes': '¡Muchas gracias por confirmar su asistencia! Nos llena de alegría saber que podremos contar con su presencia en este día tan especial.',
    'rsvp.modalNo': 'Agradecemos mucho su pronta respuesta. Lamentamos que no pueda acompañarnos en esta ocasión tan especial.',
    'rsvp.whatsappMsgYes': 'Hola, les confirmo la asistencia a la boda: {nombre}, y usaremos {pases} pase(s). {noAsisten} Comentarios: {comentarios}.',
    'rsvp.whatsappMsgNo': 'Hola, lamento informarles que no podré asistir a la boda: {nombre}. Comentarios: {comentarios}.',
    'rsvp.label': 'Escribenos tu nombre completo y cuantas personas asistiran:',
    'rsvp.moveSwitch': 'Mueve el switch a la derecha para confirmar tu asistencia y despues completa el formulario de confirmación.',
    'rsvp.whoCanNotAttend': '¿Nombre de las personas que no podrán acompañarnos? (opcional)',
    'rsvp.whoCanNotAttendPlaceholder': 'Escribe aquí los nombres...',
    'rsvp.whoCanNotAttendNote': 'Si cambian de opinión y pueden acompañarnos al evento, no duden en contactarnos directamente {dias} días antes del evento.',
    'rsvp.importantNote': 'IMPORTANTE: En caso de que si puedan acompañarnos, les pedimos amablemente que nos confirmen directamente al menos {dias} días antes del evento.',
    'rsvp.msgNoAttendFinal': 'Estimado invitado, agradecemos que nos haya notificado su imposibilidad de asistir. Si sus planes cambian, por favor no dude en contactar directamente con los anfitriones.',

    // Padres & Padrinos
    'parents.ourParents': 'Nuestros Padres',
    'parents.bride': 'Novia',
    'parents.groom': 'Novio',
    'parents.mother': 'Mi Madre',
    'parents.father': 'Mi Padre',
    'parents.blessing': 'Con la bendición de',
    'godparents.title': 'Padrinos',

    // Audio
    'audio.listen': 'Escucha la <b>canción</b> de nuestra boda',
    'quince.audio.listen': 'Escucha la <b>canción</b> de mis XV años',
    'audio.confirm': 'Confirma',
    'audio.playSong': 'Reproducir canción',
    'audio.pauseSong': 'Pausar canción',
    'audio.ariaConfirm': 'Confirmar asistencia',
    'audio.ariaPlayPause': 'Reproducir/Pausar música',
    
    // Maps
    'maps.viewMap': 'ver mapa',
    'maps.startTrip': 'iniciar viaje',

    // Footer
    'footer.developedBy': 'Invitación desarrollada y diseñada por:',
    'footer.rights': 'Todos los derechos reservados',
    'footer.altLogo': 'invitaciones digitales para bodas, quince años y eventos',

    // Hero
    'hero.loading': 'Queremos que seas parte de nuestra boda',
    'hero.loadingQuince': 'Quiero que seas parte de mis XV años',
    'hero.tap': 'Toca para comenzar',
    'hero.wedding.weAreGettingMarried': 'Nos casamos',
    'hero.wedding.invite': 'Deseamos invitarte a <b>celebrar nuestra boda</b>',
    'hero.wedding.celebration': 'A la celebración de nuestra unión',
    'hero.elegant.pleasedToInvite': 'NOS COMPLACE INVITARTE',
    'hero.quince.honor': 'Mis XV años',
    'hero.quince.date': 'La cita es el día',
    'hero.quince.share': 'y me encantará compartirlo contigo. Con cariño,',
    'hero.passes': 'No. de pases',

    // Progreso Invitados
    'progress.confirmed': 'de invitados han confirmado',
    'progress.passesConfirmed': 'pases confirmados',
    'progress.of': 'de',
    'progress.btnConfirm': 'confirmar asistencia',
    'progress.allReady': '¡Que empiece la fiesta, estamos todos listos!',

    // Pases
    'passes.attendance': '<b> Su asistencia</b> a nuestra boda será una alegría más para nosotros en este día tan especial.',
    'passes.weDeliver': 'entregamos',
    'passes.youPlural': 'Les',
    'passes.youSingular': 'Te',
    'passes.passesPlural': ' pases',
    'passes.passSingular': ' pase',

    // VIP
    'vip.tag': 'invitado especial',

    // Countdown
    'countdown.days': 'días',
    'countdown.hours': 'horas',
    'countdown.minutes': 'minutos',
    'countdown.seconds': 'segundos',
    
    'wedding.countdown.title': 'Nuestro Evento es en:',
    'wedding.countdown.congrats': '¡Felicidades!',
    'wedding.countdown.day': 'día',
    'wedding.countdown.onlyOne': 'Solo falta:',
    'wedding.countdown.daysLeft': 'Días para el Evento:',
    
    'quince.countdown.onlyMissing': 'Solo faltan:',
    'quince.countdown.thanks': 'Gracias por ser parte de la celebración de mis XV años',
    'quince.countdown.day': 'Día',
    'quince.countdown.onlyOne': 'Solo falta',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Invitaciones - General
    'invitation.ceremony': 'Ceremony',
    'invitation.reception': 'Reception',
    'invitation.itinerary': 'Itinerary',
    'invitation.dressCode': 'Dress Code',
    'invitation.colorPalette': 'Color Palette',
    'invitation.considerations': 'Important Details',
    'invitation.details': 'Details',
    'invitation.gifts': 'Gifts',
    'invitation.rsvp': 'RSVP',
    'invitation.rsvp.daysBefore': 'Please confirm before',
    'invitation.rsvp.btn': 'Confirm via WhatsApp',
    'invitation.location': 'View location',
    'invitation.time': 'Time',
    'invitation.place': 'Place',
    
    // Bodas
    'wedding.parents': 'With the blessing of their parents',
    'wedding.ourWedding': 'Our Wedding',
    'wedding.saveTheDate': 'Save the Date',
    'wedding.groom': 'The Groom',
    'wedding.bride': 'The Bride',
    
    // XV Años
    'quince.myFifteen': 'My Quinceañera', // Or Quinceañera
    'quince.parents': 'With my parents',
    'quince.godparents': 'And my godparents',
    
    // Regalos
    'gifts.cash': 'Cash Gift',
    'gifts.cashMessage': 'If you wish, you can give us the gift in cash, which you can place in an envelope.',
    'gifts.transfer': 'Bank Transfer',
    'gifts.stores': 'Gift Registry',
    'gifts.bank': 'Bank',
    'gifts.account': 'Account',
    'gifts.beneficiary': 'Name',

    // RSVP Form & Messages
    'rsvp.confirmYes': 'I confirm my attendance! 😄',
    'rsvp.confirmNo': 'Sorry, I cannot attend 😔',
    'rsvp.howMany': 'How many passes will you use?',
    'rsvp.selectPasses': 'Select number of passes',
    'rsvp.messageOptional': 'Send us a greeting (optional):',
    'rsvp.messagePlaceholder': 'Write your message here...',
    'rsvp.btnConfirm': 'Confirm Attendance',
    'rsvp.btnDecline': 'I cannot attend',
    'rsvp.modalYes': 'Thank you for confirming! We are overjoyed to know you will join us on this special day.',
    'rsvp.modalNo': 'Thank you for letting us know. We are sorry you cannot join us on this special occasion.',
    'rsvp.whatsappMsgYes': 'Hello, I confirm attendance for the wedding: {nombre}, using {pases} pass(es). {noAsisten} Comments: {comentarios}.',
    'rsvp.whatsappMsgNo': 'Hello, sorry I cannot attend the wedding: {nombre}. Comments: {comentarios}.',
    'rsvp.label': 'Write your full name and how many people will attend:',
    'rsvp.moveSwitch': 'Move the switch to the right to confirm your attendance and then complete the form.',
    'rsvp.whoCanNotAttend': 'Names of people who cannot attend? (optional)',
    'rsvp.whoCanNotAttendPlaceholder': 'Write names here...',
    'rsvp.whoCanNotAttendNote': 'If they change their mind, please contact us {dias} days before the event.',
    'rsvp.importantNote': 'IMPORTANT: If you can attend, please confirm at least {dias} days before the event.',
    'rsvp.msgNoAttendFinal': 'Dear guest, thank you for letting us know. If your plans change, please contact the hosts directly.',

    // Padres & Padrinos
    'parents.ourParents': 'Our Parents',
    'parents.bride': 'Bride',
    'parents.groom': 'Groom',
    'parents.mother': 'My Mother',
    'parents.father': 'My Father',
    'parents.blessing': 'With the blessing of',
    'godparents.title': 'Godparents',

    // Audio
    'audio.listen': 'Listen to our <b>wedding song</b>',
    'quince.audio.listen': 'Listen to my <b>Quinceañera song</b>',
    'audio.confirm': 'Confirm',
    'audio.playSong': 'Play song',
    'audio.pauseSong': 'Pause song',
    'audio.ariaConfirm': 'Confirm attendance',
    'audio.ariaPlayPause': 'Play/Pause music',

    // Maps
    'maps.viewMap': 'view map',
    'maps.startTrip': 'start navigation',

    // Footer
    'footer.developedBy': 'Invitation designed and developed by:',
    'footer.rights': 'All rights reserved',
    'footer.altLogo': 'digital invitations for weddings, quinceañeras and events',

    // Hero
    'hero.loading': 'We want you to be part of our wedding',
    'hero.loadingQuince': 'We want you to be part of my Quinceañera celebration',
    'hero.tap': 'Tap to start',
    'hero.wedding.weAreGettingMarried': 'We are getting married',
    'hero.wedding.invite': 'We want to invite you to <b>celebrate our wedding</b>',
    'hero.wedding.celebration': 'To the celebration of our union',
    'hero.elegant.pleasedToInvite': 'WE ARE PLEASED TO INVITE YOU',
    'hero.quince.honor': 'I have the honor to invite you to celebrate my Quinceañera',
    'hero.quince.date': 'The date is',
    'hero.quince.share': 'and I would love to share it with you. With love,',
    'hero.passes': 'No. of passes',

    // Progreso Invitados
    'progress.confirmed': 'of guests have confirmed',
    'progress.passesConfirmed': 'passes confirmed',
    'progress.of': 'of',
    'progress.btnConfirm': 'confirm attendance',
    'progress.allReady': 'Let the party begin, we are all ready!',

    // Pases
    'passes.attendance': '<b>Your attendance</b> at our wedding will be one more joy for us on this special day.',
    'passes.weDeliver': 'we reserve',
    'passes.youPlural': 'For you',
    'passes.youSingular': 'For you',
    'passes.passesPlural': ' passes',
    'passes.passSingular': ' pass',

    // VIP
    'vip.tag': 'special guest',

    // Countdown
    'countdown.days': 'days',
    'countdown.hours': 'hours',
    'countdown.minutes': 'minutes',
    'countdown.seconds': 'seconds',
    
    'wedding.countdown.title': 'Our Event is in:',
    'wedding.countdown.congrats': 'Congratulations!',
    'wedding.countdown.day': 'day',
    'wedding.countdown.onlyOne': 'Only left:',
    'wedding.countdown.daysLeft': 'Days until the Event:',
    
    'quince.countdown.onlyMissing': 'Only missing:',
    'quince.countdown.thanks': 'Thank you for being part of my Quinceañera celebration',
    'quince.countdown.day': 'Day',
    'quince.countdown.onlyOne': 'Only left',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
