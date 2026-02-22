# Adrenalin Surf School — Website

Modern, conversion-focused website for **Adrenalin Surf School** at La Pared, Fuerteventura.

Built with: **Next.js 14 (App Router) · TypeScript · Tailwind CSS · MDX**

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your values
cp .env.local.example .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Build for production
npm run build
npm start
```

---

## Project Structure

```
adrenalin-surf/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Header, Footer, SEO, tracking)
│   ├── page.tsx                # Home page
│   ├── courses/
│   │   ├── page.tsx            # Courses overview
│   │   ├── beginner/page.tsx   # Beginner course detail
│   │   ├── intermediate/page.tsx
│   │   └── advanced/page.tsx
│   ├── about/page.tsx
│   ├── gallery/page.tsx        # Filterable gallery with lightbox
│   ├── faq/page.tsx            # FAQ with JSON-LD schema
│   ├── contact/page.tsx        # Booking form + map
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post template
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav, mobile hamburger
│   │   └── Footer.tsx          # Multi-column footer with NAP
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── FAQAccordion.tsx    # Animated accordion
│   │   ├── StickyMobileCTA.tsx # Sticky bottom bar (Book + WhatsApp)
│   │   └── TrackingScripts.tsx # GA4 + Meta Pixel placeholders
│   └── sections/
│       ├── Hero.tsx            # Full-screen hero
│       ├── TrustStrip.tsx      # 4-item trust icons
│       ├── CourseCards.tsx     # Course cards grid
│       ├── WhyUs.tsx           # Why choose us section
│       ├── Reviews.tsx         # Testimonials grid
│       ├── GalleryPreview.tsx  # Gallery preview grid
│       ├── FAQPreview.tsx      # FAQ accordion preview
│       ├── Newsletter.tsx      # Email signup
│       ├── CTABanner.tsx       # Reusable CTA section
│       └── CourseDetail.tsx    # Course detail template
│
├── content/                    # MDX/Markdown content (CMS-like)
│   ├── courses/
│   │   ├── beginner.md
│   │   ├── intermediate.md
│   │   └── advanced.md
│   └── blog/
│       ├── beginner-mistakes.md
│       ├── what-to-bring.md
│       └── best-season-la-pared.md
│
├── lib/
│   ├── utils.ts                # cn() helper
│   └── content.ts              # Markdown file reader
│
├── public/
│   └── images/                 # Static images (logo, hero, etc.)
│
├── tailwind.config.ts          # Design tokens + color palette
└── app/globals.css             # CSS variables + base styles
```

---

## Design System

### Color Tokens

Defined as CSS variables in `app/globals.css` and as Tailwind colors in `tailwind.config.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-orange` | `#E85F33` | Primary CTAs, highlights, hover states |
| `--navy` | `#0B2A3A` | Header, dark sections, trust elements |
| `--bg` | `#F7F7F5` | Page background, section alternates |
| `--text` | `#0F172A` | Body text, headings |
| `--muted` | `#64748B` | Secondary text, captions |
| `--border` | `#E5E7EB` | Borders, dividers |
| `--orange-tint` | `#FFE6DC` | Badge backgrounds, soft accents |

To change brand colours, edit:
1. `app/globals.css` — update the `:root` CSS variables
2. `tailwind.config.ts` — update the `colors.orange` and `colors.navy` objects

---

## How to Add Content

### Add a New Course

1. Create a new page at `app/courses/[your-course]/page.tsx`
2. Copy the structure from `app/courses/beginner/page.tsx`
3. Populate the `course` object with your content
4. Add an entry in the courses list at `app/courses/page.tsx`
5. Add to `app/sitemap.ts`

### Add a New Blog Post

1. Create a new Markdown file in `content/blog/your-post-slug.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   slug: your-post-slug
   date: 2025-01-15
   readTime: "5 min read"
   category: Beginner Tips
   excerpt: "Short description for listing and meta."
   image: /images/your-image.jpg
   ---
   ```
3. Add the post data to the `posts` object in `app/blog/[slug]/page.tsx`
4. Add the post to the listing in `app/blog/page.tsx`
5. Add the URL to `app/sitemap.ts`

### Add a New FAQ

Edit `app/faq/page.tsx` — find the `faqSections` array and add items to any existing section, or add a new section object:

```ts
{
  title: 'Your Section Title',
  items: [
    { question: 'Your question?', answer: 'Your answer.' },
  ],
}
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Site URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://www.adrenalinsurfschool.com

# Google Analytics 4 — get from analytics.google.com
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Meta Pixel — get from business.facebook.com/events
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXXXX

# WhatsApp number (with country code, no +)
NEXT_PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX
```

**Tracking only activates in production** (`NODE_ENV === 'production'`). No tracking runs in development.

---

## SEO Checklist

- [x] Single `<h1>` per page
- [x] Unique `<title>` and `<meta description>` per page (via Next.js Metadata API)
- [x] OpenGraph + Twitter card tags
- [x] LocalBusiness JSON-LD schema in root layout
- [x] Course schema on each course detail page
- [x] FAQPage schema on FAQ page
- [x] Article schema on blog posts
- [x] `sitemap.xml` auto-generated at `/sitemap.xml`
- [x] `robots.txt` at `/robots.txt`
- [x] NAP (Name/Address/Phone) consistent across footer and contact page
- [x] Google Maps embed on About and Contact pages
- [ ] Add real phone number (replace `+34 XXX XXX XXX`)
- [ ] Add real Google Maps embed URL
- [ ] Add real Google Reviews link
- [ ] Submit sitemap to Google Search Console

---

## Images

Place images in `public/images/`. Use descriptive filenames (e.g., `beginner-surf-lesson-la-pared.jpg`).

Recommended sizes:
- Hero images: 1920×1080px
- Card images: 800×600px
- Team photos: 600×600px (square)
- Blog post featured: 1200×628px (OpenGraph ratio)

All images should have descriptive `alt` text — already implemented throughout the codebase.

---

## Deployment

The project is ready to deploy on **Vercel** (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

Don't forget to add your environment variables in the Vercel dashboard under Project Settings → Environment Variables.

---

## Performance Notes

- All images use Next.js `<Image>` with `lazy` loading and `srcset`
- Fonts loaded via `next/font/google` with `display: swap`
- No heavy client-side JS — only interactive components use `'use client'`
- CSS variables for all design tokens (no runtime theme switching needed)
- Scroll animations use CSS-only (`animation-delay` classes)

---

## Growth Features Included

| Feature | Status | Where |
|---------|--------|-------|
| Review section with Google link | ✅ | `components/sections/Reviews.tsx` |
| Newsletter signup | ✅ | `components/sections/Newsletter.tsx` |
| Blog (3 starter posts) | ✅ | `app/blog/`, `content/blog/` |
| Sticky mobile CTA bar | ✅ | `components/ui/StickyMobileCTA.tsx` |
| GA4 placeholder | ✅ | `components/ui/TrackingScripts.tsx` |
| Meta Pixel placeholder | ✅ | `components/ui/TrackingScripts.tsx` |
| WhatsApp integration | ✅ | Header, Footer, Contact, Courses |
| LocalBusiness schema | ✅ | `app/layout.tsx` |
| FAQ schema | ✅ | `app/faq/page.tsx` |
| Course schema | ✅ | Each course detail page |
| Sitemap | ✅ | `app/sitemap.ts` |
| Robots.txt | ✅ | `app/robots.ts` |

---

*Built for Adrenalin Surf School, La Pared, Fuerteventura.*
