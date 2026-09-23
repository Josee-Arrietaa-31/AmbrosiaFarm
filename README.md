# Ambrosía Fresh: sitio corporativo

Sitio de una sola página para Ambrosía Fresh (Productos Hortícolas Norteños S.A.), hecho con React, TypeScript y Tailwind CSS v4.

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compilación de producción en /dist
npm run preview  # revisar la compilación
```

## Estructura

```
src/
  config/site.ts        Datos de contacto, enlaces y PLACEHOLDERS
  data/content.ts       Textos, servicios, compromisos e imágenes
  components/
    Navbar.tsx          Navegación fija, sección activa y menú hamburguesa
    Hero.tsx            Portada con foto aérea y CTA (Servicios / Contacto)
    About.tsx           Historia, misión, visión y valores
    Services.tsx        Plantación, Empaque y Producción, Exportación
    Commitments.tsx     Cuatro pilares y certificaciones
    Gallery.tsx         Cuadrícula de fotos
    Lightbox.tsx        Vista ampliada con teclado (Esc, flechas) y foco atrapado
    Contact.tsx         Datos de contacto, mapa y formulario (React Hook Form)
    Footer.tsx          Redes, secciones y datos de contacto
    Reveal.tsx          Animación de entrada al hacer scroll (Framer Motion)
  hooks/useActiveSection.ts
public/images/          Ilustraciones de muestra (reemplazar)
```

## Pendientes antes de publicar (placeholders)

| Qué | Dónde |
| --- | --- |
| Número de WhatsApp | `SITE.whatsappNumber` en `src/config/site.ts` |
| URL de Facebook | `SITE.facebookUrl` en `src/config/site.ts` |
| Mapa de Google (URL embed) | `SITE.mapEmbedUrl` en `src/config/site.ts` |
| Endpoint del formulario (ej. Formspree) | `SITE.formEndpoint` o variable `VITE_FORM_ENDPOINT` en `.env` |
| Fotografías reales | `public/images/` y rutas en `src/data/content.ts` |
| Logos de GlobalG.A.P. y Rainforest Alliance | `src/components/Commitments.tsx` |
| Logo de la empresa | `src/components/Logo.tsx` y favicon en `index.html` |

En modo desarrollo la consola muestra qué placeholders siguen vacíos. Sin endpoint configurado, el formulario simula el envío en desarrollo y muestra un error claro en producción.

## Accesibilidad y rendimiento

- Etiquetas semánticas, enlace "Ir al contenido", foco visible y navegación completa por teclado.
- Formulario con etiquetas visibles, `aria-invalid` y mensajes de error asociados a cada campo.
- Las animaciones respetan `prefers-reduced-motion`.
- Imágenes con `loading="lazy"` (excepto la portada, que se precarga). Para las fotos reales se recomienda WebP/AVIF.
