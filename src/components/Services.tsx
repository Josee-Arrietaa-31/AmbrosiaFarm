import { SERVICES } from '../data/content'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section id="servicios" aria-labelledby="titulo-servicios" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="titulo-servicios" className="font-display text-4xl font-extrabold tracking-tight text-bosque sm:text-5xl">
            Servicios
          </h2>
          <p className="mt-5 text-xl text-piedra">
            Acompañamos la piña en todo su recorrido: desde la siembra en la zona norte hasta el contenedor que llega a su destino.
          </p>
        </Reveal>

        {/* Es un proceso secuencial (campo → empaque → exportación), por eso se numera */}
        <ol className="mt-16 space-y-20 lg:space-y-28">
          {SERVICES.map((s, i) => (
            <li key={s.id} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <Reveal className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="group overflow-hidden rounded-[28px]">
                  {/* TODO: reemplazar por fotografía real del servicio */}
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span aria-hidden="true" className="font-display text-7xl font-extrabold leading-none text-salvia">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-display text-3xl font-bold text-bosque sm:text-4xl">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-piedra">{s.text}</p>
                <a
                  href="#contacto"
                  className="mt-7 inline-flex min-h-12 items-center rounded-full bg-bosque px-6 font-bold text-white transition hover:bg-hoja"
                >
                  Consultar sobre {s.title.toLowerCase()}
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
