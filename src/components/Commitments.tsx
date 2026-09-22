import { Award, Leaf, ShieldCheck, Users } from 'lucide-react'
import { COMMITMENTS } from '../data/content'
import { Reveal } from './Reveal'

const icons = { ambiental: Leaf, social: Users, calidad: Award, inocuidad: ShieldCheck } as const

/**
 * Sellos de certificación.
 * TODO: reemplazar cada badge por el logo oficial (descargar desde el portal de cada
 * certificadora y respetar sus lineamientos de uso de marca).
 */
const CERTIFICATIONS = [
  { name: 'GlobalG.A.P.', detail: 'Buenas prácticas agrícolas' },
  { name: 'Rainforest Alliance', detail: 'Agricultura sostenible' },
]

export function Commitments() {
  return (
    <section id="compromisos" aria-labelledby="titulo-compromisos" className="relative overflow-hidden bg-bosque py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="titulo-compromisos" className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Compromisos
          </h2>
          <p className="mt-5 text-xl text-white/80">
            La excelencia del producto empieza por cómo tratamos la tierra, a las personas y cada fruta que sale de nuestras fincas.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((c, i) => {
            const Icon = icons[c.id]
            return (
              <li key={c.id} className="border-t-2 border-pina/70 pt-7">
                <Reveal delay={i * 0.08}>
                  <Icon aria-hidden="true" className="h-10 w-10 text-pina" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-2xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-white/80">{c.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal className="mt-20 flex flex-col gap-6 rounded-[28px] bg-white/5 p-8 ring-1 ring-white/10 md:flex-row md:items-center md:justify-between sm:p-10">
          <h3 className="max-w-sm font-display text-2xl font-bold">Fincas certificadas</h3>
          <ul className="flex flex-wrap gap-4" aria-label="Certificaciones">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.name}
                className="flex min-w-[15rem] items-center gap-4 rounded-2xl bg-white px-5 py-4 text-bosque"
              >
                {/* PLACEHOLDER: sustituir por <img src="/logos/..." alt="Logo de ..."> con el logo oficial */}
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-hoja/50 text-xs font-bold text-hoja"
                >
                  Logo
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">{cert.name}</span>
                  <span className="block text-sm text-piedra">{cert.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
