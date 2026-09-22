import { motion, useReducedMotion } from 'framer-motion'
import { HERO_IMAGE } from '../data/content'

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-bosque-900">
      <motion.img
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-bosque-900/95 via-bosque-900/45 to-black/10" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:pb-20 lg:px-8 lg:pb-24">
        <motion.p {...rise(0.15)} className="mb-4 max-w-md text-lg text-white/85">
          San Carlos, Costa Rica. Desde 2010.
        </motion.p>
        <motion.h1
          {...rise(0.3)}
          id="titulo-inicio"
          className="font-display text-[clamp(3.6rem,13vw,11.5rem)] font-extrabold leading-[0.86] tracking-[-0.04em] text-white"
        >
          Ambrosia
          <br />
          Farm
        </motion.h1>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p {...rise(0.5)} className="max-w-xl text-xl leading-relaxed text-white/90 sm:text-2xl">
            Cultivamos con respeto por la tierra, empacamos con dedicación y compartimos con el mundo la frescura de Costa Rica.
          </motion.p>
          <motion.div {...rise(0.65)} className="flex flex-wrap gap-3">
            <a
              href="#servicios"
              className="inline-flex min-h-12 items-center rounded-full bg-pina px-7 text-lg font-bold text-bosque-900 transition hover:bg-pina-claro hover:shadow-lg hover:shadow-pina/30"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-white/80 px-7 text-lg font-bold text-white transition hover:bg-white hover:text-bosque"
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
