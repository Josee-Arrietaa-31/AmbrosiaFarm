/**
 * Imágenes del sitio. Los textos y los `alt` en cada idioma están en src/i18n/es.ts y en.ts.
 *
 * IMÁGENES: las fotos originales viven en assets-src/fotos. `npm run images` genera en public/images
 * una versión .webp de hasta 1400 px y otra de 800 px (-800.webp) de cada una.
 */

/** `src` y `srcSet` para una foto generada por scripts/optimize-images.mjs. */
export function photo(name: string) {
  return {
    src: `/images/${name}.webp`,
    srcSet: `/images/${name}-800.webp 800w, /images/${name}.webp 1400w`,
  }
}

export const HERO_IMAGE = photo('hero-plantacion')
export const ABOUT_IMAGE = photo('nosotros-finca')

export const PRODUCTS = [
  { id: 'pina', scientificName: 'Ananas comosus', image: photo('producto-pina') },
  { id: 'chayote', scientificName: 'Sechium edule', image: photo('producto-chayote') },
  { id: 'yuca', scientificName: 'Manihot esculenta', image: photo('producto-yuca') },
] as const

export const SERVICES = [
  { id: 'plantacion', image: photo('servicio-plantacion') },
  { id: 'empaque', image: photo('servicio-empaque') },
  { id: 'exportacion', image: photo('servicio-exportacion') },
] as const

export const COMMITMENTS = ['ambiental', 'social', 'calidad', 'inocuidad'] as const

export const CERTIFICATIONS = [
  { name: 'GlobalG.A.P.', logo: '/images/cert-globalgap.png' },
  { name: 'FDA', logo: '/images/cert-fda.png' },
] as const

/** Mismo orden que `gallery.alts` en los textos. */
export const GALLERY = Array.from({ length: 8 }, (_, i) => photo(`galeria-${i + 1}`))
