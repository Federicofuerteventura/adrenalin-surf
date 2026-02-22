import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const services = [
  { label: 'Surf Course',      href: '/courses' },
  { label: 'Sunset Training',  href: '/sunset-training' },
  { label: 'Surf Camps',       href: '/camps' },
  { label: 'Board Rentals',    href: '/rentals' },
]

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About Us',   href: '/about' },
  { label: 'Gallery',    href: '/gallery' },
  { label: 'Blog',       href: '/blog' },
  { label: 'FAQ',        href: '/faq' },
  { label: 'Contact',    href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B2A3A] text-white" role="contentinfo">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Adrenalin Surf School — home">
              <Image
                src="/images/logo.png"
                alt="Adrenalin Surf School"
                width={140}
                height={44}
                className="h-10 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              The surf school at La Pared, South Fuerteventura. Certified instructors,
              all levels welcome. We live for the ocean — and we&apos;ll help you love it too.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/adrenalinsurfschool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E85F33] flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/adrenalinsurfschool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E85F33] flex items-center justify-center transition-colors duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@adrenalinsurfschool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch us on YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E85F33] flex items-center justify-center transition-colors duration-200"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-[#E85F33] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-[#E85F33] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / NAP */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Find Us
            </h3>
            {/* NAP for local SEO */}
            <address className="not-italic space-y-4">
              <div className="flex gap-3 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#E85F33]" />
                <span>
                  Calle Valle Ancho 12<br />
                  La Pared, 35628<br />
                  Fuerteventura, Spain
                </span>
              </div>
              <a
                href="tel:+34XXXXXXXXX"
                className="flex gap-3 text-sm text-white/70 hover:text-[#E85F33] transition-colors"
              >
                <Phone size={16} className="flex-shrink-0 text-[#E85F33]" />
                +34 XXX XXX XXX
              </a>
              <a
                href="mailto:info@adrenalinsurfschool.com"
                className="flex gap-3 text-sm text-white/70 hover:text-[#E85F33] transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 text-[#E85F33]" />
                info@adrenalinsurfschool.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Adrenalin Surf School. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
