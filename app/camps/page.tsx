import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Surf Camps Fuerteventura | 1 Week All-Inclusive | Adrenalin Surf School',
  description:
    'One week surf camp in La Pared, Fuerteventura. All-inclusive hotel, 5 surf lessons, yoga, and 1 training session included. Book your camp week.',
}

const included = [
  'All-inclusive hotel accommodation (7 nights)',
  '5 surf lessons with Adrenalin instructors',
  '1 dedicated surf training session',
  'Daily yoga sessions',
  'Board and wetsuit for all sessions',
  'Airport transfers on request — ask us',
]

const whatToBring = [
  'Swimwear and a rash guard if you have one (wetsuits provided)',
  'Reef-safe sunscreen',
  'Comfortable clothes for yoga',
  'Good mood — everything else is covered',
]

export default function CampsPage() {
  return (
    <>
      {/* Hero */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/camps/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Surf camp at La Pared, Fuerteventura"
      */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/camps/hero-mobile.webp" />
          <source srcSet="/images/camps/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/camps/hero-desktop.webp"
            alt="Surf camp at La Pared, Fuerteventura"
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
            <span className="section-label text-[#E85F33]">Surf Camps</span>
            <div className="divider bg-[#E85F33]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2">
              One Week. All In.
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              All-inclusive hotel. 5 surf lessons. Yoga. A training session.
              Come as a guest, leave as a surfer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Book Your Camp
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20the%20surf%20camp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Ask About Dates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Package summary */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="max-w-4xl">
            <span className="section-label">The Package</span>
            <div className="divider" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
              1 week · All-inclusive hotel · La Pared
            </h2>
            <p className="text-[#64748B] text-lg mb-8">Everything arranged. Nothing to figure out once you arrive.</p>

            <div className="bg-[#0B2A3A] rounded-3xl p-8 md:p-10 text-white">
              <h3 className="text-xl font-bold mb-6 text-white">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[#E85F33]" aria-hidden="true" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week description */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">A Typical Week</span>
            <div className="divider" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
              What it actually feels like
            </h2>
            <div className="space-y-4 text-[#64748B] leading-relaxed text-lg">
              <p>
                You arrive, check in, and the rest takes care of itself. Mornings usually start with
                yoga — a proper session, not just stretching. Then surf. Afternoons are yours: explore
                the island, rest, or get back in the water if you can&apos;t stop.
              </p>
              <p>
                Over the week, you&apos;ll fit in five lessons and one focused training session. The yoga
                isn&apos;t filler — it genuinely helps your surfing. Balance, breathing, body awareness.
                By the end of the week, most guests are surprised by how much they&apos;ve progressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for + What to bring */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Who it's for */}
            <div>
              <span className="section-label">Who It&apos;s For</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
                Perfect for beginners and solo travellers
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  Beginners who want a proper introduction — not just a couple of lessons, but a real
                  immersion. A full week gives you time to build confidence, get comfortable in the
                  water, and actually feel the progress.
                </p>
                <p>
                  Also great for solo travellers. The camp format means you&apos;re not figuring things
                  out alone — you arrive and the structure is already there.
                </p>
              </div>
            </div>

            {/* What to bring */}
            <div>
              <span className="section-label">What to Bring</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
                Not much. We handle the rest.
              </h2>
              <ul className="space-y-3">
                {whatToBring.map((item, i) => (
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

      <CTABanner
        heading="Ready to Book Your Camp Week?"
        subtext="Availability is limited. Reach out early and we'll sort your dates. WhatsApp gets the fastest reply."
        primaryLabel="Book Your Camp"
        primaryHref="/contact"
        secondaryLabel="WhatsApp for Fast Reply"
        secondaryHref="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20the%20surf%20camp"
      />
    </>
  )
}
