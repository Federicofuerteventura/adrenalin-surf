import Link from 'next/link'
import Image from 'next/image'
import { Check, Clock, Users, MapPin, AlertTriangle, ArrowRight } from 'lucide-react'
import FAQAccordion from '@/components/ui/FAQAccordion'

export interface CourseDetailData {
  level: string
  badge: string
  title: string
  subtitle: string
  description: string
  heroImage: string
  heroAlt: string
  price: string
  duration: string
  groupSize: string
  minAge: string
  includes: string[]
  youWillLearn: string[]
  faqs: { question: string; answer: string }[]
  schema: Record<string, unknown>
}

export default function CourseDetail({ course }: { course: CourseDetailData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B2A3A] pt-28 pb-0 overflow-hidden">
        <div className="container-site pb-12 md:pb-16 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/courses" className="text-sm text-white/50 hover:text-white transition-colors">Courses</Link>
              <span className="text-white/30">/</span>
              <span className="text-sm text-white/80">{course.level}</span>
            </div>
            <span className="badge badge-orange mb-4">{course.badge}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              {course.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#E85F33]" /> {course.duration}</span>
              <span className="flex items-center gap-1.5"><Users size={15} className="text-[#E85F33]" /> {course.groupSize}</span>
              <span className="flex items-center gap-1.5"><MapPin size={15} className="text-[#E85F33]" /> La Pared, Fuerteventura</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Book This Course
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/34XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Hero image strip */}
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={course.heroImage}
            alt={course.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3A] via-transparent to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">

            {/* Left: main content */}
            <div className="space-y-12">

              {/* Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-4">About This Course</h2>
                <p className="text-[#64748B] leading-relaxed text-base md:text-lg">{course.description}</p>
              </div>

              {/* What you'll learn */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-6">What You&apos;ll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.youWillLearn.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card">
                      <div className="w-6 h-6 rounded-full bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <span className="text-sm text-[#0F172A] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup info */}
              <div className="bg-[#0B2A3A]/5 border border-[#0B2A3A]/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#E85F33] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0F172A] mb-2">Getting Here & Transfers</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Our school is located at La Pared beach in the south of Fuerteventura.
                      We offer transfers from <strong>Costa Calma</strong>, <strong>Morro Jable</strong>,
                      <strong> Jandia</strong>, and surrounding resorts. Simply add your pickup location
                      when booking and we&apos;ll handle the rest.
                    </p>
                    <p className="text-sm text-[#64748B] mt-2">
                      Driving yourself? Free parking is available directly at the beach.
                      <a href="/contact" className="text-[#E85F33] hover:underline ml-1">Get directions →</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0F172A] mb-2">Ocean Conditions & Schedule</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      The Atlantic ocean is beautiful but unpredictable. We monitor tides, swell height, and
                      wind conditions every morning. If conditions are not suitable for your lesson,
                      we will contact you to reschedule — at no extra cost. Safety always comes first.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-6">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion items={course.faqs} />
              </div>
            </div>

            {/* Right: booking sidebar */}
            <div className="lg:sticky lg:top-28">
              <div className="card p-6 md:p-8">
                <div className="mb-6">
                  <div className="text-3xl font-extrabold text-[#0F172A]">{course.price}</div>
                  <div className="text-sm text-[#64748B]">per person · {course.duration}</div>
                </div>

                <h3 className="font-bold text-[#0F172A] mb-4">What&apos;s Included</h3>
                <ul className="space-y-2.5 mb-6">
                  {course.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#0F172A]">
                      <Check size={15} className="text-[#E85F33] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#F7F7F5] rounded-xl p-3 text-xs text-[#64748B] mb-6">
                  <span className="font-semibold text-[#0F172A]">Min. age:</span> {course.minAge} ·{' '}
                  <span className="font-semibold text-[#0F172A]">Group:</span> {course.groupSize}
                </div>

                <Link href="/contact" className="btn btn-primary w-full justify-center btn-lg mb-3">
                  Book This Course
                </Link>
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy w-full justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.534 5.843L.057 23.486a.5.5 0 00.609.61l5.716-1.494A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                  Ask on WhatsApp
                </a>

                <p className="mt-4 text-xs text-center text-[#64748B]">
                  Free cancellation up to 24h before the lesson
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for this course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course.schema) }}
      />
    </>
  )
}
