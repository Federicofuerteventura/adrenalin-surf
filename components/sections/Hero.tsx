import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/videos/hero-surf.mp4" type="video/mp4" />
          <source src="/videos/hero-surf.webm" type="video/webm" />
        </video>
        {/* Navy-toned gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(11,42,58,0.5) 0%, rgba(11,42,58,0.3) 50%, rgba(11,42,58,0.72) 100%)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site pt-28 pb-24 md:pt-36 md:pb-32 text-white">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#E85F33] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              La Pared · South Fuerteventura
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-balance animate-fade-up animation-delay-100">
            Ride Your First <span className="text-[#E85F33]">Wave.</span>
            <br />Or Your Best One Yet.
          </h1>

          {/* Subcopy */}
          <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl animate-fade-up animation-delay-200">
            Surf lessons, camps, and board rentals in La Pared — one of Fuerteventura&apos;s most consistent breaks.
            Certified instructors. All equipment included. Real time in the water.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animation-delay-300">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg group"
            >
              Book a Lesson
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/camps"
              className="btn btn-secondary btn-lg"
            >
              Plan Your Camp
            </Link>
          </div>

          {/* Social proof micro */}
          <div className="mt-8 flex items-center gap-5 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="w-7 h-7 rounded-full bg-white/30 border-2 border-white/60 flex items-center justify-center text-xs font-bold"
                    aria-hidden="true"
                  >
                    {['A','B','C','D'][n-1]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/80">500+ happy surfers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5" aria-label="Rating: 5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#F59E0B]" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/80">5.0 Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70" aria-hidden="true">
        <div className="w-6 h-9 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
