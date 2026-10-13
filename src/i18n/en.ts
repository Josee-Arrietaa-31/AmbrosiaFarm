import type { Dict } from './es'

/** English copy. Same shape as es.ts. */
export const en: Dict = {
  meta: {
    title: 'Ambrosía Fresh | Costa Rican export pineapple',
    description:
      'Ambrosía Fresh: a Costa Rican family company growing and exporting pineapple to the United States and Europe since 2010.',
  },
  skipLink: 'Skip to content',

  nav: {
    label: 'Main navigation',
    home: 'Ambrosía Fresh, go to top',
    open: 'Open menu',
    close: 'Close menu',
    switchTo: 'Español',
    switchLabel: 'Ver el sitio en español',
    items: {
      inicio: 'Home',
      nosotros: 'About',
      productos: 'Products',
      servicios: 'Process',
      compromisos: 'Commitments',
      galeria: 'Gallery',
      contacto: 'Contact',
    },
  },

  hero: {
    kicker: 'San Carlos, Costa Rica. Since 2010.',
    lead: 'We farm with respect for the land, pack with care and share the freshness of Costa Rica with the world.',
    primary: 'Our process',
    secondary: 'Contact us',
    imageAlt: 'Farm worker tossing a freshly cut pineapple into the air on a farm in northern Costa Rica',
  },

  about: {
    title: 'A family from northern Costa Rica taking its pineapple to the world',
    p1Before: 'We were founded in 2010 as',
    p1After:
      ', a family company born and raised in Costa Rica. Since then we have shipped containers of pineapple every week to the United States and Europe.',
    p2: 'We work hand in hand with growers across the northern region. Together we offer buyers consistent volumes, quality and environmental responsibility, and open the door to international markets for small and medium-sized growers.',
    imageAlt: 'Aerial view of the pineapple farms next to a river and forest in San Carlos',
    missionTitle: 'Mission',
    mission:
      'To turn the rational and sustainable use of natural, economic and human resources into an excellent product and complete customer satisfaction.',
    visionTitle: 'Vision',
    vision: 'To be a leader in our field, recognized for our constant commitment to a high-quality product.',
    valuesTitle: 'Our values',
    values: [
      {
        name: 'Honesty',
        text: 'Meeting environmental, legal and quality standards is part of our everyday work.',
      },
      {
        name: 'Loyalty',
        text: 'Respect and loyalty toward customers and team members let us deliver on every commitment.',
      },
      { name: 'Commitment', text: 'Delivering on what we promise is what drives every task we take on.' },
    ],
  },

  products: {
    title: 'Products',
    lead: 'Besides pineapple, we grow other produce from northern Costa Rica with the same care and quality.',
    items: {
      pina: {
        name: 'Pineapple',
        text: 'Our flagship product: fresh, export-grade pineapple for the United States and Europe.',
        alt: 'Fresh pineapple on a white background',
      },
      chayote: {
        name: 'Chayote',
        text: 'Fresh chayote grown in northern Costa Rica with the same care as the rest of our production.',
        alt: 'Fresh chayotes on a white background',
      },
      yuca: {
        name: 'Cassava',
        text: 'Fresh cassava (yuca), a staple of Costa Rican agriculture grown under good agricultural practices.',
        alt: 'Fresh cassava roots on a white background',
      },
    },
  },

  services: {
    title: 'Our process',
    lead: 'We follow the pineapple every step of the way: from planting in northern Costa Rica to the container that reaches your port.',
    items: {
      plantacion: {
        title: 'Growing',
        text: 'We grow pineapple on our own farms and with partner growers in the northern region, using good agricultural practices and caring for the environment at every stage.',
        cta: 'Ask about growing',
        alt: 'Farm worker tending rows of pineapple in volcanic soil in northern Costa Rica',
      },
      empaque: {
        title: 'Packing & Production',
        text: 'Fruit is sorted, packed and prepared under good manufacturing practices, so every box meets the quality and consistency buyers expect.',
        cta: 'Ask about packing & production',
        alt: 'Pineapples moving along the packing line at the production plant',
      },
      exportacion: {
        title: 'Export',
        text: 'We ship containers of pineapple every week to the United States and Europe, with consistent volumes and the backing of a company exporting since 2010.',
        cta: 'Ask about export',
        alt: 'Box of Ambrosía Fresh pineapples ready for export, product of Costa Rica',
      },
    },
  },

  commitments: {
    title: 'Commitments',
    lead: 'Product excellence starts with how we treat the land, our people and every piece of fruit that leaves our farms.',
    items: {
      ambiental: {
        title: 'Environment',
        text: 'Rational use of natural resources, with responsible farming practices at every stage of growing.',
      },
      social: {
        title: 'Community',
        text: 'We bring small and medium-sized growers from the northern region into international markets and meet every legal labor requirement.',
      },
      calidad: {
        title: 'Quality',
        text: 'High quality standards from the field to the container, for complete customer satisfaction.',
      },
      inocuidad: {
        title: 'Food safety',
        text: 'Our farms are GlobalG.A.P. certified, ensuring good agricultural and manufacturing practices.',
      },
    },
    certTitle: 'Certifications',
    certLead: 'International backing for every shipment.',
    certLogoAlt: (name: string) => `${name} logo`,
  },

  gallery: {
    title: 'Gallery',
    lead: 'Our farms, facilities and processes, up close and from the air.',
    enlarge: (alt: string) => `Enlarge image: ${alt}`,
    alts: [
      'Pineapple field at ground level with forest in the background',
      'Aerial view of the pineapple farms next to a river',
      'Aerial view of the farm roads',
      'Rows of pineapple with a work shed in the background',
      'Pineapple plant seen from below against the sky',
      'Freshly harvested pineapple in hand next to a pile of fruit',
      'Pineapples on the packing line before processing',
      'Close-up of the crown being cut with a harvesting tool',
    ],
  },

  lightbox: {
    label: (i: number, n: number) => `Image ${i} of ${n}`,
    close: 'Close gallery',
    prev: 'Previous image',
    next: 'Next image',
  },

  contact: {
    title: 'Contact',
    lead: 'Tell us what you need. We will be glad to help and talk about your next order.',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    follow: 'Follow us',
    mapTitle: 'Map showing the location of Ambrosía Fresh',
    directions: 'Get directions',
    formTitle: 'Send us a message',
    required: 'Fields marked with * are required.',
    name: 'Name',
    nameError: 'Please enter your name.',
    emailLabel: 'Email',
    emailError: 'Please enter your email address.',
    emailFormat: 'Please check the email format, for example name@company.com.',
    phoneLabel: 'Phone',
    optional: '(optional)',
    message: 'Message',
    messageError: 'Please enter your message.',
    messageShort: 'The message must be at least 10 characters long.',
    honeypot: 'Leave this field empty',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. We will get back to you shortly.',
    errorIntro: 'The message could not be sent.',
    errorWrite: 'You can email us at',
    errorCall: 'or call',
    errorNoEndpoint: 'The form does not have a delivery service configured yet.',
    errorStatus: (code: number) => `The server responded with code ${code}.`,
  },

  footer: {
    about: (legalName: string, year: number) =>
      `${legalName}. A Costa Rican family company growing and exporting pineapple since ${year}.`,
    sections: 'Sections',
    sectionsLabel: 'Site sections',
    contact: 'Contact',
  },

  whatsapp: 'Message us on WhatsApp',
}
