import { PRODUCTS } from '../data/content'
import { Reveal } from './Reveal'

export function Products() {
  return (
    <section id="productos" aria-labelledby="titulo-productos" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="titulo-productos" className="font-display text-4xl font-extrabold tracking-tight text-bosque sm:text-5xl">
            Productos
          </h2>
          <p className="mt-5 text-xl text-piedra">
            Además de la piña, cultivamos otros productos hortícolas de la zona norte con el mismo cuidado y calidad.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-8 sm:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 0.08} className="h-full overflow-hidden rounded-[28px] bg-niebla ring-1 ring-salvia">
                <div className="aspect-square bg-white p-8">
                  <img src={p.image.src} alt={p.image.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-bosque">{p.name}</h3>
                  <p className="text-sm italic text-piedra">{p.scientificName}</p>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-piedra">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
