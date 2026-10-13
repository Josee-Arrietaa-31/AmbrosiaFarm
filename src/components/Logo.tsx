type Props = { className?: string; glow?: boolean }

/**
 * Logo de Ambrosía Fresh. Con `glow` lleva detrás un degradado claro que se desvanece hacia los bordes,
 * para que el dorado y la palabra "Fresh" se lean sobre la foto del Hero. Sobre fondos oscuros no hace falta.
 */
export function Logo({ className = 'h-16 sm:h-20', glow = false }: Props) {
  return (
    <span className="relative isolate inline-block">
      <span
        aria-hidden="true"
        className={`absolute -inset-x-8 -inset-y-4 -z-10 bg-[radial-gradient(closest-side,rgba(255,255,255,0.92),rgba(255,255,255,0.6)_55%,rgba(255,255,255,0)_100%)] transition-opacity duration-300 ${
          glow ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <img src="/images/logo-ambrosia.png" alt="Ambrosía Fresh" width={569} height={219} className={`block w-auto ${className}`} />
    </span>
  )
}
