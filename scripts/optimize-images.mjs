// Genera las imágenes que usa el sitio a partir de las fotos originales.
//
//   npm run images
//
// - assets-src/fotos/*.jpg  →  public/images/<nombre>.webp (hasta 1400 px) y <nombre>-800.webp
// - Logo                    →  favicon, ícono para iPhone/Android
// - Foto de portada + logo  →  public/og-image.jpg (vista previa al compartir en WhatsApp/Facebook)
//
// Para cambiar una foto: reemplace el .jpg en assets-src/fotos con el mismo nombre y corra el script.

import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const fotos = path.join(root, 'assets-src', 'fotos')
const out = path.join(root, 'public', 'images')
const pub = path.join(root, 'public')
const logo = path.join(out, 'logo-ambrosia.png')
const BOSQUE = '#1a1712'

for (const file of (await readdir(fotos)).filter((f) => /\.jpe?g$/i.test(f))) {
  const name = path.parse(file).name
  const src = sharp(path.join(fotos, file)).rotate()
  for (const [suffix, width] of [['', 1400], ['-800', 800]]) {
    const info = await src
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toFile(path.join(out, `${name}${suffix}.webp`))
    console.log(`${name}${suffix}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
  }
}

// Ícono: la corona de la piña del logo sobre fondo oscuro
// Recuadro de la corona en el logo de 569x219, medido por píxeles (debajo empiezan las letras)
const crown = await sharp(logo).extract({ left: 222, top: 0, width: 106, height: 111 }).toBuffer()

async function icon(size, file, radius) {
  const inner = Math.round(size * 0.72)
  const mark = await sharp(crown).resize(inner, inner, { fit: 'contain', background: '#0000' }).toBuffer()
  const bg = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${BOSQUE}"/></svg>`,
  )
  await sharp(bg)
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(path.join(pub, file))
  console.log(file)
}
await icon(32, 'favicon-32.png', 7)
await icon(180, 'apple-touch-icon.png', 0) // iOS redondea las esquinas por su cuenta
await icon(512, 'icon-512.png', 112)

// Imagen para compartir (1200x630)
const W = 1200
const H = 630
const shade = Buffer.from(
  `<svg width="${W}" height="${H}">
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b0a07" stop-opacity=".88"/><stop offset=".65" stop-color="#0b0a07" stop-opacity=".35"/><stop offset="1" stop-color="#0b0a07" stop-opacity="0"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <text x="80" y="470" font-family="Georgia, serif" font-size="44" font-weight="700" fill="#ffffff">Piña costarricense de exportación</text>
    <text x="80" y="525" font-family="Arial, sans-serif" font-size="28" fill="#ddbb66">San Carlos, Costa Rica · Desde 2010</text>
  </svg>`,
)
const ogLogo = await sharp(logo).resize({ width: 460 }).toBuffer()
await sharp(path.join(fotos, 'hero-plantacion.jpg'))
  .resize(W, H, { fit: 'cover', position: 'right' })
  .composite([
    { input: shade, top: 0, left: 0 },
    { input: ogLogo, top: 150, left: 70 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(pub, 'og-image.jpg'))
console.log('og-image.jpg')
