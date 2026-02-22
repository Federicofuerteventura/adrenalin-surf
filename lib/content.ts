import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface ContentMeta {
  slug: string
  title: string
  description: string
  date?: string
  image?: string
  [key: string]: unknown
}

export interface ContentItem extends ContentMeta {
  content: string
}

export function getContentBySlug(folder: string, slug: string): ContentItem {
  const filePath = path.join(contentDir, folder, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { slug, content, ...data } as ContentItem
}

export function getAllContent(folder: string): ContentItem[] {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '')
    return getContentBySlug(folder, slug)
  })
}

export function getBlogPosts(): ContentItem[] {
  return getAllContent('blog').sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getFAQs(): ContentItem[] {
  return getAllContent('faq')
}

export function getCourses(): ContentItem[] {
  const order = ['beginner', 'intermediate', 'advanced']
  const all = getAllContent('courses')
  return all.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
}
