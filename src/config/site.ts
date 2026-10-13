/**
 * Datos de contacto y enlaces del sitio.
 *
 * Todo lo marcado con `PLACEHOLDER` debe reemplazarlo el cliente antes de publicar.
 */

export const SITE = {
  legalName: 'Productos Hortícolas Norteños S.A.',
  brand: 'Ambrosía Fresh',
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

  // Vista satelital de Google Maps. `{lang}` se reemplaza por el idioma de la página (es / en).
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d290.99927873917767!2d-84.43118695253189!3d10.33097837562658!3m2!1i1024!2i768!4f13.1!5e1!3m2!1s{lang}!2scr!4v1791934768448!5m2!1s{lang}!2scr',
  mapDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=10.330978,-84.431187',

  // En producción el formulario lo procesa public/contacto.php en el cPanel (Vite no ejecuta PHP,
  // así que en desarrollo se simula el envío). Se puede cambiar con la variable VITE_FORM_ENDPOINT.
  formEndpoint:
    (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? (import.meta.env.PROD ? '/contacto.php' : ''),
} as const

export const whatsappHref = SITE.whatsappNumber
  ? `https://wa.me/${SITE.whatsappNumber}`
  : '#contacto' // PLACEHOLDER: sin número definido, el enlace lleva a la sección de contacto

export const facebookHref = SITE.facebookUrl || '#contacto' // PLACEHOLDER
export const instagramHref = SITE.instagramUrl || '#contacto' // PLACEHOLDER

/** Secciones del menú, en orden. Los nombres visibles están en `nav.items` de src/i18n. */
export const NAV_IDS = ['inicio', 'nosotros', 'productos', 'servicios', 'compromisos', 'galeria', 'contacto'] as const

if (import.meta.env.DEV) {
  const pending = Object.entries({
    whatsappNumber: SITE.whatsappNumber,
    facebookUrl: SITE.facebookUrl,
    instagramUrl: SITE.instagramUrl,
    mapEmbedUrl: SITE.mapEmbedUrl,
  })
    .filter(([, v]) => !v)
    .map(([k]) => k)
  if (pending.length) {
    console.warn(`[Ambrosía Fresh] Placeholders pendientes en src/config/site.ts: ${pending.join(', ')}`)
  }
}
