# 📋 Guía de SEO - Caputi Festa

## Meta Tags y Configuraciones SEO Agregadas

### 1. **Meta Tags Básicos** ✅
- **Meta Title**: Título único y descriptivo para cada página
- **Meta Description**: Descripción concisa (160-160 caracteres) que aparece en resultados de búsqueda
- **Meta Keywords**: Palabras clave relevantes para el sector
- **Language**: Especifica que el contenido está en español
- **Robots**: Indica a los motores de búsqueda que indexen el sitio

### 2. **Open Graph (OG) Meta Tags** ✅
Estos tags controlan cómo aparece tu sitio cuando se comparte en redes sociales como Facebook, Instagram, WhatsApp, etc.

- `og:type`: Define el tipo de contenido (website)
- `og:title`: Título para redes sociales
- `og:description`: Descripción para redes sociales
- `og:image`: Imagen que se muestra al compartir (1200x630px recomendado)
- `og:url`: URL canónica del sitio
- `og:site_name`: Nombre del sitio
- `og:locale`: Idioma (es_ES para español)

### 3. **Twitter Card Meta Tags** ✅
Controla cómo aparece el sitio cuando se comparte en Twitter/X.

- `twitter:card`: Tipo de tarjeta (summary_large_image para imagen grande)
- `twitter:title`: Título en Twitter
- `twitter:description`: Descripción en Twitter
- `twitter:image`: Imagen en Twitter
- `twitter:creator`: Mencionas la cuenta de Twitter (@caputifesta)

### 4. **Geolocalización** ✅
Informa a Google sobre tu ubicación física (importante para negocios locales).

- `geo:region`: Código de región (EC-MN para Ecuador-Manabí)
- `geo:placename`: Nombre del lugar
- `geo:position`: Coordenadas GPS
- `ICBM`: Coordenadas en formato ICBM

**¿Por qué es importante?** Google favorece resultados locales relevantes. Si alguien busca "wedding planner en Manta", esto ayuda a que aparezca Caputi Festa.

### 5. **Canonical URL** ✅
```html
<link rel="canonical" href="URL_DEL_SITIO" />
```
Evita problemas de contenido duplicado indicando la URL preferida para indexar.

### 6. **JSON-LD Structured Data (Schema.org)** ✅
Son datos estructurados que Google entiende mejor:

#### **LocalBusiness Schema**
- Información de negocio local
- Teléfono, email, dirección
- Tipos de servicios
- Área de servicio (Manta, Manabí)

#### **Person Schema**
- Información sobre Liss Caputi
- Su rol como Wedding Planner
- Vinculación con la empresa

#### **FAQPage Schema**
- Preguntas frecuentes estructuradas
- Respuestas formateadas
- Google puede mostrar esto en un panel especial en resultados

#### **Review Schema**
- Testimonios de clientes
- Calificaciones
- Aumenta confianza en resultados de búsqueda

#### **AggregateOffer Schema**
- Servicios ofrecidos
- Información de precios
- URLs de servicios

### 7. **Favicon e Iconos** ✅
```html
<link rel="icon" href="/logoImage.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="/logoImage.png" />
```
Aparece en pestañas del navegador y dispositivos iOS. Mejora la marca y la experiencia de usuario.

### 8. **Preconexiones (Preconnect y DNS-Prefetch)** ✅
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
```
Mejora los Core Web Vitals al pre-conectarse a recursos externos.

### 9. **Theme Color** ✅
```html
<meta name="theme-color" content="#0d9489" />
```
Define el color de la barra de navegación en navegadores móviles (tu color teal/verde).

### 10. **Robots.txt** ✅
Archivo en la raíz que dice a los buscadores qué pueden y no pueden rastrear.

```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://caputifesta.com/sitemap.xml
```

### 11. **Sitemap.xml** ✅
Mapa del sitio que incluye:
- Todas las URLs importantes
- Fecha de última modificación
- Frecuencia de cambios
- Prioridad de indexación

Google y otros buscadores lo usan para rastrear eficientemente.

### 12. **Security Headers (.htaccess)** ✅
Encabezados HTTP que mejoran seguridad:

- `X-Content-Type-Options`: Previene ataques MIME sniffing
- `X-Frame-Options`: Previene clickjacking
- `X-XSS-Protection`: Protección contra XSS

### 13. **Compresión GZIP y Caché** ✅
En `.htaccess`:

- **Compresión GZIP**: Reduce tamaño de HTML, CSS, JS en ~70%
- **Caché del navegador**: Los usuarios no descargan los mismos archivos nuevamente
- **Keep-Alive**: Mantiene conexión activa para múltiples solicitudes

Esto afecta **Core Web Vitals** que Google usa para ranking.

---

## 📊 Impact en SEO

Estas optimizaciones ayudan con:

✅ **Indexación**: Google entiende mejor tu contenido  
✅ **Rankings**: Mejor posicionamiento en resultados de búsqueda  
✅ **Búsqueda Local**: Aparece en "wedding planner en Manta"  
✅ **Rich Snippets**: Google muestra información estructurada (FAQs, testimonios)  
✅ **Redes Sociales**: Mejor vista previa al compartir  
✅ **Core Web Vitals**: Mejor velocidad y rendimiento  
✅ **Seguridad**: Protección contra ataques  
✅ **Trust Signals**: Schema.org genera más confianza  

---

## 🔧 Próximos Pasos Recomendados

1. **Google Search Console**: Sube el sitemap en https://search.google.com/search-console
2. **Google Business Profile**: Crea/actualiza tu ficha en Google My Business
3. **Verificar en Bing**: https://www.bing.com/webmasters/
4. **Content**: Mejora la calidad de contenido en páginas (reducir Lorem Ipsum en Hero)
5. **Backlinks**: Obtén enlaces de sitios relevantes (blogs de bodas, directorios, etc.)
6. **Internal Linking**: Vincula páginas relacionadas entre sí
7. **Alt Text**: Agrega descripciones a todas las imágenes

---

## 📁 Archivos Modificados/Creados

- ✅ `src/components/shared/Head.astro` - Meta tags mejorados
- ✅ `src/components/shared/StructuredData.astro` - Schema.org JSON-LD
- ✅ `src/layouts/Layout.astro` - Incluye datos estructurados
- ✅ `src/layouts/LayoutHome.astro` - Incluye datos estructurados
- ✅ `src/pages/sitemap.xml.ts` - Mapa del sitio dinámico
- ✅ `public/robots.txt` - Instrucciones para buscadores
- ✅ `public/.htaccess` - Optimizaciones de servidor

---

## 🚀 Verificar SEO

1. **Google**: Busca "site:caputifesta.com" para ver páginas indexadas
2. **Lighthouse**: Chrome DevTools → Lighthouse → Auditoría SEO
3. **Google Search Console**: Monitorea impresiones, clics, CTR
4. **MozBar**: Extensión para ver puntuaciones SEO
