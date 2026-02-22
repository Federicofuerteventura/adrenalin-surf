import { ShieldCheck, Smile, Waves, Camera, MapPin, Heart } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
    title: 'Safety First',
    desc: 'Every session starts with a beach briefing. We check conditions daily and never push anyone past their comfort level.',
  },
  {
    icon: <MapPin className="w-7 h-7" aria-hidden="true" />,
    title: 'Local Knowledge',
    desc: "We know La Pared's tides, swells, and moods. That's what makes the difference between a lesson and actually learning.",
  },
  {
    icon: <Smile className="w-7 h-7" aria-hidden="true" />,
    title: 'Small Groups',
    desc: "We keep groups intentionally small. Your instructor is in the water with you — not watching from the beach.",
  },
  {
    icon: <Waves className="w-7 h-7" aria-hidden="true" />,
    title: 'The Right Spot',
    desc: 'La Pared delivers consistent Atlantic swell year-round. Warm water, open beach, fewer crowds than anywhere north.',
  },
  {
    icon: <Camera className="w-7 h-7" aria-hidden="true" />,
    title: 'More Than Lessons',
    desc: 'Week-long surf camps, sunset training sessions, and board rentals — we have options for every type of trip.',
  },
  {
    icon: <Heart className="w-7 h-7" aria-hidden="true" />,
    title: 'We Genuinely Care',
    desc: "We give honest feedback because that's what helps you improve. Your progress matters to us — not just your booking.",
  },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-us-heading">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <span className="section-label">Why Choose Us</span>
            <div className="divider" />
            <h2 id="why-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
              The Adrenalin Difference
            </h2>
            <p className="mt-4 text-[#64748B] text-base md:text-lg leading-relaxed">
              There are surf schools everywhere. But not many at La Pared, and none quite like us.
              Here&apos;s what makes surfing with Adrenalin worth it.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Book a Lesson
              </a>
            </div>
          </div>

          {/* Right: icon grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-[#E5E7EB] bg-[#F7F7F5] hover:border-[#E85F33]/30 hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFE6DC] text-[#E85F33] flex items-center justify-center mb-4 group-hover:bg-[#E85F33] group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
