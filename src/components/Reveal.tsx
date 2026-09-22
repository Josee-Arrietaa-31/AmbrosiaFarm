import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; delay?: number; className?: string }

/** Entrada suave al entrar en pantalla. Respeta prefers-reduced-motion vía MotionConfig en App. */
export function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
