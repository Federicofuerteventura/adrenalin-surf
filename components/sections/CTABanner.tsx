import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  heading?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  heading       = 'Ready to Ride Your First Wave?',
  subtext       = 'Book a lesson today and experience Fuerteventura from the water. Small groups, certified instructors, all equipment included.',
  primaryLabel  = 'Book a Surf Lesson',
  primaryHref   = '/contact',
  secondaryLabel = 'View All Courses',
  secondaryHref  = '/courses',
}: CTABannerProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#E85F33] py-16 md:py-20"
      aria-label="Call to action"
    >
      {/* Decorative waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0">
          <path fill="white" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192V320H0Z" />
        </svg>
        <svg viewBox="0 0 1440 320" className="w-full absolute top-0 scale-y-[-1]">
          <path fill="white" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192V320H0Z" />
        </svg>
      </div>

      <div className="container-site relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
          {heading}
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8">
          {subtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="btn bg-white text-[#E85F33] hover:bg-orange-50 border-white font-bold btn-lg shadow-lg group"
          >
            {primaryLabel}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href={secondaryHref}
            className="btn btn-secondary btn-lg border-white/60 hover:bg-white/15"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
