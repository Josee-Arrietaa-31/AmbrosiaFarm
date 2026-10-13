import { useContext } from 'react'
import { LangContext } from './context'

/** Idioma actual, sus textos (`t`) y la función para cambiarlo. */
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de <LangProvider>')
  return ctx
}
