export async function GET() {
  const pages = [
    {
      url: 'https://caputifesta.com/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: 'https://caputifesta.com/servicios',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      url: 'https://caputifesta.com/wedding-planner',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: 'https://caputifesta.com/faq',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: 'https://caputifesta.com/contacto',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
