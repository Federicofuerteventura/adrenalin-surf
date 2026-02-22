import { Star, ExternalLink } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    rating: 5,
    date: 'November 2024',
    text: "Best holiday activity I've ever done. The instructor was patient, funny, and incredibly skilled. I stood up on my second attempt! Can't recommend Adrenalin enough.",
    initials: 'SM',
  },
  {
    name: 'Marcos García',
    location: 'Madrid, Spain',
    rating: 5,
    date: 'October 2024',
    text: 'Espectacular experiencia. Las olas en La Pared son perfectas para aprender y los instructores son profesionales de verdad. Volveré el año que viene.',
    initials: 'MG',
  },
  {
    name: 'Thomas K.',
    location: 'Munich, Germany',
    rating: 5,
    date: 'September 2024',
    text: 'I was nervous as a complete beginner but the team made me feel so comfortable. Small group, personal attention, and by the end of the session I was actually surfing. Incredible.',
    initials: 'TK',
  },
  {
    name: 'Lucie D.',
    location: 'Paris, France',
    rating: 5,
    date: 'August 2024',
    text: 'Perfect organisation, great vibes, and the beach at La Pared is stunning. If you visit Fuerteventura, this lesson is a must. Already booked for next summer!',
    initials: 'LD',
  },
  {
    name: 'James & Emma',
    location: 'Dublin, Ireland',
    rating: 5,
    date: 'July 2024',
    text: "We came as a couple with zero surf experience and left obsessed. The instructor filmed us which was brilliant. Already planning to come back for the intermediate course.",
    initials: 'JE',
  },
  {
    name: 'Carlos F.',
    location: 'Gran Canaria, Spain',
    rating: 5,
    date: 'June 2024',
    text: 'Un equipo muy profesional y con muchas ganas. El spot de La Pared es increíble. Vinimos con el equipo de trabajo y fue una experiencia que no olvidaremos.',
    initials: 'CF',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'fill-[#E5E7EB] text-[#E5E7EB]'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="section-padding bg-[#F7F7F5]" aria-labelledby="reviews-heading">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Reviews</span>
          <div className="divider mx-auto" />
          <h2 id="reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
            What Our Surfers Say
          </h2>
          {/* Aggregate rating */}
          <div className="mt-5 inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-card">
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" aria-hidden="true" />
              ))}
            </div>
            <span className="font-bold text-[#0F172A]">5.0</span>
            <span className="text-[#64748B] text-sm">based on 80+ Google reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="card p-6 flex flex-col gap-4"
              aria-label={`Review by ${review.name}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full bg-[#0B2A3A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm">{review.name}</div>
                    <div className="text-xs text-[#64748B]">{review.location}</div>
                  </div>
                </div>
                {/* Google badge */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 opacity-50" aria-label="Google review">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              <StarRating rating={review.rating} />

              <blockquote className="text-sm text-[#64748B] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="text-xs text-[#64748B]/60 border-t border-[#E5E7EB] pt-3">
                {review.date}
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?sa=X&sca_esv=d14ce5bed43f5d4c&q=Adrenalin+surf+school+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLYwMLI0Nzc0MzUxNzU0MzO2sNjAyPiKUdYxpSg1LzEnM0-huLQoTaE4OSM_P0chKLUsM7W8eBErfnkAZXK3XlsAAAA&rldimm=13802977165475166388&tbm=lcl&hl=en-ES&ved=2ahUKEwint-Tqku6SAxVehP0HHcXaHDgQ9fQKegQIWhAG&biw=2560&bih=1271&dpr=1.5#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg inline-flex items-center gap-2"
          >
            Read All Reviews on Google
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
