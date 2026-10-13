import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SITE, facebookHref, instagramHref } from '../config/site'
import { useLang } from '../i18n/useLang'
import type { Dict } from '../i18n/es'
import { Facebook, Instagram } from './BrandIcons'
import { Reveal } from './Reveal'

// `sitio` es un campo trampa oculto: si llega con valor, contacto.php lo trata como spam.
type FormValues = { nombre: string; correo: string; telefono?: string; mensaje: string; sitio?: string }
type Status = 'idle' | 'sending' | 'success' | 'error'

const inputBase =
  'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-lg text-grafito placeholder:text-piedra/60 transition focus:outline-none focus:ring-4 focus:ring-pina/35'

async function sendForm(data: FormValues, t: Dict['contact']) {
  if (!SITE.formEndpoint) {
    if (import.meta.env.DEV) {
      // PLACEHOLDER: sin endpoint configurado, en desarrollo se simula el envío.
      console.info('[Formulario] Envío simulado:', data)
      await new Promise((r) => setTimeout(r, 700))
      return
    }
    throw new Error(t.errorNoEndpoint)
  }
  const post = () =>
    fetch(SITE.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
  let res = await post()
  // El filtro antibots del hosting responde 409 con un script que pone una cookie y recarga la página.
  // Dentro de fetch ese script no corre, así que se pone la cookie a mano y se reintenta una vez.
  if (res.status === 409) {
    const cookie = (await res.text()).match(/document\.cookie\s*=\s*"([^"]+)"/)?.[1]
    if (cookie) {
      document.cookie = `${cookie}; path=/`
      res = await post()
    }
  }
  if (!res.ok) throw new Error(t.errorStatus(res.status))
}

export function Contact() {
  const { lang, t: dict } = useLang()
  const t = dict.contact
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
      await sendForm(data, t)
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
            {t.title}
          </h2>
          <p className="mt-5 text-xl text-piedra">
            {t.lead}
          </p>

          <ul className="mt-10 space-y-6 text-lg">
            <li className="flex gap-4">
              <Phone aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">{t.phone}</p>
                <a href={SITE.phone.href} className="text-piedra underline-offset-4 hover:text-bosque hover:underline">
                  {SITE.phone.display}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">{t.email}</p>
                <a href={`mailto:${SITE.email}`} className="break-all text-piedra underline-offset-4 hover:text-bosque hover:underline">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-hoja" />
              <div>
                <p className="font-semibold text-grafito">{t.location}</p>
                <address className="not-italic text-piedra">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </address>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <p className="font-semibold text-grafito">{t.follow}</p>
            <ul className="mt-3 flex gap-3">
              <li>
                <a
                  href={facebookHref}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-salvia text-bosque transition hover:bg-pina hover:text-bosque-900"
                >
                  <Facebook aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={instagramHref}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-salvia text-bosque transition hover:bg-pina hover:text-bosque-900"
                >
                  <Instagram aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-salvia shadow-xl shadow-bosque/10 ring-1 ring-salvia">
            <iframe
              title={t.mapTitle}
              src={SITE.mapEmbedUrl.replaceAll('{lang}', lang)}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            href={SITE.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-bosque px-6 font-bold text-white transition hover:bg-hoja"
          >
            {t.directions}
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[28px] bg-niebla p-6 ring-1 ring-salvia sm:p-10"
            aria-describedby="nota-obligatorios"
          >
            <h3 className="font-display text-2xl font-bold text-bosque">{t.formTitle}</h3>
            <p id="nota-obligatorios" className="mt-2 text-piedra">
              {t.required}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="font-semibold">
                  {t.name} *
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                  className={`${inputBase} ${border(!!errors.nombre)}`}
                  {...register('nombre', { required: t.nameError })}
                />
                {errors.nombre && (
                  <p id="error-nombre" role="alert" className="mt-2 text-red-700">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="correo" className="font-semibold">
                  {t.emailLabel} *
                </label>
                <input
                  id="correo"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.correo}
                  aria-describedby={errors.correo ? 'error-correo' : undefined}
                  className={`${inputBase} ${border(!!errors.correo)}`}
                  {...register('correo', {
                    required: t.emailError,
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.emailFormat },
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
                  {t.phoneLabel} <span className="font-normal text-piedra">{t.optional}</span>
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
                  {t.message} *
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  aria-invalid={!!errors.mensaje}
                  aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
                  className={`${inputBase} ${border(!!errors.mensaje)} resize-y`}
                  {...register('mensaje', {
                    required: t.messageError,
                    minLength: { value: 10, message: t.messageShort },
                  })}
                />
                {errors.mensaje && (
                  <p id="error-mensaje" role="alert" className="mt-2 text-red-700">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>
            </div>

            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="sitio">{t.honeypot}</label>
              <input id="sitio" type="text" tabIndex={-1} autoComplete="off" {...register('sitio')} />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-8 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-pina px-8 text-lg font-bold text-bosque-900 transition hover:bg-pina-claro hover:shadow-lg hover:shadow-pina/30 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? t.sending : t.send}
            </button>

            <div aria-live="polite" className="mt-5">
              {status === 'success' && (
                <p className="rounded-xl bg-hoja/10 px-4 py-3 font-semibold text-bosque">
                  {t.success}
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-red-800">
                  {t.errorIntro} {errorDetail} {t.errorWrite}{' '}
                  <a href={`mailto:${SITE.email}`} className="font-semibold underline">
                    {SITE.email}
                  </a>{' '}
                  {t.errorCall} {SITE.phone.display}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
