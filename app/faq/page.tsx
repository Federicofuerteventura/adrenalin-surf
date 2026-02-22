import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'FAQ | Surf School Fuerteventura Questions Answered',
  description:
    'Everything you need to know before your surf lesson in La Pared, Fuerteventura. Booking, equipment, transfers, safety, age requirements and more.',
}

const faqSections = [
  {
    title: 'Booking & Availability',
    items: [
      {
        question: 'How do I book a surf lesson?',
        answer: 'The easiest way is to use our contact form, send us a WhatsApp, or give us a call. Tell us the date you want, the course level, and the number of people. We\'ll confirm availability and send you all the details.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 2–3 days in advance, especially in peak season (June–September). For group bookings, please book as early as possible to secure your preferred time slot.',
      },
      {
        question: 'What is the cancellation policy?',
        answer: 'Free cancellation up to 24 hours before your lesson. If you cancel less than 24 hours before, we charge 50% of the lesson fee. If we cancel due to weather or ocean conditions, you will receive a full refund or free rescheduling.',
      },
      {
        question: 'Can I book for the same day?',
        answer: 'Sometimes, if there is availability. Send us a WhatsApp for last-minute bookings and we\'ll do our best. Please note that same-day bookings are subject to availability and ocean conditions on the day.',
      },
      {
        question: 'Do you accept card payments?',
        answer: 'Yes, we accept cash (EUR) and major credit/debit cards. Payment is due on the day of your lesson unless otherwise agreed.',
      },
    ],
  },
  {
    title: 'What to Expect',
    items: [
      {
        question: 'What happens during a typical surf lesson?',
        answer: 'We meet at La Pared beach, give you your equipment, and begin with a 20–30 minute beach session covering theory, technique, and safety. Then we head into the water for the main coaching session, followed by a short debrief. The whole experience is enjoyable, safe, and very memorable.',
      },
      {
        question: 'Will I actually stand up on the board?',
        answer: 'Almost certainly, yes. Our beginner method is designed to get you to your feet as quickly as possible. We use wide, stable softboards and guide you through every step. The vast majority of our first-time students stand up on their first lesson.',
      },
      {
        question: 'How long are the lessons?',
        answer: 'Beginner lessons are 2 hours. Intermediate courses are 3 hours. Advanced training sessions are 2–4 hours depending on what you\'re working on. Private sessions can be customised to any length.',
      },
      {
        question: 'What language are the lessons taught in?',
        answer: 'We teach in English and Spanish. Other languages (German, French) may be available depending on instructor availability — please ask when booking.',
      },
    ],
  },
  {
    title: 'Equipment & What to Bring',
    items: [
      {
        question: 'Do I need to bring any equipment?',
        answer: 'No. We provide everything: board, wetsuit, leash, and wax. Just bring a swimsuit, towel, sunscreen, and flip-flops. If you have your own board or wetsuit, you\'re welcome to use it.',
      },
      {
        question: 'What should I wear?',
        answer: 'Wear a swimsuit or board shorts under the wetsuit. You\'ll be in the water so avoid wearing jewellery or watches. We provide a wetsuit, but if you prefer to wear a rash guard underneath, go ahead.',
      },
      {
        question: 'Should I eat before the lesson?',
        answer: 'Have a light meal 1–2 hours before. Avoid eating a heavy meal right before as paddling can upset your stomach. Bring water to stay hydrated.',
      },
      {
        question: 'Is there anywhere to store my belongings?',
        answer: 'Unfortunately there are no lockers at La Pared beach. We recommend leaving valuables at your accommodation. Your instructor can keep an eye on a bag while you\'re in the water.',
      },
    ],
  },
  {
    title: 'Safety & Conditions',
    items: [
      {
        question: 'Is surfing dangerous?',
        answer: 'Surfing carries some risk, like any water sport. However, our approach is very safety-focused. We brief you thoroughly before entering the water, choose safe spots for each level, and our instructors are always in or near the water with you. We also hold first aid and lifeguard certifications.',
      },
      {
        question: 'What happens if the waves are too big or conditions are dangerous?',
        answer: 'We monitor ocean conditions every morning. If the conditions are not suitable for your lesson, we will contact you as early as possible and either move to a safer spot, reschedule, or provide a full refund. Your safety is our absolute priority.',
      },
      {
        question: 'Do I need to be a strong swimmer?',
        answer: 'You should be comfortable in water and able to swim at least 25 metres. You don\'t need to be a competitive swimmer — the wetsuit provides buoyancy and our instructors are always close. If you\'re unsure about your swimming ability, let us know when booking.',
      },
      {
        question: 'Are there jellyfish or dangerous sea creatures at La Pared?',
        answer: 'Jellyfish are occasionally present in the water. If we spot them, we\'ll let you know and may move to a different area. Serious marine hazards are rare at La Pared. We always brief you on any current conditions before entering the water.',
      },
    ],
  },
  {
    title: 'Age, Fitness & Transfers',
    items: [
      {
        question: 'What is the minimum age for surf lessons?',
        answer: 'We welcome surfers from age 8 for beginner lessons. Children under 12 are placed in very small groups (or private) to ensure personalised attention. Parents are always welcome to watch from the beach.',
      },
      {
        question: 'Is there a maximum age?',
        answer: 'Absolutely not. We have taught students in their 60s and 70s. If you\'re physically fit enough to spend time in the water and have no serious medical conditions, you are welcome.',
      },
      {
        question: 'Do you offer transfers from resorts?',
        answer: 'Yes. We offer pickup and drop-off from Costa Calma, Morro Jable, Jandia, and surrounding areas. Please provide your exact accommodation address when booking so we can arrange the transfer.',
      },
      {
        question: 'How do I get to La Pared if I\'m driving?',
        answer: 'From Costa Calma, take the FV-618 road west towards La Pared. The beach is well-signposted. Free parking is available on the road directly above the beach. The drive takes about 15 minutes from Costa Calma.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqSections.flatMap((section) =>
              section.items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              }))
            ),
          }),
        }}
      />

      {/* Header */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/faq/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "La Pared beach, Fuerteventura — Adrenalin Surf School"
      */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/faq/hero-mobile.webp" />
          <source srcSet="/images/faq/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/faq/hero-desktop.webp"
            alt="La Pared beach, Fuerteventura — Adrenalin Surf School"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(11,42,58,0.60) 0%, rgba(11,42,58,0.40) 50%, rgba(11,42,58,0.82) 100%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0B2A3A] -z-10" aria-hidden="true" />
        <div className="relative z-20 container-site pt-32 pb-14 text-white w-full">
          <span className="section-label text-[#E85F33]">FAQ</span>
          <div className="divider bg-[#E85F33]" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-white/60 max-w-xl">
            Everything you need to know before booking your surf lesson at La Pared.
            Don&apos;t see your question?{' '}
            <a href="https://wa.me/34XXXXXXXXX" className="text-[#E85F33] hover:underline">
              Ask us on WhatsApp
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">

            {/* Sidebar nav */}
            <nav className="hidden lg:block lg:sticky lg:top-28" aria-label="FAQ section navigation">
              <ul className="space-y-1">
                {faqSections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="block px-4 py-2 rounded-lg text-sm text-[#64748B] hover:text-[#E85F33] hover:bg-[#FFE6DC] transition-colors font-medium"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-[#0B2A3A] rounded-2xl text-white">
                <p className="text-sm font-semibold mb-2">Still have questions?</p>
                <p className="text-xs text-white/60 mb-4">We reply on WhatsApp within minutes.</p>
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center text-sm"
                >
                  Chat Now
                </a>
              </div>
            </nav>

            {/* FAQ content */}
            <div className="space-y-12">
              {faqSections.map((section, i) => (
                <div
                  key={i}
                  id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                >
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2 pb-3 border-b border-[#E5E7EB]">
                    {section.title}
                  </h2>
                  <FAQAccordion items={section.items} className="mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still Not Sure? Just Ask Us."
        subtext="Send a WhatsApp or use the contact form and we'll answer any question within the hour."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Book a Lesson"
        secondaryHref="/contact"
      />
    </>
  )
}
