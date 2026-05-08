import type { MetadataRoute } from 'next'

const BASE = 'https://centralmassjunk.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ['', '/services', '/pricing', '/about', '/contact', '/quote']
  return routes.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }))
}
