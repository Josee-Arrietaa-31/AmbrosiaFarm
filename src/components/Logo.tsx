/**
 * Marca tipográfica provisional.
 * TODO: reemplazar por el logo oficial de Ambrosia Farm (SVG o PNG con fondo transparente).
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 font-display text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-bosque'}`}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7">
        <path d="M16 3c-1 3-1 5 0 7 1-2 1-4 0-7Zm-5 2c0 3 2 5 4 6-1-3-2-5-4-6Zm10 0c-2 1-3 3-4 6 2-1 4-3 4-6Z" fill="#6aa654" />
        <ellipse cx="16" cy="20" rx="7.5" ry="9" fill="#e3a62b" />
        <path d="M10 16l12 8M10 22l12-8M11 13.5l10 13M11 26.5l10-13" stroke="#b9801a" strokeWidth="1" opacity=".6" />
      </svg>
      Ambrosia Farm
    </span>
  )
}
