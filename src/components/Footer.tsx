import { MessageCircle } from 'lucide-react'
import { NAV_IDS, SITE, facebookHref, instagramHref, whatsappHref } from '../config/site'
import { useLang } from '../i18n/useLang'
import { Facebook, Instagram } from './BrandIcons'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const social = [
    { label: 'Facebook', href: facebookHref, Icon: Facebook, external: !!SITE.facebookUrl },
    { label: 'Instagram', href: instagramHref, Icon: Instagram, external: !!SITE.instagramUrl },
    { label: 'WhatsApp', href: whatsappHref, Icon: MessageCircle, external: !!SITE.whatsappNumber },
  ]

  return (
    <footer className="bg-bosque-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs">
            {t.footer.about(SITE.legalName, SITE.foundedYear)}
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

        <nav aria-label={t.footer.sectionsLabel}>
          <p className="font-display text-lg font-bold text-white">{t.footer.sections}</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-pina-claro">
                  {t.nav.items[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg font-bold text-white">{t.footer.contact}</p>
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
