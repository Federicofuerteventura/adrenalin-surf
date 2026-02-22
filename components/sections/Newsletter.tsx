'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // TODO: connect to Mailchimp / ConvertKit / Brevo
    await new Promise((r) => setTimeout(r, 900))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="bg-[#0B2A3A] py-16 md:py-20" aria-labelledby="newsletter-heading">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E85F33]/20 text-[#E85F33] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            Free Surf Tips
          </div>
          <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Get Weekly Surf Conditions & Tips
          </h2>
          <p className="text-white/60 mb-8 text-base md:text-lg">
            Join 600+ surfers getting La Pared conditions updates, beginner tips,
            and early access to seasonal offers. No spam, unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-300 rounded-2xl px-8 py-4 text-base font-medium animate-fade-up">
              <Check size={20} className="text-green-400" />
              You&apos;re in! Check your inbox for a welcome email.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E85F33] focus:bg-white/15 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex items-center gap-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <Send size={16} aria-hidden="true" />
                )}
                {loading ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}
          <p className="mt-3 text-xs text-white/30">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
