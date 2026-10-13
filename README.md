# Ambrosía Fresh: sitio corporativo

Sitio de una sola página, en español e inglés, para Ambrosía Fresh (Productos Hortícolas Norteños S.A.). Está hecho con React, TypeScript y Tailwind CSS v4 y se publica en el cPanel de https://ambrosiafarmcr.com.

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compilación de producción en /dist
npm run preview  # revisar la compilación
npm run images   # regenerar fotos WebP, íconos e imagen para compartir
```

## Estructura

```
src/
  config/site.ts        Datos de contacto, redes, mapa y endpoint del formulario
  data/content.ts       Qué foto va en cada sección
  i18n/es.ts, en.ts     Todos los textos en español e inglés (misma forma; TypeScript lo verifica)
  i18n/LangContext.tsx  Idioma activo: ?lang=en, última elección o idioma del navegador
  components/           Navbar (con botón ES/EN), Hero, About, Products, Services,
                        Commitments, Gallery + Lightbox, Contact, Footer, WhatsAppButton
assets-src/fotos/       Fotos originales en JPG (no se publican)
scripts/optimize-images.mjs  Genera public/images/*.webp (1400 px y 800 px), favicon,
                        íconos y public/og-image.jpg
public/
  contacto.php          Recibe el formulario y lo envía a administracion@phnorte.com
  .htaccess             HTTPS, sin www, caché y compresión (Apache)
  robots.txt, sitemap.xml
```

## Cambiar una foto

1. Reemplace el JPG en `assets-src/fotos/` con el mismo nombre.
2. Corra `npm run images` y luego `npm run build`.

## Publicar en el cPanel

1. `npm run build`.
2. Suba el contenido de `dist/` a `public_html` (incluido `.htaccess`, que está oculto). Puede comprimirlo en uno o varios zip y extraerlos en el Administrador de archivos.
3. Permisos: carpetas `0755`, archivos `0644`.

## Formulario de contacto

`public/contacto.php` valida los datos, descarta bots con un campo trampa, limita a 5 mensajes por hora por IP y solo acepta envíos desde ambrosiafarmcr.com. El hosting tiene un filtro antibots que responde 409; el formulario lo resuelve solo y reintenta (ver `src/components/Contact.tsx`). En desarrollo el envío se simula porque Vite no ejecuta PHP.

## Accesibilidad y rendimiento

- Etiquetas semánticas, enlace "Ir al contenido", foco visible y navegación completa por teclado.
- Formulario con etiquetas visibles, `aria-invalid` y mensajes de error asociados a cada campo.
- Las animaciones respetan `prefers-reduced-motion`.
- Fotos en WebP con `srcset`: el navegador descarga la versión de 800 px donde la foto se ve pequeña.
