import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const services = [
  {
    href: '/courses',
    badge: 'Surf Lessons',
    badgeColor: 'bg-[#FFE6DC] text-[#E85F33]',
    title: 'The Surf Course',
    subtitle: 'One course. Properly taught.',
    description: 'Everything you need to get going — theory, technique, and real time in the water with an instructor next to you.',
    includes: ['Board & wetsuit included', 'Certified instructor in the water', 'Small groups only', 'Session debrief & feedback'],
    color: 'from-[#0B2A3A] to-[#0F3347]',
    // Image: /public/images/cards/surf-course.webp — 600 × 400 px
    img: '/images/cards/surf-course.webp',
    imgAlt: 'Surf lesson at La Pared, Fuerteventura',
  },
  {
    href: '/sunset-training',
    badge: 'Evening Session',
    badgeColor: 'bg-amber-50 text-amber-700',
    title: 'Sunset Training',
    subtitle: 'Golden hour. Focused coaching.',
    description: 'A dedicated coaching session timed to the late afternoon light. Technique, drills, and real feedback.',
    includes: ['Small groups or private', 'Instructor-led technique work', 'Wind usually drops at sunset', 'Ends at golden hour'],
    color: 'from-[#0F3347] to-[#163E52]',
    // Image: /public/images/cards/sunset-training.webp — 600 × 400 px
    img: '/images/cards/sunset-training.webp',
    imgAlt: 'Sunset training session at La Pared, Fuerteventura',
  },
  {
    href: '/camps',
    badge: 'Surf Camps',
    badgeColor: 'bg-green-50 text-green-700',
    title: 'Surf Camps',
    subtitle: '1 week. All in.',
    description: 'All-inclusive hotel, 5 surf lessons, yoga, and a training session. Show up, switch off, surf.',
    includes: ['All-inclusive hotel (7 nights)', '5 surf lessons + 1 training', 'Daily yoga included', 'Everything arranged'],
    color: 'from-[#163E52] to-[#1A4A61]',
    // Image: /public/images/cards/surf-camps.webp — 600 × 400 px
    img: '/images/cards/surf-camps.webp',
    imgAlt: 'Surf camp week at La Pared, Fuerteventura',
  },
  {
    href: '/rentals',
    badge: 'La Pared',
    badgeColor: 'bg-[#F7F7F5] text-[#0B2A3A]',
    title: 'Board Rentals',
    subtitle: 'Grab a board. Go surf.',
    description: 'Quality surfboards rented directly from our base at Calle Valle Ancho 12, La Pared. Pick up and go.',
    includes: ['Range of board sizes', 'Right board for your level', 'Session or full-day rental', 'Wetsuit available on request'],
    color: 'from-[#0B2A3A] to-[#163E52]',
    // Image: /public/images/cards/board-rentals.webp — 600 × 400 px
    img: '/images/cards/board-rentals.webp',
    imgAlt: 'Surfboards for rent at La Pared, Fuerteventura',
  },
]

export default function CourseCards() {
  return (
    <section className="section-padding bg-[#F7F7F5]" aria-labelledby="services-heading">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">What We Offer</span>
          <div className="divider mx-auto" />
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
            Surf. Train. Explore.
          </h2>
          <p className="mt-4 text-[#64748B] max-w-xl mx-auto text-base md:text-lg">
            One course. Sunset sessions. Week-long camps. Board rentals. All at La Pared.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <article
              key={i}
              className="card flex flex-col group overflow-hidden"
              aria-label={service.title}
            >
              {/* Card image header */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.img}
                  alt={service.imgAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay — dark only at bottom (text zone), clear above */}
                <div
                  className="absolute inset-0 card-image-overlay"
                  aria-hidden="true"
                />
                {/* Solid fallback — shows when image is missing */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} -z-10`}
                  aria-hidden="true"
                />
                {/* Text overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <span className={`badge text-xs mb-2 self-start ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                  <h3
                    className="text-xl font-bold leading-tight text-white"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,0.85), 0 4px 24px rgba(0,0,0,0.65), 0 8px 40px rgba(0,0,0,0.40)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm text-white/90 mt-1"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.95), 0 2px 10px rgba(0,0,0,0.70)' }}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-sm text-[#64748B] leading-relaxed mb-5">{service.description}</p>

                {/* Includes */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#0F172A]">
                      <Check size={14} className="mt-0.5 flex-shrink-0 text-[#E85F33]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="border-t border-[#E5E7EB] pt-5">
                  <Link
                    href={service.href}
                    className="btn btn-primary w-full justify-center group/cta"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
