import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Award, MapPin, Heart } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'About Adrenalin Surf School | La Pared, Fuerteventura',
  description:
    'Meet the team behind Adrenalin Surf School. Certified instructors Remi, Raul, and Alberto — based at La Pared, South Fuerteventura.',
}

const instructors = [
  {
    name: 'Remi',
    role: 'Surf Instructor',
    credentials: ['Certified surf coach', 'Water rescue trained', 'La Pared local'],
    bio: "Remi has been surfing Fuerteventura's coastline for years. He's patient with beginners, direct with intermediates, and has a good eye for what's holding someone back in the water. Off the board, he's usually checking the forecast or somewhere in the south.",
    initials: 'RE',
    // Replace with real photo: /images/instructors/remi.jpg
    photoSrc: '/images/instructors/remi.jpg',
    photoAlt: 'Remi – Surf Instructor',
  },
  {
    name: 'Raul',
    role: 'Surf Instructor',
    credentials: ['Certified surf coach', 'First Aid & CPR', 'Years at La Pared'],
    bio: "Raul grew up around the water and has been teaching surf for most of his adult life. He's calm under pressure and genuinely enjoys the moment when a student catches their first proper wave. Ask him about La Pared's best conditions — he'll tell you exactly when to come.",
    initials: 'RA',
    // Replace with real photo: /images/instructors/raul.jpg
    photoSrc: '/images/instructors/raul.jpg',
    photoAlt: 'Raul – Surf Instructor',
  },
  {
    name: 'Alberto',
    role: 'Surf Instructor',
    credentials: ['Certified surf coach', 'Ocean safety qualified', 'Technical coaching specialist'],
    bio: "Alberto brings energy to every session. He's strong technically and good at breaking down movements so they actually make sense. He surfs hard, teaches clearly, and has more enthusiasm for the sport than most people you'll meet.",
    initials: 'AL',
    // Replace with real photo: /images/instructors/alberto.jpg
    photoSrc: '/images/instructors/alberto.jpg',
    photoAlt: 'Alberto – Surf Instructor',
  },
]

const values = [
  { icon: <Heart className="w-5 h-5" />,  title: 'Genuine passion',       desc: 'We surf because we love it. That energy is contagious.' },
  { icon: <Award className="w-5 h-5" />,  title: 'Certified & qualified', desc: 'All instructors hold surf coaching certification and first aid.' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Local knowledge',       desc: 'Years reading La Pared\'s tides, swells, and moods.' },
  { icon: <Check className="w-5 h-5" />,  title: 'Honest teaching',       desc: 'We give real feedback — because that\'s what actually helps you improve.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/about/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Adrenalin Surf School team at La Pared, Fuerteventura"
      */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/about/hero-mobile.webp" />
          <source srcSet="/images/about/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero-desktop.webp"
            alt="Adrenalin Surf School team at La Pared, Fuerteventura"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(11,42,58,0.55) 0%, rgba(11,42,58,0.30) 45%, rgba(11,42,58,0.78) 100%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0B2A3A] -z-10" aria-hidden="true" />
        <div className="relative z-20 container-site pt-32 pb-16 text-white w-full">
          <div className="max-w-2xl">
            <span className="section-label text-[#E85F33]">About Us</span>
            <div className="divider bg-[#E85F33]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              We Are La Pared
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              A small team. We surf here every day. And we love teaching.
              Adrenalin Surf School has been introducing people to the waves of Fuerteventura
              for years — and we&apos;re not done yet.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <div className="divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
                A Surf School Born from Obsession
              </h2>
              <div className="mt-5 space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  La Pared is not the most famous surf spot in the Canary Islands. It doesn&apos;t have
                  the crowds of El Cotillo or the fame of Lobos. But for those who know it, it&apos;s
                  something special — a raw, wild, beautiful beach with consistent Atlantic swell
                  and a character all of its own.
                </p>
                <p>
                  Adrenalin Surf School was founded to share that feeling. We started with a simple idea:
                  teach people to surf properly, in one of the best spots in the Canary Islands, without
                  the usual holiday-school nonsense. Small groups. Honest coaching. Real time in the water.
                </p>
                <p>
                  We care deeply about the ocean, this beach, and the community here in the south of
                  Fuerteventura. We teach sustainable surfing practices, respect for the water, and we
                  genuinely love every person who walks onto the beach ready to give it a go.
                </p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A] text-sm">{v.title}</div>
                      <div className="text-xs text-[#64748B]">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/images/hero-surf.png"
                alt="Adrenalin Surf School instructors at La Pared beach Fuerteventura"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white" aria-labelledby="team-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-label">Our Team</span>
            <div className="divider mx-auto" />
            <h2 id="team-heading" className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              Meet Your Instructors
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((person, i) => (
              <article key={i} className="card p-6 md:p-8">
                {/* Photo placeholder — swap initials div for <Image> once photos are added */}
                <div className="w-20 h-20 rounded-2xl bg-[#0B2A3A] text-white font-extrabold text-2xl flex items-center justify-center mb-5 overflow-hidden">
                  {/* TODO: replace with:
                    <Image src={person.photoSrc} alt={person.photoAlt} width={80} height={80} className="object-cover w-full h-full" />
                  */}
                  {person.initials}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{person.name}</h3>
                <p className="text-sm text-[#E85F33] font-medium mb-3">{person.role}</p>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">{person.bio}</p>
                <ul className="space-y-1.5">
                  {person.credentials.map((cred, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#64748B]">
                      <Check size={12} className="text-[#E85F33]" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safety + Certification */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Certified. Safety-first. Always.</span>
            <div className="divider mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-5">
              You&apos;re in safe hands
            </h2>
            <p className="text-[#64748B] leading-relaxed text-lg">
              All our instructors are certified surf coaches with first aid and water rescue training.
              Before every session — regardless of level — we brief the group on ocean conditions,
              safety signals, and right-of-way rules. We don&apos;t skip this. Not for anyone.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Location</span>
              <div className="divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-5">
                La Pared Beach, South Fuerteventura
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-4">
                La Pared sits on the southwest coast of Fuerteventura — rugged, dramatic, and strikingly
                beautiful. The beach receives consistent Atlantic swell year-round, making it ideal for
                learning and progression. Largely uncrowded compared to the northern beaches.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-6">
                The nearest town is Costa Calma, approximately 15 minutes south. If you&apos;re driving,
                free parking is available on the road above the beach.
              </p>
              <address className="not-italic space-y-2 text-sm text-[#64748B]">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-[#E85F33]" />
                  Calle Valle Ancho 12, La Pared, 35628, Fuerteventura, Spain
                </div>
              </address>
            </div>
            {/* Map embed placeholder */}
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden bg-[#E5E7EB] flex items-center justify-center shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.123456789!2d-14.2200!3d28.1200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzEyLjAiTiAxNMKwMTMnMTIuMCJX!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adrenalin Surf School location — Calle Valle Ancho 12, La Pared, Fuerteventura"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Come Surf With Us"
        subtext="Book a lesson at La Pared and see what all the fuss is about. We can't wait to see you in the water."
        primaryLabel="Book a Lesson"
        primaryHref="/contact"
        secondaryLabel="See Our Services"
        secondaryHref="/courses"
      />
    </>
  )
}
