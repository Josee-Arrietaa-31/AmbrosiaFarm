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

  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!4v1791822424044!6m8!1m7!1ssZyHN4NOiedkfKXns4NYFQ!2m2!1d10.3311028820277!2d-84.4308646727193!3f271.5593077812105!4f-0.48128178548383005!5f0.7820865974627469',

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

export const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'productos', label: 'Productos' },
  { id: 'servicios', label: 'Procesos' },
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
  })
    .filter(([, v]) => !v)
    .map(([k]) => k)
  if (pending.length) {
    console.warn(`[Ambrosía Fresh] Placeholders pendientes en src/config/site.ts: ${pending.join(', ')}`)
  }
}
