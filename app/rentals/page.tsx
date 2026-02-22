import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Surfboard Rentals La Pared, Fuerteventura | Adrenalin Surf School',
  description:
    'Rent a surfboard in La Pared, Fuerteventura. Quality boards for all levels. Pick up at Calle Valle Ancho 12, La Pared. Easy, fast, no fuss.',
}

const steps = [
  {
    number: '01',
    title: 'Come by or contact us',
    desc: 'Drop in at our location in La Pared, or message us ahead of time to check availability.',
  },
  {
    number: '02',
    title: 'Pick your board',
    desc: "We'll match you with the right board for your level and the day's conditions. Not sure which size? We'll help.",
  },
  {
    number: '03',
    title: 'Go surf',
    desc: "That's it. Return it when you're done. We'll be here.",
  },
]

export default function RentalsPage() {
  return (
    <>
      {/* Hero */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/rentals/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Surfboard rentals at La Pared, Fuerteventura"
      */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/rentals/hero-mobile.webp" />
          <source srcSet="/images/rentals/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rentals/hero-desktop.webp"
            alt="Surfboard rentals at La Pared, Fuerteventura"
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
            <span className="section-label text-[#E85F33]">Board Rentals</span>
            <div className="divider bg-[#E85F33]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2">
              Grab a Board. Go Surf.
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Quality surfboards rented directly from our base at La Pared.
              No fuss. Just pick up and go.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20rent%20a%20board"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg group"
              >
                Check Availability
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + what we rent */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Board Rentals</span>
              <div className="divider" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
                Already know what you&apos;re doing?
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  Just need a board for the session? We rent quality surfboards directly from our
                  base in La Pared. Convenient, affordable, no fuss.
                </p>
                <p>
                  We keep a range of boards available — different sizes and shapes to suit different
                  skill levels and wave conditions. Whether you&apos;re still building confidence or you
                  surf regularly, we&apos;ll set you up with the right board.
                </p>
              </div>
            </div>

            {/* Good to know */}
            <div className="bg-white rounded-3xl p-8 shadow-card space-y-4">
              <h3 className="font-bold text-[#0F172A] text-lg">Good to Know</h3>
              <ul className="space-y-3 text-sm text-[#64748B]">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                  Rentals by the session or by the day
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                  Wetsuit rental available on request
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                  Board damage policy explained at pickup — no surprises
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                  La Pared has consistent surf most of the year — we&apos;ll flag if conditions aren&apos;t ideal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location callout */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-xl">
            <span className="section-label">Where to Find Us</span>
            <div className="divider" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
              Right here in La Pared
            </h2>
            <div className="bg-[#0B2A3A] rounded-3xl p-8 text-white flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E85F33]/20 text-[#E85F33] flex items-center justify-center">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white text-lg mb-1">Adrenalin Surf School</p>
                <address className="not-italic text-white/70 leading-relaxed">
                  Calle Valle Ancho 12<br />
                  La Pared, 35628<br />
                  Fuerteventura, Spain
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <div className="divider mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
              Three steps. That&apos;s it.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0B2A3A] text-[#E85F33] font-extrabold text-xl flex items-center justify-center mx-auto mb-5">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a Board Today?"
        subtext="Drop by Calle Valle Ancho 12 or send us a message — we'll have the right board ready for you."
        primaryLabel="Check Availability"
        primaryHref="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20rent%20a%20board"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
