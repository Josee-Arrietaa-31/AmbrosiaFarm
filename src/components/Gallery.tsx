import { useState } from 'react'
import { GALLERY } from '../data/content'
import { Lightbox } from './Lightbox'
import { Reveal } from './Reveal'

// Patrón de tamaños para dar ritmo a la cuadrícula (se repite si hay más fotos)
const spans = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
  '',
  '',
  '',
]

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <section id="galeria" aria-labelledby="titulo-galeria" className="bg-niebla py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="titulo-galeria" className="font-display text-4xl font-extrabold tracking-tight text-bosque sm:text-5xl">
            Galería
          </h2>
          <p className="max-w-md text-lg text-piedra">Nuestras fincas, instalaciones y procesos, vistos de cerca y desde el aire.</p>
        </Reveal>

        <ul className="mt-12 grid grid-flow-row-dense auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <li key={img.src} className={spans[i % spans.length]}>
              <Reveal delay={(i % 4) * 0.08} className="h-full">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ampliar imagen: ${img.alt}`}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-bosque/0 transition group-hover:bg-bosque/20" />
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox images={GALLERY} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </section>
  )
}
