/**
 * Textos del sitio en español. `en.ts` debe tener exactamente la misma forma (TypeScript lo verifica).
 * Las rutas de las imágenes viven en src/data/content.ts; aquí solo los textos y los `alt`.
 */
export const es = {
  meta: {
    title: 'Ambrosía Fresh | Piña costarricense de exportación',
    description:
      'Ambrosía Fresh: empresa familiar costarricense que produce y exporta piña a Estados Unidos y Europa desde 2010.',
  },
  skipLink: 'Ir al contenido',

  nav: {
    label: 'Navegación principal',
    home: 'Ambrosía Fresh, ir al inicio',
    open: 'Abrir menú',
    close: 'Cerrar menú',
    switchTo: 'English',
    switchLabel: 'View this site in English',
    items: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      productos: 'Productos',
      servicios: 'Procesos',
      compromisos: 'Compromisos',
      galeria: 'Galería',
      contacto: 'Contacto',
    },
  },

  hero: {
    kicker: 'San Carlos, Costa Rica. Desde 2010.',
    lead: 'Cultivamos con respeto por la tierra, empacamos con dedicación y compartimos con el mundo la frescura de Costa Rica.',
    primary: 'Procesos',
    secondary: 'Contacto',
    imageAlt: 'Trabajador lanzando una piña recién cortada al aire en una finca de la zona norte de Costa Rica',
  },

  about: {
    title: 'Una familia de la zona norte que lleva su piña al mundo',
    p1Before: 'Nacimos en 2010 como',
    p1After:
      ', una empresa familiar netamente costarricense. Desde entonces exportamos contenedores de piña cada semana a Estados Unidos y Europa.',
    p2: 'Trabajamos en alianza con productores de la zona norte del país. Juntos ofrecemos al mercado constancia en volúmenes, calidad y responsabilidad ambiental, y abrimos camino a pequeños y medianos productores en los mercados internacionales.',
    imageAlt: 'Vista aérea de las fincas de piña junto a un río y zonas boscosas en San Carlos',
    missionTitle: 'Misión',
    mission:
      'Hacer que el uso racional y sostenible de los recursos naturales, económicos y humanos se traduzca en la excelencia del producto y la completa satisfacción del cliente.',
    visionTitle: 'Visión',
    vision: 'Ser una empresa líder en su campo, reconocida por su compromiso constante con un producto de alta calidad.',
    valuesTitle: 'Nuestros valores',
    values: [
      {
        name: 'Honestidad',
        text: 'Cumplir las normas ambientales, legales y de calidad es parte de nuestro trabajo de todos los días.',
      },
      {
        name: 'Lealtad',
        text: 'El respeto y la fidelidad con clientes y colaboradores nos permiten cumplir cada compromiso.',
      },
      { name: 'Compromiso', text: 'Cumplir lo acordado es lo que nos motiva en cada labor que realizamos.' },
    ],
  },

  products: {
    title: 'Productos',
    lead: 'Además de la piña, cultivamos otros productos hortícolas de la zona norte con el mismo cuidado y calidad.',
    items: {
      pina: {
        name: 'Piña',
        text: 'Nuestro producto insignia: piña fresca de calidad de exportación a Estados Unidos y Europa.',
        alt: 'Piña fresca sobre fondo blanco',
      },
      chayote: {
        name: 'Chayote',
        text: 'Chayote fresco cultivado en la zona norte de Costa Rica, con el mismo cuidado que el resto de nuestra producción.',
        alt: 'Chayotes frescos sobre fondo blanco',
      },
      yuca: {
        name: 'Yuca',
        text: 'Yuca fresca, un básico de la agricultura costarricense cultivado bajo buenas prácticas agrícolas.',
        alt: 'Raíces de yuca frescas sobre fondo blanco',
      },
    },
  },

  services: {
    title: 'Procesos',
    lead: 'Acompañamos la piña en todo su recorrido: desde la siembra en la zona norte hasta el contenedor que llega a su destino.',
    items: {
      plantacion: {
        title: 'Plantación',
        text: 'Cultivamos piña en fincas propias y junto a productores aliados de la zona norte, con buenas prácticas agrícolas y responsabilidad con el medio ambiente en cada etapa del cultivo.',
        cta: 'Consultar sobre plantación',
        alt: 'Trabajador cultivando hileras de piña en tierra volcánica de la zona norte',
      },
      empaque: {
        title: 'Empaque y Producción',
        text: 'La fruta se selecciona, empaca y prepara bajo buenas prácticas de manufactura, para que cada caja cumpla con la calidad y la constancia que espera el comprador.',
        cta: 'Consultar sobre empaque y producción',
        alt: 'Piñas avanzando por la línea de empaque en la planta de producción',
      },
      exportacion: {
        title: 'Exportación',
        text: 'Enviamos contenedores de piña cada semana a Estados Unidos y Europa, con constancia en los volúmenes y el respaldo de una empresa con experiencia exportadora desde 2010.',
        cta: 'Consultar sobre exportación',
        alt: 'Caja de piñas Ambrosía Fresh lista para exportación, producto de Costa Rica',
      },
    },
  },

  commitments: {
    title: 'Compromisos',
    lead: 'La excelencia del producto empieza por cómo tratamos la tierra, a las personas y cada fruta que sale de nuestras fincas.',
    items: {
      ambiental: {
        title: 'Ambiental',
        text: 'Uso racional de los recursos naturales, con prácticas agrícolas responsables en cada etapa del cultivo.',
      },
      social: {
        title: 'Social',
        text: 'Integramos a pequeños y medianos productores de la zona norte al mercado internacional y cumplimos todos los requisitos laborales legales.',
      },
      calidad: {
        title: 'Calidad',
        text: 'Trabajamos con normas de alta calidad del campo al contenedor, para la completa satisfacción del cliente.',
      },
      inocuidad: {
        title: 'Inocuidad',
        text: 'Nuestras fincas están certificadas GlobalG.A.P., lo que asegura buenas prácticas agrícolas y de manufactura.',
      },
    },
    certTitle: 'Certificaciones',
    certLead: 'Respaldo internacional para cada envío.',
    certLogoAlt: (name: string) => `Logo de ${name}`,
  },

  gallery: {
    title: 'Galería',
    lead: 'Nuestras fincas, instalaciones y procesos, vistos de cerca y desde el aire.',
    enlarge: (alt: string) => `Ampliar imagen: ${alt}`,
    alts: [
      'Plantación de piña a nivel de suelo con bosque al fondo',
      'Vista aérea de las fincas de piña junto a un río',
      'Vista aérea de los caminos internos de la finca',
      'Hileras de piña con una caseta de trabajo al fondo',
      'Detalle de una planta de piña desde abajo contra el cielo',
      'Piña recién cosechada en mano junto a una pila de fruta',
      'Piñas en la línea de empaque antes de ser procesadas',
      'Detalle del corte de la corona con la herramienta de cosecha',
    ],
  },

  lightbox: {
    label: (i: number, n: number) => `Imagen ${i} de ${n}`,
    close: 'Cerrar galería',
    prev: 'Imagen anterior',
    next: 'Imagen siguiente',
  },

  contact: {
    title: 'Contacto',
    lead: 'Cuéntenos qué necesita. Será un gusto atenderle y conversar sobre su próximo pedido.',
    phone: 'Teléfono',
    email: 'Correo',
    location: 'Ubicación',
    follow: 'Síguenos',
    mapTitle: 'Mapa de la ubicación de Ambrosía Fresh',
    directions: 'Cómo llegar',
    formTitle: 'Envíenos un mensaje',
    required: 'Los campos marcados con * son obligatorios.',
    name: 'Nombre',
    nameError: 'Escriba su nombre.',
    emailLabel: 'Correo electrónico',
    emailError: 'Escriba su correo electrónico.',
    emailFormat: 'Revise el formato del correo, por ejemplo nombre@empresa.com.',
    phoneLabel: 'Teléfono',
    optional: '(opcional)',
    message: 'Mensaje',
    messageError: 'Escriba su mensaje.',
    messageShort: 'El mensaje debe tener al menos 10 caracteres.',
    honeypot: 'No llene este campo',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Mensaje enviado. Le responderemos a la brevedad.',
    errorIntro: 'No se pudo enviar el mensaje.',
    errorWrite: 'Puede escribirnos a',
    errorCall: 'o llamar al',
    errorNoEndpoint: 'El formulario aún no tiene un servicio de envío configurado.',
    errorStatus: (code: number) => `El servidor respondió con el código ${code}.`,
  },

  footer: {
    about: (legalName: string, year: number) =>
      `${legalName}. Empresa familiar costarricense productora y exportadora de piña desde ${year}.`,
    sections: 'Secciones',
    sectionsLabel: 'Secciones del sitio',
    contact: 'Contacto',
  },

  whatsapp: 'Escríbanos por WhatsApp',
}

export type Dict = typeof es
