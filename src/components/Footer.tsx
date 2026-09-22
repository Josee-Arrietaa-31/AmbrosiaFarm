import { MessageCircle } from 'lucide-react'
import type { SVGProps } from 'react'
import { NAV_ITEMS, SITE, facebookHref, whatsappHref } from '../config/site'
import { Logo } from './Logo'

// Lucide ya no incluye íconos de marcas; se usa un SVG simple de Facebook
function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const social = [
    // PLACEHOLDER: URLs definidas en src/config/site.ts
    { label: 'Facebook', href: facebookHref, Icon: Facebook, external: !!SITE.facebookUrl },
    { label: 'WhatsApp', href: whatsappHref, Icon: MessageCircle, external: !!SITE.whatsappNumber },
  ]

  return (
    <footer className="bg-bosque-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs">
            {SITE.legalName}. Empresa familiar costarricense productora y exportadora de piña desde {SITE.foundedYear}.
          </p>
          <ul className="mt-6 flex gap-3">
            {social.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={external ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-pina hover:text-bosque-900"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Secciones del sitio">
          <p className="font-display text-lg font-bold text-white">Secciones</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-pina-claro">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg font-bold text-white">Contacto</p>
          <address className="mt-4 space-y-2 not-italic">
            <p>
              {SITE.address.line1}, {SITE.address.line2}
            </p>
            <p>
              <a href={SITE.phone.href} className="hover:text-pina-claro">
                {SITE.phone.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-pina-claro">
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/60 lg:px-8">
          © {year} {SITE.brand}. {SITE.legalName}.
        </p>
      </div>
    </footer>
  )
}
