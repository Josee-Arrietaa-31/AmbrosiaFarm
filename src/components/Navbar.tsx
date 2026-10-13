import { motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NAV_IDS } from '../config/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLang } from '../i18n/useLang'
import { Logo } from './Logo'

function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, t, setLang } = useLang()
  const other = lang === 'es' ? 'en' : 'es'
  return (
    <button
      type="button"
      onClick={() => setLang(other)}
      lang={other}
      aria-label={t.nav.switchLabel}
      className={`inline-flex h-10 items-center gap-1.5 rounded-full border border-white/30 px-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:border-pina-claro hover:text-pina-claro ${className}`}
    >
      <Globe aria-hidden="true" className="h-4 w-4" />
      {other}
    </button>
  )
}

export function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? 'bg-bosque/95 shadow-lg shadow-black/10 backdrop-blur' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav aria-label={t.nav.label} className="mx-auto flex h-28 max-w-7xl items-center justify-between px-5 lg:px-8 xl:h-32">
        <a href="#inicio" aria-label={t.nav.home} onClick={() => setOpen(false)}>
          <Logo glow={!solid} className="h-[5.25rem] sm:h-24 xl:h-[6.5rem]" />
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_IDS.map((id) => {
              const isActive = active === id
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-full px-3 py-2 text-[0.95rem] xl:px-4 font-semibold transition-colors ${
                      isActive ? 'text-pina-claro' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {t.nav.items[id]}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 xl:inset-x-4 h-0.5 rounded-full bg-pina-claro"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>
          <LangSwitch />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t.nav.close : t.nav.open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="menu-movil" hidden={!open} className="border-t border-white/10 bg-bosque lg:hidden">
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? 'true' : undefined}
                className={`block rounded-lg px-3 py-3.5 text-lg font-semibold ${
                  active === id ? 'text-pina-claro' : 'text-white'
                }`}
              >
                {t.nav.items[id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
