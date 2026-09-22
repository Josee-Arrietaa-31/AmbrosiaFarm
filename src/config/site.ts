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

  // PLACEHOLDER: número de WhatsApp en formato internacional sin "+" ni espacios (ej. "506XXXXXXXX").
  whatsappNumber: '',

  // PLACEHOLDER: URL de la página oficial de Facebook.
  facebookUrl: '',

  // PLACEHOLDER: URL "embed" de Google Maps (Compartir > Insertar un mapa > copiar el src del iframe).
  mapEmbedUrl: '',

  // PLACEHOLDER: endpoint del formulario (por ejemplo "https://formspree.io/f/xxxxxxx").
  // También puede definirse con la variable de entorno VITE_FORM_ENDPOINT.
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '',
} as const

export const whatsappHref = SITE.whatsappNumber
  ? `https://wa.me/${SITE.whatsappNumber}`
  : '#contacto' // PLACEHOLDER: sin número definido, el enlace lleva a la sección de contacto

export const facebookHref = SITE.facebookUrl || '#contacto' // PLACEHOLDER

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
    mapEmbedUrl: SITE.mapEmbedUrl,
    formEndpoint: SITE.formEndpoint,
  })
    .filter(([, v]) => !v)
    .map(([k]) => k)
  if (pending.length) {
    console.warn(`[Ambrosia Farm] Placeholders pendientes en src/config/site.ts: ${pending.join(', ')}`)
  }
}
