/**
 * Contenido del sitio.
 *
 * IMÁGENES: todas las rutas bajo /images son fotografías reales de Ambrosia Farm.
 * Basta con reemplazar el archivo o cambiar `src` aquí; mantenga un `alt` descriptivo.
 */

export type Img = { src: string; alt: string }

export const HERO_IMAGE: Img = {
  src: '/images/hero-plantacion.jpg',
  alt: 'Trabajador lanzando una piña recién cortada al aire en una finca de la zona norte de Costa Rica',
}

export const ABOUT = {
  image: {
    src: '/images/nosotros-finca.jpg',
    alt: 'Vista aérea de las fincas de piña junto a un río y zonas boscosas en San Carlos',
  } satisfies Img,
  mission:
    'Hacer que el uso racional y sostenible de los recursos naturales, económicos y humanos se traduzca en la excelencia del producto y la completa satisfacción del cliente.',
  vision:
    'Ser una empresa líder en su campo, reconocida por su compromiso constante con un producto de alta calidad.',
  values: [
    {
      name: 'Honestidad',
      text: 'Cumplir las normas ambientales, legales y de calidad es parte de nuestro trabajo de todos los días.',
    },
    {
      name: 'Lealtad',
      text: 'El respeto y la fidelidad con clientes y colaboradores nos permiten cumplir cada compromiso.',
    },
    {
      name: 'Compromiso',
      text: 'Cumplir lo acordado es lo que nos motiva en cada labor que realizamos.',
    },
  ],
} as const

export const PRODUCTS = [
  {
    id: 'pina',
    name: 'Piña',
    scientificName: 'Ananas comosus',
    text: 'Nuestro producto insignia: piña fresca de calidad de exportación a Estados Unidos y Europa.',
    image: {
      src: '/images/producto-pina.jpg',
      alt: 'Piña fresca sobre fondo blanco',
    },
  },
  {
    id: 'chayote',
    name: 'Chayote',
    scientificName: 'Sechium edule',
    text: 'Chayote fresco cultivado en la zona norte de Costa Rica, con el mismo cuidado que el resto de nuestra producción.',
    image: {
      src: '/images/producto-chayote.jpg',
      alt: 'Chayotes frescos sobre fondo blanco',
    },
  },
  {
    id: 'yuca',
    name: 'Yuca',
    scientificName: 'Manihot esculenta',
    text: 'Yuca fresca, un básico de la agricultura costarricense cultivado bajo buenas prácticas agrícolas.',
    image: {
      src: '/images/producto-yuca.jpg',
      alt: 'Raíces de yuca frescas sobre fondo blanco',
    },
  },
] as const

export const SERVICES = [
  {
    id: 'plantacion',
    title: 'Plantación',
    text: 'Cultivamos piña en fincas propias y junto a productores aliados de la zona norte, con buenas prácticas agrícolas y responsabilidad con el medio ambiente en cada etapa del cultivo.',
    image: {
      src: '/images/servicio-plantacion.jpg',
      alt: 'Trabajador cultivando hileras de piña en tierra volcánica de la zona norte',
    },
  },
  {
    id: 'empaque',
    title: 'Empaque y Producción',
    text: 'La fruta se selecciona, empaca y prepara bajo buenas prácticas de manufactura, para que cada caja cumpla con la calidad y la constancia que espera el comprador.',
    image: {
      src: '/images/servicio-empaque.jpg',
      alt: 'Piñas avanzando por la línea de empaque en la planta de producción',
    },
  },
  {
    id: 'exportacion',
    title: 'Exportación',
    text: 'Enviamos contenedores de piña cada semana a Estados Unidos y Europa, con constancia en los volúmenes y el respaldo de una empresa con experiencia exportadora desde 2010.',
    image: {
      src: '/images/servicio-exportacion.jpg',
      alt: 'Caja de piñas Ambrosía Fresh lista para exportación, producto de Costa Rica',
    },
  },
] as const

export const COMMITMENTS = [
  {
    id: 'ambiental',
    title: 'Ambiental',
    text: 'Uso racional de los recursos naturales, con prácticas agrícolas responsables en cada etapa del cultivo.',
  },
  {
    id: 'social',
    title: 'Social',
    text: 'Integramos a pequeños y medianos productores de la zona norte al mercado internacional y cumplimos todos los requisitos laborales legales.',
  },
  {
    id: 'calidad',
    title: 'Calidad',
    text: 'Trabajamos con normas de alta calidad del campo al contenedor, para la completa satisfacción del cliente.',
  },
  {
    id: 'inocuidad',
    title: 'Inocuidad',
    text: 'Nuestras fincas están certificadas GlobalG.A.P., lo que asegura buenas prácticas agrícolas y de manufactura.',
  },
] as const

export const GALLERY: Img[] = [
  { src: '/images/galeria-1.jpg', alt: 'Plantación de piña a nivel de suelo con bosque al fondo' },
  { src: '/images/galeria-2.jpg', alt: 'Vista aérea de las fincas de piña junto a un río' },
  { src: '/images/galeria-3.jpg', alt: 'Vista aérea de los caminos internos de la finca' },
  { src: '/images/galeria-4.jpg', alt: 'Hileras de piña con una caseta de trabajo al fondo' },
  { src: '/images/galeria-5.jpg', alt: 'Detalle de una planta de piña desde abajo contra el cielo' },
  { src: '/images/galeria-6.jpg', alt: 'Piña recién cosechada en mano junto a una pila de fruta' },
  { src: '/images/galeria-7.jpg', alt: 'Piñas en la línea de empaque antes de ser procesadas' },
  { src: '/images/galeria-8.jpg', alt: 'Detalle del corte de la corona con la herramienta de cosecha' },
]
