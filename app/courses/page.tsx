import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Surf Course Fuerteventura | Adrenalin Surf School La Pared',
  description:
    'Learn to surf at La Pared, Fuerteventura. One properly taught surf course — certified instructors, all equipment included, small groups. Book online.',
}

const whatYoullLearn = [
  'How to read waves and pick the right ones',
  'Paddling technique and board positioning',
  'Pop-up technique and correct stance',
  'Riding, turning, and falling safely',
  'Ocean awareness: currents, tides, right of way',
  'How to communicate in the lineup',
  'What to do when a set catches you inside',
  'How to keep improving after the lesson',
]

const included = [
  'Full theory and safety briefing before every session',
  'Softboard and wetsuit',
  'Leash and all necessary equipment',
  'Certified instructor in the water with you',
  'Small group — so you actually get feedback',
  'Session debrief with tips to take forward',
]

export default function CoursePage() {
  return (
    <>
      {/* Hero */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/courses/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Surf course at La Pared, Fuerteventura"
      */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/courses/hero-mobile.webp" />
          <source srcSet="/images/courses/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/courses/hero-desktop.webp"
            alt="Surf course at La Pared, Fuerteventura"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(11,42,58,0.55) 0%, rgba(11,42,58,0.30) 45%, rgba(11,42,58,0.78) 100%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0B2A3A] -z-10" aria-hidden="true" />
        <div className="relative z-20 container-site pt-32 pb-16 md:pb-20 text-white w-full">
          <div className="max-w-2xl">
            <span className="section-label text-[#E85F33]">Surf Course</span>
            <div className="divider bg-[#E85F33]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2">
              The Surf Course
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              One course. Properly taught. No shortcuts.
              Everything you need to get going — from reading the ocean to riding your first real wave.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Book the Course
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20book%20the%20surf%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">Who It&apos;s For</span>
            <div className="divider" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              No experience needed
            </h2>
            <div className="mt-5 space-y-4 text-[#64748B] leading-relaxed text-lg">
              <p>
                You don&apos;t need any experience. This course is built for beginners — but it&apos;s also
                worth it if you&apos;ve tried surfing before and feel like you&apos;re stuck at the same level.
              </p>
              <p>
                By the end, you&apos;ll understand the ocean, feel confident on the board, and know
                how to keep improving on your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn + What's included */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* What you'll learn */}
            <div>
              <span className="section-label">What You&apos;ll Learn</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-8">
                Real skills. In the water.
              </h2>
              <ul className="space-y-3">
                {whatYoullLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0F172A]">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[#E85F33]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's included */}
            <div>
              <span className="section-label">What&apos;s Included</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-8">
                Everything. No extras.
              </h2>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0F172A]">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[#E85F33]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">How It Works</span>
            <div className="divider" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
              Simple. Focused. Effective.
            </h2>
            <p className="text-[#64748B] leading-relaxed text-lg">
              Sessions run on the beach at La Pared. Before entering the water, we always cover theory:
              how the ocean works, how to fall, how to communicate in the lineup. Then we surf.
            </p>
            <p className="mt-4 text-[#64748B] leading-relaxed text-lg">
              Group size is kept intentionally small. Your instructor is in the water with you — not on
              the beach watching from a distance. You get real feedback, in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Safety note */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="bg-[#0B2A3A] rounded-3xl p-8 md:p-10 flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E85F33]/20 text-[#E85F33] flex items-center justify-center">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Safety First. Always.</h3>
                <p className="text-white/70 leading-relaxed">
                  Every session starts with a safety briefing. We assess conditions before we go in
                  and we don&apos;t push anyone past their comfort level. Our instructors are certified
                  and trained in water rescue and first aid.
                  The goal is for you to feel in control — not just lucky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Start?"
        subtext="Pick your dates and we'll handle the rest. Book the course or send us a message — we'll reply fast."
        primaryLabel="Book the Course"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20book%20the%20surf%20course"
      />
    </>
  )
}
