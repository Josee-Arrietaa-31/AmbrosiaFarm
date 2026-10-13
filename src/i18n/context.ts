import { createContext } from 'react'
import type { Dict } from './es'

export type Lang = 'es' | 'en'

export const LangContext = createContext<{ lang: Lang; t: Dict; setLang: (lang: Lang) => void } | null>(null)
