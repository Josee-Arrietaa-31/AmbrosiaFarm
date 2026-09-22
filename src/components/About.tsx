import { BadgeCheck, Handshake, Scale } from 'lucide-react'
import { ABOUT } from '../data/content'
import { Reveal } from './Reveal'

const valueIcons = [Scale, Handshake, BadgeCheck]

export function About() {
  return (
    <section id="nosotros" aria-labelledby="titulo-nosotros" className="bg-niebla py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <h2 id="titulo-nosotros" className="font-display text-4xl font-extrabold leading-tight tracking-tight text-bosque sm:text-5xl">
            Una familia de la zona norte que lleva su piña al mundo
          </h2>
          <div className="mt-8 space-y-5 text-lg text-piedra">
            <p>
              Nacimos en 2010 como <strong className="font-semibold text-grafito">Productos Hortícolas Norteños S.A.</strong>, una empresa
              familiar netamente costarricense. Desde entonces exportamos contenedores de piña cada semana a Estados Unidos y Europa.
            </p>
            <p>
              Trabajamos en alianza con productores de la zona norte del país. Juntos ofrecemos al mercado constancia en volúmenes,
              calidad y responsabilidad ambiental, y abrimos camino a pequeños y medianos productores en los mercados internacionales.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <img
            src={ABOUT.image.src}
            alt={ABOUT.image.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[28px] object-cover shadow-2xl shadow-bosque/20 lg:aspect-[5/4]"
          />
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-[28px] bg-salvia md:grid-cols-2">
          <Reveal className="h-full bg-white p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-bosque">Misión</h3>
            <p className="mt-3 text-lg leading-relaxed text-piedra">{ABOUT.mission}</p>
          </Reveal>
          <Reveal delay={0.08} className="h-full bg-white p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-bosque">Visión</h3>
            <p className="mt-3 text-lg leading-relaxed text-piedra">{ABOUT.vision}</p>
          </Reveal>
        </div>

        <h3 className="mt-20 font-display text-3xl font-bold text-bosque">Nuestros valores</h3>
        <ul className="mt-8 grid gap-10 md:grid-cols-3">
          {ABOUT.values.map((v, i) => {
            const Icon = valueIcons[i]
            return (
              <li key={v.name}>
                <Reveal delay={i * 0.08}>
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-bosque text-pina">
                    <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 font-display text-2xl font-bold text-grafito">{v.name}</p>
                  <p className="mt-2 text-lg text-piedra">{v.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
