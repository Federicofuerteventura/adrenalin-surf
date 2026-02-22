import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FAQAccordion from '@/components/ui/FAQAccordion'

const homeFAQs = [
  {
    question: 'Do I need any surfing experience?',
    answer: 'Not at all. Our beginner lessons are designed for complete novices. All you need is the ability to swim and the desire to try something amazing. Our certified instructors will guide you every step of the way.',
  },
  {
    question: 'What should I bring to my surf lesson?',
    answer: 'Just bring yourself, a swimsuit, sunscreen, and a towel. We provide the board, wetsuit, leash, and all necessary safety equipment. Leave valuables at home — the beach has no lockers.',
  },
  {
    question: 'What happens if the ocean conditions are bad?',
    answer: "Safety is our priority. We monitor ocean conditions daily. If the surf is too rough for your level, we'll either move to a more sheltered spot or reschedule at no extra charge.",
  },
  {
    question: 'Do you offer transfers from resorts in the south?',
    answer: 'Yes! We offer transfers from Costa Calma, Morro Jable, Jandia, and surrounding areas. Please let us know your location when booking and we\'ll arrange pickup.',
  },
  {
    question: 'Is it safe for children?',
    answer: 'Absolutely. We welcome surfers from age 8 upwards. Our small group sizes mean every child gets close personal attention. Parents are always welcome to watch from the beach.',
  },
]

export default function FAQPreview() {
  return (
    <section className="section-padding bg-[#F7F7F5]" aria-labelledby="faq-preview-heading">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <span className="section-label">FAQ</span>
            <div className="divider" />
            <h2 id="faq-preview-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
              Got Questions?
            </h2>
            <p className="mt-4 text-[#64748B] text-base md:text-lg leading-relaxed">
              Here are the things people ask us most often. If you don&apos;t see your question
              below, just send us a WhatsApp — we reply fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/faq" className="btn btn-outline group">
                See All FAQs
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%20have%20a%20question%20about%20surf%20lessons"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.534 5.843L.057 23.486a.5.5 0 00.609.61l5.716-1.494A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <FAQAccordion items={homeFAQs} />
        </div>
      </div>
    </section>
  )
}
