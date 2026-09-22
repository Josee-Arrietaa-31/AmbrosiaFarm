import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NAV_ITEMS } from '../config/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { Logo } from './Logo'

const ids = NAV_ITEMS.map((i) => i.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
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
        solid ? 'bg-bosque/95 shadow-lg shadow-black/10 backdrop-blur' : 'bg-gradient-to-b from-black/45 to-transparent'
      }`}
    >
      <nav aria-label="Navegación principal" className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" aria-label="Ambrosia Farm, ir al inicio" onClick={() => setOpen(false)}>
          <Logo light />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${
                    isActive ? 'text-pina-claro' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div id="menu-movil" hidden={!open} className="border-t border-white/10 bg-bosque lg:hidden">
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`block rounded-lg px-3 py-3.5 text-lg font-semibold ${
                  active === item.id ? 'text-pina-claro' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
