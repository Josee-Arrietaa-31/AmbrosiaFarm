/**
 * Datos de contacto y enlaces del sitio.
 *
 * Todo lo marcado con `PLACEHOLDER` debe reemplazarlo el cliente antes de publicar.
 */

export const SITE = {
  legalName: 'Productos Hortícolas Norteños S.A.',
  brand: 'Ambrosia Farm',
  foundedYear: 2010,

  phone: {
    display: '+506 2461-0492',
    href: 'tel:+50624610492',
  },
  email: 'administracion@phnorte.com',
  address: {
    line1: 'San Antonio de Quesada, San Carlos',
    line2: 'Alajuela, Costa Rica',
  },

  whatsappNumber: '50624610492',

  facebookUrl: 'https://www.facebook.com/share/1DD7ASEho5/?mibextid=wwXIfr',
  instagramUrl: 'https://www.instagram.com/ambrosiafreshcr',

  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d222.00265489515377!2d-84.43102560523566!3d10.331102882027695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d10.3311289!2d-84.4309565!4m3!3m2!1d10.3311283!2d-84.43095919999999!5e1!3m2!1ses!2scr!4v1790113989533!5m2!1ses!2scr',

  // PLACEHOLDER: endpoint del formulario (por ejemplo "https://formspree.io/f/xxxxxxx").
  // También puede definirse con la variable de entorno VITE_FORM_ENDPOINT.
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '',
} as const

export const whatsappHref = SITE.whatsappNumber
  ? `https://wa.me/${SITE.whatsappNumber}`
  : '#contacto' // PLACEHOLDER: sin número definido, el enlace lleva a la sección de contacto

export const facebookHref = SITE.facebookUrl || '#contacto' // PLACEHOLDER
export const instagramHref = SITE.instagramUrl || '#contacto' // PLACEHOLDER

export const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'productos', label: 'Productos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'compromisos', label: 'Compromisos' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' },
] as const

if (import.meta.env.DEV) {
  const pending = Object.entries({
    whatsappNumber: SITE.whatsappNumber,
    facebookUrl: SITE.facebookUrl,
    instagramUrl: SITE.instagramUrl,
    mapEmbedUrl: SITE.mapEmbedUrl,
    formEndpoint: SITE.formEndpoint,
  })
    .filter(([, v]) => !v)
    .map(([k]) => k)
  if (pending.length) {
    console.warn(`[Ambrosia Farm] Placeholders pendientes en src/config/site.ts: ${pending.join(', ')}`)
  }
}
