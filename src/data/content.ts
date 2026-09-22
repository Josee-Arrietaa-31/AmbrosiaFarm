/**
 * Contenido del sitio.
 *
 * IMÁGENES: todas las rutas bajo /images son ilustraciones de muestra (SVG).
 * Deben sustituirse por fotografías aéreas y de proceso reales de Ambrosia Farm,
 * idealmente en formato WebP/AVIF, ~2000 px de ancho para el hero y ~1400 px para el resto.
 * Basta con reemplazar el archivo o cambiar `src` aquí; mantenga un `alt` descriptivo.
 */

export type Img = { src: string; alt: string }

export const HERO_IMAGE: Img = {
  src: '/images/hero-plantacion.svg', // TODO: foto aérea real de la plantación
  alt: 'Vista aérea de las hileras de piña en una finca de la zona norte de Costa Rica',
}

export const ABOUT = {
  image: {
    src: '/images/nosotros-finca.svg', // TODO: foto aérea real de la finca
    alt: 'Vista aérea de una finca de piña rodeada de árboles en San Carlos',
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

export const SERVICES = [
  {
    id: 'plantacion',
    title: 'Plantación',
    text: 'Cultivamos piña en fincas propias y junto a productores aliados de la zona norte, con buenas prácticas agrícolas y responsabilidad con el medio ambiente en cada etapa del cultivo.',
    image: {
      src: '/images/servicio-plantacion.svg', // TODO: foto real del cultivo
      alt: 'Hileras de plantas de piña vistas desde el aire',
    },
  },
  {
    id: 'empaque',
    title: 'Empaque y Producción',
    text: 'La fruta se selecciona, empaca y prepara bajo buenas prácticas de manufactura, para que cada caja cumpla con la calidad y la constancia que espera el comprador.',
    image: {
      src: '/images/servicio-empaque.svg', // TODO: foto real de la planta de empaque
      alt: 'Vista aérea de la planta de empaque y sus alrededores',
    },
  },
  {
    id: 'exportacion',
    title: 'Exportación',
    text: 'Enviamos contenedores de piña cada semana a Estados Unidos y Europa, con constancia en los volúmenes y el respaldo de una empresa con experiencia exportadora desde 2010.',
    image: {
      src: '/images/servicio-exportacion.svg', // TODO: foto real de contenedores o carga
      alt: 'Contenedores listos para exportación junto a las instalaciones',
    },
  },
] as const

export const COMMITMENTS = [
  {
    id: 'ambiental',
    title: 'Ambiental',
    text: 'Uso racional de los recursos naturales. Algunas de nuestras fincas cuentan con certificación Rainforest Alliance.',
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
  { src: '/images/galeria-campo-1.svg', alt: 'Plantación de piña vista desde el aire con camino interno' },
  { src: '/images/galeria-instalaciones-1.svg', alt: 'Instalaciones de empaque y patio de carga' },
  { src: '/images/galeria-campo-2.svg', alt: 'Hileras de piña en diagonal' },
  { src: '/images/galeria-campo-3.svg', alt: 'Bloque de cultivo junto a un bosque' },
  { src: '/images/galeria-campo-4.svg', alt: 'Detalle aéreo de las hileras de piña' },
  { src: '/images/galeria-instalaciones-2.svg', alt: 'Techos de la planta de empaque vistos desde arriba' },
  { src: '/images/galeria-campo-5.svg', alt: 'Campo de piña con distintos tonos de verde' },
  { src: '/images/galeria-campo-6.svg', alt: 'Plantación y camino de acceso a la finca' },
] // TODO: reemplazar por fotografías reales del campo, instalaciones y procesos
