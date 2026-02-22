import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Sunset Training | Adrenalin Surf School La Pared, Fuerteventura',
  description:
    'Structured surf coaching at golden hour in La Pared. Technique drills, positioning, and real feedback — small groups, certified instructor. Book online.',
}

const whatToExpect = [
  'Small group (or private, on request)',
  'Warm-up and mobility work before the session',
  'Technique drills and positioning coached by a certified instructor',
  'Feedback on your stance, pop-up, and movement patterns',
  'Ends at or just after sunset',
]

export default function SunsetTrainingPage() {
  return (
    <>
      {/* Hero — full-width responsive image with gradient overlay */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/*
          IMAGE FILES NEEDED (place in /public/images/sunset-training/):
            hero-desktop.webp  →  1920 × 1080 px  (16:9) — loaded on tablet + desktop
            hero-mobile.webp   →  1080 × 1350 px  (4:5)  — loaded on mobile (< 768px)
          Alt text: "Sunset training at La Pared, Fuerteventura"
        */}
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/sunset-training/hero-mobile.webp"
          />
          <source
            srcSet="/images/sunset-training/hero-desktop.webp"
          />
          {/* Fallback — also acts as the img for SEO alt text */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sunset-training/hero-desktop.webp"
            alt="Sunset training at La Pared, Fuerteventura"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>

        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,42,58,0.55) 0%, rgba(11,42,58,0.30) 45%, rgba(11,42,58,0.78) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Fallback background — shows while image loads or if missing */}
        <div className="absolute inset-0 bg-[#0B2A3A] -z-10" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-20 container-site pt-32 pb-16 md:pb-20 text-white w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E85F33] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
                Evening Session · La Pared
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Sunset <span className="text-[#E85F33]">Training</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Golden hour. Focused coaching. The best time of day to work on your surfing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Book a Sunset Session
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20book%20a%20sunset%20training%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Ask About Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">What It Is</span>
            <div className="divider" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              Structured coaching. At the best time of day.
            </h2>
            <div className="mt-5 space-y-4 text-[#64748B] leading-relaxed text-lg">
              <p>
                Sunset Training is a dedicated coaching session timed to the late afternoon light.
                We focus on technique, drills, positioning, and feedback — the stuff that actually
                changes how you surf. Small group, relaxed pace, full instructor attention.
              </p>
              <p>
                It&apos;s not a standard lesson. It&apos;s structured coaching time, with the added
                bonus of golden hour at La Pared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for + Why sunset */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Who It&apos;s For</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
                Beginners welcome. Intermediates too.
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  Open to beginners who&apos;ve done at least one lesson and want to keep building.
                  Also great for intermediate surfers who want focused coaching time and honest
                  feedback on what to fix.
                </p>
                <p>
                  Not sure if it&apos;s the right fit? Message us. We&apos;ll tell you honestly.
                </p>
              </div>
            </div>

            {/* Why sunset */}
            <div>
              <span className="section-label">Why Sunset</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
                Calmer. Quieter. Better light.
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  The wind usually drops in the evening at La Pared. The beach gets quieter.
                  The light goes golden. It&apos;s a better environment to focus — less noise,
                  less rush, more space to actually think about what you&apos;re doing.
                </p>
                <p>
                  It&apos;s also just a great way to end a day on Fuerteventura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="section-label">What to Expect</span>
            <div className="divider" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-8">
              Structured. Focused. Real feedback.
            </h2>
            <ul className="space-y-3">
              {whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#0F172A]">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-[#E85F33]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-2xl bg-[#0B2A3A] text-white/70 text-sm leading-relaxed">
              Available most evenings, conditions permitting. Limited spots.
              Book in advance or WhatsApp us to check availability.
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Book a Sunset Session"
        subtext="Available most evenings. Limited spots — reach out early and we'll sort your dates."
        primaryLabel="Book Now"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20book%20a%20sunset%20training%20session"
      />
    </>
  )
}
