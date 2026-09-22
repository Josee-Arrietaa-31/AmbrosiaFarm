import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Img } from '../data/content'

type Props = {
  images: Img[]
  index: number | null
  onClose: () => void
  onChange: (i: number) => void
}

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null
  const count = images.length

  const prev = () => index !== null && onChange((index - 1 + count) % count)
  const next = () => index !== null && onChange((index + 1) % count)

  // Refs para que el manejador de teclado siempre use el índice actual
  const actions = useRef({ prev, next, onClose })
  useEffect(() => {
    actions.current = { prev, next, onClose }
  })

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') actions.current.onClose()
      else if (e.key === 'ArrowLeft') actions.current.prev()
      else if (e.key === 'ArrowRight') actions.current.next()
      else if (e.key === 'Tab') {
        // Mantener el foco dentro del diálogo
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus() // devuelve el foco a la miniatura que abrió la galería
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${index + 1} de ${count}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <figure className="flex max-h-full w-full max-w-6xl flex-col items-center">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            />
            <figcaption className="mt-4 text-center text-white/85">
              {images[index].alt}
              <span className="ml-3 text-white/55">
                {index + 1} / {count}
              </span>
            </figcaption>
          </figure>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          >
            <X aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
