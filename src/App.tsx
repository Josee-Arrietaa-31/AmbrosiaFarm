import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { Commitments } from './components/Commitments'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-pina focus:px-5 focus:py-3 focus:font-bold focus:text-bosque-900"
      >
        Ir al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <About />
        <Products />
        <Services />
        <Commitments />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  )
}
