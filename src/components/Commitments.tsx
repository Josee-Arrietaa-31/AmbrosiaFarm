import { Award, Leaf, ShieldCheck, Users } from 'lucide-react'
import { CERTIFICATIONS, COMMITMENTS } from '../data/content'
import { useLang } from '../i18n/useLang'
import { Reveal } from './Reveal'

const icons = { ambiental: Leaf, social: Users, calidad: Award, inocuidad: ShieldCheck } as const

export function Commitments() {
  const { t } = useLang()
  const c = t.commitments

  return (
    <section id="compromisos" aria-labelledby="titulo-compromisos" className="relative overflow-hidden bg-bosque-900 py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 85% -10%, color-mix(in oklab, var(--color-pina) 22%, transparent), transparent 60%), radial-gradient(ellipse 60% 50% at 0% 110%, color-mix(in oklab, var(--color-pina) 12%, transparent), transparent 60%)',
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="titulo-compromisos" className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 text-xl text-white/80">{c.lead}</p>
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((id, i) => {
            const Icon = icons[id]
            return (
              <li key={id} className="border-t-2 border-pina/70 pt-7">
                <Reveal delay={i * 0.08}>
                  <Icon aria-hidden="true" className="h-10 w-10 text-pina" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-2xl font-bold">{c.items[id].title}</h3>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-white/80">{c.items[id].text}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal className="mt-20 grid gap-8 rounded-[28px] bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-8 ring-1 ring-pina/30 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold">{c.certTitle}</h3>
            <p className="mt-2 text-lg text-white/70">{c.certLead}</p>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:gap-5" aria-label={c.certTitle}>
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-xl shadow-black/30 ring-1 ring-white transition duration-300 hover:-translate-y-1 hover:shadow-pina/20 sm:w-52"
              >
                <img src={cert.logo} alt={c.certLogoAlt(cert.name)} className="h-16 w-full object-contain sm:h-20" />
                <span className="text-sm font-bold uppercase tracking-wider text-piedra">{cert.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
