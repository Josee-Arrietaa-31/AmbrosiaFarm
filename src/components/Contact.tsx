import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SITE, whatsappHref } from '../config/site'
import { Reveal } from './Reveal'

type FormValues = { nombre: string; correo: string; telefono?: string; mensaje: string }
type Status = 'idle' | 'sending' | 'success' | 'error'

const inputBase =
  'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-lg text-grafito placeholder:text-piedra/60 transition focus:outline-none focus:ring-4 focus:ring-pina/35'

async function sendForm(data: FormValues) {
  if (!SITE.formEndpoint) {
    if (import.meta.env.DEV) {
      // PLACEHOLDER: sin endpoint configurado, en desarrollo se simula el envío.
      console.info('[Formulario] Envío simulado:', data)
      await new Promise((r) => setTimeout(r, 700))
      return
    }
    throw new Error('El formulario aún no tiene un servicio de envío configurado.')
  }
  const res = await fetch(SITE.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`El servidor respondió con el código ${res.status}.`)
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur' })

  const onSubmit = async (data: FormValues) => {
    setStatus('sending')
    try {
      await sendForm(data)
      setStatus('success')
      reset()
    } catch (err) {
      setErrorDetail(err instanceof Error ? err.message : '')
      setStatus('error')
    }
  }

  const border = (hasError: boolean) => (hasError ? 'border-red-600' : 'border-salvia focus:border-hoja')

  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <Reveal className="lg:col-span-5">
          <h2 id="titulo-contacto" className="font-display text-4xl font-extrabold tracking-tight text-bosque sm:text-5xl">
            Contacto
          </h2>
          <p className="mt-5 text-xl text-piedra">
            Cuéntenos qué necesita. Será un gusto atenderle y conversar sobre su próximo pedido.
          </p>

          <ul className="mt-10 space-y-6 text-lg">
            <li className="flex gap-4">
              <Phone aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">Teléfono</p>
                <a href={SITE.phone.href} className="text-piedra underline-offset-4 hover:text-bosque hover:underline">
                  {SITE.phone.display}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">Correo</p>
                <a href={`mailto:${SITE.email}`} className="break-all text-piedra underline-offset-4 hover:text-bosque hover:underline">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MessageCircle aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">WhatsApp</p>
                {/* PLACEHOLDER: definir SITE.whatsappNumber en src/config/site.ts */}
                <a
                  href={whatsappHref}
                  target={SITE.whatsappNumber ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-piedra underline-offset-4 hover:text-bosque hover:underline"
                >
                  {SITE.whatsappNumber ? 'Escríbanos por WhatsApp' : 'Número de WhatsApp pendiente'}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">Ubicación</p>
                <address className="not-italic text-piedra">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </address>
              </div>
            </li>
          </ul>

          <div className="mt-10 overflow-hidden rounded-2xl bg-salvia">
            {SITE.mapEmbedUrl ? (
              <iframe
                title="Mapa de la ubicación de Ambrosia Farm"
                src={SITE.mapEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              // PLACEHOLDER: colocar la URL de Google Maps en SITE.mapEmbedUrl
              <div className="flex h-48 items-center justify-center p-6 text-center text-piedra">
                Mapa pendiente: agregue la URL de Google Maps en la configuración del sitio.
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[28px] bg-niebla p-6 ring-1 ring-salvia sm:p-10"
            aria-describedby="nota-obligatorios"
          >
            <h3 className="font-display text-2xl font-bold text-bosque">Envíenos un mensaje</h3>
            <p id="nota-obligatorios" className="mt-2 text-piedra">
              Los campos marcados con * son obligatorios.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="font-semibold">
                  Nombre *
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                  className={`${inputBase} ${border(!!errors.nombre)}`}
                  {...register('nombre', { required: 'Escriba su nombre.' })}
                />
                {errors.nombre && (
                  <p id="error-nombre" role="alert" className="mt-2 text-red-700">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="correo" className="font-semibold">
                  Correo electrónico *
                </label>
                <input
                  id="correo"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.correo}
                  aria-describedby={errors.correo ? 'error-correo' : undefined}
                  className={`${inputBase} ${border(!!errors.correo)}`}
                  {...register('correo', {
                    required: 'Escriba su correo electrónico.',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Revise el formato del correo, por ejemplo nombre@empresa.com.' },
                  })}
                />
                {errors.correo && (
                  <p id="error-correo" role="alert" className="mt-2 text-red-700">
                    {errors.correo.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="font-semibold">
                  Teléfono <span className="font-normal text-piedra">(opcional)</span>
                </label>
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  className={`${inputBase} ${border(false)}`}
                  {...register('telefono')}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="font-semibold">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  aria-invalid={!!errors.mensaje}
                  aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
                  className={`${inputBase} ${border(!!errors.mensaje)} resize-y`}
                  {...register('mensaje', {
                    required: 'Escriba su mensaje.',
                    minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres.' },
                  })}
                />
                {errors.mensaje && (
                  <p id="error-mensaje" role="alert" className="mt-2 text-red-700">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-8 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-pina px-8 text-lg font-bold text-bosque-900 transition hover:bg-pina-claro hover:shadow-lg hover:shadow-pina/30 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            <div aria-live="polite" className="mt-5">
              {status === 'success' && (
                <p className="rounded-xl bg-hoja/10 px-4 py-3 font-semibold text-bosque">
                  Mensaje enviado. Le responderemos a la brevedad.
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-red-800">
                  No se pudo enviar el mensaje. {errorDetail} Puede escribirnos a{' '}
                  <a href={`mailto:${SITE.email}`} className="font-semibold underline">
                    {SITE.email}
                  </a>{' '}
                  o llamar al {SITE.phone.display}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
