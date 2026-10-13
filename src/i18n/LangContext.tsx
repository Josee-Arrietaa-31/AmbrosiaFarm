import { useEffect, useState, type ReactNode } from 'react'
import { LangContext, type Lang } from './context'
import { en } from './en'
import { es, type Dict } from './es'

const dicts: Record<Lang, Dict> = { es, en }
const STORAGE_KEY = 'ambrosia-lang'

/** Idioma inicial: ?lang= en la URL, luego la última elección guardada, luego el idioma del navegador. */
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // almacenamiento bloqueado: se sigue con el idioma del navegador
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = dicts[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin almacenamiento la elección dura solo esta visita
    }
    // El enlace compartido conserva el idioma (?lang=en); en español la URL queda limpia
    const url = new URL(window.location.href)
    if (lang === 'en') url.searchParams.set('lang', 'en')
    else url.searchParams.delete('lang')
    window.history.replaceState(null, '', url)
  }, [lang, t])

  return <LangContext.Provider value={{ lang, t, setLang }}>{children}</LangContext.Provider>
}

