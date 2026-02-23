'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home',             href: '/' },
  { label: 'Surf Course',      href: '/courses' },
  { label: 'Sunset Training',  href: '/sunset-training' },
  { label: 'Surf Camps',       href: '/camps' },
  { label: 'Rentals',          href: '/rentals' },
  { label: 'About',            href: '/about' },
  { label: 'Contact',          href: '/contact' },
]

export default function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'border-b border-white/[0.10]',
          scrolled
            ? 'bg-[#0B2A3A] shadow-[0_2px_16px_0_rgba(0,0,0,0.25)] py-2'
            : 'bg-[#0B2A3A]/90 backdrop-blur-md py-3'
        )}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" aria-label="Adrenalin Surf School — home" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Adrenalin Surf School"
                width={140}
                height={44}
                className="h-9 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-md text-sm font-medium text-white/80',
                    'hover:text-[#E85F33] hover:bg-white/[0.07]',
                    'transition-colors duration-150',
                    'focus-visible:outline-orange-500'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+34XXXXXXXXX"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone size={15} />
                <span>+34 XXX XXX XXX</span>
              </a>
              <Link
                href="/contact"
                className="btn btn-primary btn-sm"
              >
                Book a Lesson
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/[0.07] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — outside <header> to avoid backdrop-filter stacking context issue */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 top-[57px] z-40 transition-all duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        {/* Panel */}
        <nav
          className={cn(
            'relative bg-[#0B2A3A] h-full w-80 max-w-[85vw] shadow-2xl',
            'flex flex-col p-6 gap-2 transition-transform duration-300',
            open ? 'translate-x-0' : '-translate-x-full'
          )}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center px-4 py-3 rounded-xl text-white font-medium',
                'hover:bg-white/10 hover:text-white',
                'transition-colors duration-150'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+34XXXXXXXXX"
              className="flex items-center gap-2 px-4 py-2 text-white/70 text-sm"
            >
              <Phone size={16} /> +34 XXX XXX XXX
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full text-center"
            >
              Book a Surf Lesson
            </Link>
            <a
              href="https://wa.me/34XXXXXXXXX?text=Hi!%20I%27d%20like%20to%20book%20a%20surf%20lesson"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm w-full text-center bg-[#25D366] hover:bg-[#1da851] text-white border-transparent flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.534 5.843L.057 23.486a.5.5 0 00.609.61l5.716-1.494A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.005-1.37l-.358-.213-3.712.97.993-3.626-.235-.373A9.818 9.818 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
