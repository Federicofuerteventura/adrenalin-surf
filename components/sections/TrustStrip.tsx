import { ShieldCheck, Package, Users, MapPin } from 'lucide-react'

const items = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#E85F33]" aria-hidden="true" />,
    title: 'Certified Instructors',
    desc: 'Certified coaches with first aid and water rescue training. Safety briefing every session.',
  },
  {
    icon: <Package className="w-7 h-7 text-[#E85F33]" aria-hidden="true" />,
    title: 'All Equipment Included',
    desc: 'Board, wetsuit, leash — everything you need to get in the water.',
  },
  {
    icon: <Users className="w-7 h-7 text-[#E85F33]" aria-hidden="true" />,
    title: 'Safe for All Levels',
    desc: 'Small groups, honest teaching, and instructors in the water with you.',
  },
  {
    icon: <MapPin className="w-7 h-7 text-[#E85F33]" aria-hidden="true" />,
    title: 'Calle Valle Ancho 12',
    desc: 'La Pared, South Fuerteventura — consistent swell, uncrowded, warm Atlantic water.',
  },
]

export default function TrustStrip() {
  return (
    <section
      className="bg-[#0B2A3A] text-white py-10 md:py-12"
      aria-label="Why surf with us"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 lg:items-center lg:flex-col lg:text-center lg:gap-3"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center lg:mb-1">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base text-white mb-0.5">{item.title}</h3>
                <p className="text-sm text-white/55 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
