'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Check, Send } from 'lucide-react'

// Note: export metadata doesn't work in client components.
// Move to a server component wrapper if needed — for now it's fine.

interface FormData {
  name: string
  email: string
  phone: string
  course: string
  date: string
  people: string
  message: string
}

const INITIAL: FormData = {
  name: '', email: '', phone: '', course: '', date: '', people: '1', message: '',
}

const courseOptions = [
  'Surf Course',
  'Sunset Training',
  'Surf Camp (1 week)',
  'Board Rental',
  'Not sure — help me choose',
]

export default function ContactPage() {
  const [form, setForm]         = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [errors, setErrors]     = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim())  e.name  = 'Please enter your name'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email'
    if (!form.course) e.course = 'Please select a course'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // TODO: replace with real form submission (Formspree / Netlify Forms / API route)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <>
      {/* Header */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/contact/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Adrenalin Surf School, La Pared, Fuerteventura"
      */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/contact/hero-mobile.webp" />
          <source srcSet="/images/contact/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/contact/hero-desktop.webp"
            alt="Adrenalin Surf School, La Pared, Fuerteventura"
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
          <span className="section-label text-[#E85F33]">Contact</span>
          <div className="divider bg-[#E85F33]" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Let&apos;s Talk
          </h1>
          <p className="mt-3 text-white/60 max-w-xl">
            Questions about the course, camps, or rentals? Not sure which option fits you?
            Send us a message — we&apos;re a small team and we actually respond. WhatsApp is the fastest.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

            {/* Form */}
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card">
              {submitted ? (
                <div className="text-center py-12 animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Booking Request Received!</h2>
                  <p className="text-[#64748B] max-w-sm mx-auto">
                    Thanks, {form.name.split(' ')[0]}! We&apos;ll confirm your lesson within a few hours.
                    Check your email at <strong>{form.email}</strong>.
                  </p>
                  <a
                    href="https://wa.me/34XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 btn btn-primary inline-flex items-center gap-2"
                  >
                    Also confirm on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2">Booking Request</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name" type="text" value={form.name} onChange={update('name')}
                        placeholder="Jane Smith" autoComplete="name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#E85F33] ${errors.name ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB] bg-[#F7F7F5]'}`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email" type="email" value={form.email} onChange={update('email')}
                        placeholder="jane@example.com" autoComplete="email"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#E85F33] ${errors.email ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB] bg-[#F7F7F5]'}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone" type="tel" value={form.phone} onChange={update('phone')}
                        placeholder="+44 7000 000000" autoComplete="tel"
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] text-sm focus:outline-none focus:border-[#E85F33] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="people" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                        Number of People
                      </label>
                      <select
                        id="people" value={form.people} onChange={update('people')}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] text-sm focus:outline-none focus:border-[#E85F33] transition-colors"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
                        ))}
                        <option value="10+">10+ (contact us)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                      Which Course? *
                    </label>
                    <select
                      id="course" value={form.course} onChange={update('course')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#E85F33] ${errors.course ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB] bg-[#F7F7F5]'}`}
                    >
                      <option value="">Select a course…</option>
                      {courseOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course}</p>}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      id="date" type="date" value={form.date} onChange={update('date')}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] text-sm focus:outline-none focus:border-[#E85F33] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-1.5">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message" rows={4} value={form.message} onChange={update('message')}
                      placeholder="E.g. we need transfers from Costa Calma, one person has a back injury, etc."
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] text-sm focus:outline-none focus:border-[#E85F33] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-lg w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={17} aria-hidden="true" />
                        Send Booking Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-[#64748B]">
                    We&apos;ll reply within 2–4 hours. Free cancellation up to 24h before the lesson.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar: contact info + map */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-[#0B2A3A] text-white rounded-3xl p-6 md:p-8">
                <h3 className="font-bold text-lg mb-5">Contact Details</h3>
                <address className="not-italic space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={17} className="text-[#E85F33] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Calle Valle Ancho 12<br />La Pared, 35628<br />Fuerteventura, Spain</span>
                  </div>
                  <a href="tel:+34XXXXXXXXX" className="flex gap-3 text-white/70 hover:text-[#E85F33] transition-colors">
                    <Phone size={17} className="text-[#E85F33] flex-shrink-0" />
                    +34 XXX XXX XXX
                  </a>
                  <a href="mailto:info@adrenalinsurfschool.com" className="flex gap-3 text-white/70 hover:text-[#E85F33] transition-colors">
                    <Mail size={17} className="text-[#E85F33] flex-shrink-0" />
                    info@adrenalinsurfschool.com
                  </a>
                </address>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-sm font-semibold mb-3">Fastest response:</p>
                  <a
                    href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20book%20a%20surf%20lesson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white border-transparent"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.534 5.843L.057 23.486a.5.5 0 00.609.61l5.716-1.494A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-card h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.123456789!2d-14.2200!3d28.1200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzEyLjAiTiAxNMKwMTMnMTIuMCJX!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adrenalin Surf School map — La Pared, Fuerteventura"
                />
              </div>

              {/* Opening hours */}
              <div className="bg-white rounded-3xl p-6 shadow-card">
                <h3 className="font-bold text-[#0F172A] mb-4">Opening Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '08:00 – 18:00' },
                    { day: 'Saturday',        hours: '07:30 – 17:00' },
                    { day: 'Sunday',          hours: '08:00 – 15:00' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-[#64748B]">
                      <span className="font-medium text-[#0F172A]">{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#64748B]">
                  * Subject to ocean conditions. We may start earlier on good swells.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
