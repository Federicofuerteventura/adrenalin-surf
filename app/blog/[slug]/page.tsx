import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

const posts: Record<string, {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content: string
}> = {
  'beginner-mistakes': {
    title: '7 Mistakes Every Beginner Surfer Makes (And How to Fix Them)',
    description: 'The most common beginner surf mistakes we see at La Pared — and exactly how to fix them. Practical tips from certified instructors.',
    date: '2024-11-10',
    readTime: '6 min read',
    category: 'Beginner Tips',
    content: `
We see hundreds of beginners walk onto the beach at La Pared every year. And we love every single one of them. But almost everyone repeats the same handful of mistakes — and the good news is that all of them are easy to fix once you know what to look for.

## 1. Looking Down at the Board

This is the number one mistake. When you're learning the pop-up, the instinct is to look at your feet to check where they're landing. But looking down kills your balance immediately.

**The fix:** Pick a point on the horizon and keep your eyes there throughout the pop-up. Your feet will land in the right place — trust your body.

## 2. Paddling with Bent Arms

Paddling efficiency is everything. If your elbows are out to the sides and your arms are bent, you're using maybe 30% of your power and getting exhausted very quickly.

**The fix:** Keep your arms close to the board, reach forward as far as possible, and pull through the water in a straight line. Think of it like swimming freestyle.

## 3. The "Caterpillar" Pop-Up

Many beginners learn a two-stage pop-up — first push the chest up, then bring the feet forward. This creates a jerky movement and makes balancing much harder.

**The fix:** The pop-up should be one explosive, fluid movement. From lying flat to standing in under a second. Practice it on the beach repeatedly before entering the water.

## 4. Standing Too Far Back on the Board

If you're pearling (nose-diving), you might already be standing in the right place — it could be a wave selection issue. But many beginners stand too far back and stall the board.

**The fix:** Centre of gravity should be over the centre of the board. Mark the "sweet spot" with your eyes before you paddle out.

## 5. Stiff Arms and Locked Elbows

Surfing requires your upper body to absorb constant movement. Holding your arms rigid makes you top-heavy and easy to throw off.

**The fix:** Bend your knees, relax your arms out to the sides (like a tightrope walker), and let your upper body move fluidly with the wave.

## 6. Paddling Too Late

Timing is everything in surfing. Most beginners wait until the wave is right on them before paddling hard. By then it's too late to generate speed.

**The fix:** Start paddling hard when the wave is about 2–3 metres behind you. The goal is to match the wave's speed before it reaches you, so it can push you.

## 7. Not Committing to the Pop-Up

Fear makes people hesitate. A half-hearted pop-up almost always results in falling. Doubt leads to collapse.

**The fix:** When you feel the wave picking you up and you're in the right position — commit fully. Go for it. Hesitation is the enemy of surfing.

---

The best way to break all of these habits quickly is to get proper coaching in the water. An instructor who can see what you're doing and give immediate feedback will cut your learning curve dramatically. [Book a beginner lesson at La Pared →](/contact)
    `,
  },
  'what-to-bring': {
    title: 'What to Bring to Your Surf Lesson in Fuerteventura',
    description: 'Complete packing list for your surf lesson at La Pared. What to wear, what not to bring, and how to prepare for the best possible experience.',
    date: '2024-10-22',
    readTime: '4 min read',
    category: 'Preparation',
    content: `
You've booked your surf lesson. You're excited. Now what do you actually need to bring?

We get this question a lot, so here is the definitive packing list for a surf lesson at La Pared beach in Fuerteventura.

## The Essentials

**Swimsuit or board shorts** — you'll wear this under your wetsuit. It should be comfortable and not too baggy (bunched fabric under a wetsuit is very uncomfortable).

**Towel** — ideally a quick-dry travel towel. A changing robe is great if you have one, especially in autumn and winter.

**Sunscreen** — apply before you arrive and bring it to reapply. The Fuerteventura sun is intense year-round. Use reef-safe sunscreen where possible.

**Flip-flops or sandals** — the walk from the car park to the beach is rocky and sandy. You'll thank yourself.

**Water bottle** — surfing is more physically demanding than it looks. Stay hydrated.

## What We Provide

You don't need to bring any of the following — we've got it all:
- Surfboard (softboard for beginners, hardboards for intermediate/advanced)
- Full wetsuit (3/2mm or 4/3mm depending on season)
- Leash
- Wax
- Rash guard (on request)

## What NOT to Bring

**Jewellery and watches** — leave them at home. Rings can cause injuries in the water and are easy to lose.

**GoPro on your first lesson** — keep things simple for your first session. Once you can actually surf, we'll help you capture it.

**Large amounts of cash** — La Pared beach is fairly remote. Only bring what you need for the lesson.

**Expensive clothes to change into** — you will be salty, sandy, and possibly wet. Plan accordingly.

## For Kids

If you're bringing children, pack extra sunscreen, a snack for after, and a dry change of clothes. Kids burn more energy in the water than adults.

## For the Drive There

La Pared is about 15 minutes from Costa Calma. The road is fine for normal cars. Bring a big bag to put wet kit in on the way back. A dry bag or a waterproof bag is ideal.

---

Any other questions about preparing for your lesson? [Send us a message →](/contact) — we're happy to help.
    `,
  },
  'best-season-la-pared': {
    title: 'The Best Time of Year to Surf La Pared, Fuerteventura',
    description: "La Pared's swell, water temperature, crowds, and wind — an honest insider guide to surfing Fuerteventura throughout the year from our certified instructors.",
    date: '2024-09-15',
    readTime: '7 min read',
    category: 'Local Guide',
    content: `
One of the most common questions we get is: "When is the best time to come?"

The honest answer is: it depends on what you're looking for. Fuerteventura and La Pared in particular get swell year-round — but the character of the waves, the water temperature, and the crowd levels vary considerably between seasons.

Here's our genuine insider guide.

## Summer (June – September)

**Wave size:** Small to medium. 0.5–1.5m. Consistent gentle swell.
**Water temp:** 22–24°C. Wetsuit optional, but most people prefer a 2mm shorty.
**Crowds:** Peak tourist season. The beach can get busy mid-morning.
**Wind:** The famous Fuerteventura trade winds kick in from July onwards. Can be strong in the afternoon.
**Verdict for beginners:** Summer is great. Small, predictable waves, warm water, good visibility.

**Best for:** First-timers, families, anyone who wants warm water and gentle conditions.

## Autumn (October – November)

**Wave size:** Growing. 1–2m. More variety and power.
**Water temp:** 21–23°C. A 3/2mm wetsuit is comfortable.
**Crowds:** Quieter than summer. This is our favourite time of year.
**Wind:** Trade winds fading. Lighter and more variable.
**Verdict:** Arguably the best all-round time to visit. Good waves, warm water, fewer people.

**Best for:** Beginners progressing to intermediate, intermediate surfers wanting more wave energy.

## Winter (December – February)

**Wave size:** 1.5–3m+. Atlantic swells bring real power to La Pared.
**Water temp:** 17–20°C. A 4/3mm wetsuit is needed.
**Crowds:** Very quiet. You'll often have the beach almost to yourself.
**Wind:** Calmer mornings, variable afternoons.
**Verdict:** For experienced surfers, winter at La Pared is genuinely special. Not recommended for complete beginners.

**Best for:** Intermediate and advanced surfers. Pure, powerful Atlantic waves with almost no crowds.

## Spring (March – May)

**Wave size:** Variable. 0.5–2m. Can be very inconsistent.
**Water temp:** Warming up from 18°C to 22°C by May.
**Crowds:** Quiet to moderate.
**Wind:** More variable than summer. Can have very good calm days.
**Verdict:** Spring is underrated. When the swell is right, it's excellent.

**Best for:** All levels. A good gamble with potentially excellent uncrowded conditions.

## Our Honest Recommendation

If you want to **learn to surf** for the first time: come in summer or early autumn. Warm water, small waves, forgiving conditions.

If you want to **progress rapidly**: come in October or November. The waves are better, it's less crowded, and you'll get more out of your sessions.

If you want to **surf seriously**: come in winter. La Pared in January on a solid Atlantic swell with no one out is one of the best feelings in the world.

---

Whatever time of year you come, we'll be here and we'll make it work. [Get in touch to discuss when to book →](/contact)
    `,
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-extrabold text-[#0F172A] mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-[#0F172A] mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#E85F33] hover:underline font-medium">$1</a>')
    .replace(/^---$/gm, '<hr class="my-8 border-[#E5E7EB]" />')
    .replace(/^(?!<[h\-])(.*\S.*)$/gm, '<p class="text-[#64748B] leading-relaxed mb-4">$1</p>')
    .replace(/<p class="[^"]+"><\/p>/g, '')
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <>
      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'Adrenalin Surf School' },
            publisher: { '@type': 'Organization', name: 'Adrenalin Surf School', url: 'https://www.adrenalinsurfschool.com' },
          }),
        }}
      />

      {/* Header */}
      <section className="bg-[#0B2A3A] pt-32 pb-12 text-white">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-2 mb-5 text-sm">
            <Link href="/blog" className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft size={14} aria-hidden="true" /> Blog
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/70">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site max-w-3xl">
          <article
            className="prose-like bg-white rounded-3xl p-6 md:p-10 shadow-card"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />
          <div className="mt-8 flex items-center gap-3">
            <Link href="/blog" className="btn btn-outline btn-sm flex items-center gap-1.5">
              <ArrowLeft size={14} /> All Posts
            </Link>
            <Link href="/contact" className="btn btn-primary btn-sm">Book a Lesson</Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Put This into Practice?"
        subtext="Book a surf lesson at La Pared and apply what you've learned with a certified instructor in the water."
        primaryLabel="Book a Lesson"
        primaryHref="/contact"
        secondaryLabel="View Courses"
        secondaryHref="/courses"
      />
    </>
  )
}
