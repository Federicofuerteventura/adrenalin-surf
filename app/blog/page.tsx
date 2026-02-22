import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Surf Blog | Tips, Conditions & Guides — Adrenalin Surf School Fuerteventura',
  description:
    'Surf tips, La Pared conditions guide, beginner advice, and everything you need to know about surfing in Fuerteventura. Updated by our certified instructors.',
}

const posts = [
  {
    slug: 'beginner-mistakes',
    title: '7 Mistakes Every Beginner Surfer Makes (And How to Fix Them)',
    excerpt: 'From looking down at the board to paddling with bent arms — here are the most common beginner surf mistakes we see every week at La Pared, and exactly how to correct them.',
    date: '2024-11-10',
    readTime: '6 min read',
    category: 'Beginner Tips',
    categoryColor: 'bg-[#FFE6DC] text-[#E85F33]',
  },
  {
    slug: 'what-to-bring',
    title: 'What to Bring to Your Surf Lesson in Fuerteventura',
    excerpt: 'Packing list, what to wear, sunscreen tips, and what NOT to bring to the beach. Everything you need to know to turn up prepared and have the best possible lesson.',
    date: '2024-10-22',
    readTime: '4 min read',
    category: 'Preparation',
    categoryColor: 'bg-blue-50 text-blue-700',
  },
  {
    slug: 'best-season-la-pared',
    title: 'The Best Time of Year to Surf La Pared, Fuerteventura',
    excerpt: "La Pared gets swell year-round, but the experience varies a lot between summer and winter. Here's our honest insider guide to conditions, crowds, and water temperature throughout the year.",
    date: '2024-09-15',
    readTime: '7 min read',
    category: 'Local Guide',
    categoryColor: 'bg-green-50 text-green-700',
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/blog/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Surf tips and guides — La Pared, Fuerteventura"
      */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/blog/hero-mobile.webp" />
          <source srcSet="/images/blog/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/hero-desktop.webp"
            alt="Surf tips and guides — La Pared, Fuerteventura"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(11,42,58,0.60) 0%, rgba(11,42,58,0.40) 50%, rgba(11,42,58,0.82) 100%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0B2A3A] -z-10" aria-hidden="true" />
        <div className="relative z-20 container-site pt-32 pb-14 text-white w-full">
          <span className="section-label text-[#E85F33]">Blog</span>
          <div className="divider bg-[#E85F33]" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Surf Tips & Guides
          </h1>
          <p className="mt-3 text-white/60 max-w-xl">
            Practical advice, local knowledge, and honest guides from the instructors
            at Adrenalin Surf School, La Pared, Fuerteventura.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card flex flex-col group">
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-[#0B2A3A] to-[#163E52] flex items-center justify-center p-6">
                  <span className={`badge ${post.categoryColor}`}>{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h2 className="font-extrabold text-[#0F172A] text-lg leading-snug mb-3 group-hover:text-[#E85F33] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-[#64748B] leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-[#E85F33] flex items-center gap-1 hover:gap-2 transition-all"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read Article <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
