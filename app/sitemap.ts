import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrenalinsurfschool.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: '/',               priority: 1.0,  changeFrequency: 'weekly' as const },
    { url: '/courses',        priority: 0.9,  changeFrequency: 'weekly' as const },
    { url: '/courses/beginner',     priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/courses/intermediate', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/courses/advanced',     priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about',          priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/gallery',        priority: 0.6,  changeFrequency: 'monthly' as const },
    { url: '/faq',            priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/contact',        priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/blog',           priority: 0.7,  changeFrequency: 'weekly' as const },
    { url: '/blog/beginner-mistakes',    priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/what-to-bring',        priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/best-season-la-pared', priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
