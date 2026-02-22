import type { Metadata } from 'next'
import Hero          from '@/components/sections/Hero'
import TrustStrip    from '@/components/sections/TrustStrip'
import CourseCards   from '@/components/sections/CourseCards'
import WhyUs         from '@/components/sections/WhyUs'
import Reviews       from '@/components/sections/Reviews'
import GalleryPreview from '@/components/sections/GalleryPreview'
import FAQPreview    from '@/components/sections/FAQPreview'
import CTABanner     from '@/components/sections/CTABanner'
import Newsletter    from '@/components/sections/Newsletter'

export const metadata: Metadata = {
  title: 'Surf School Fuerteventura | Adrenalin Surf School La Pared',
  description:
    'Book surf lessons in La Pared, South Fuerteventura. Certified instructors, all equipment included, beginner to advanced. Transfers from Costa Calma & Morro Jable.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CourseCards />
      <WhyUs />
      <Reviews />
      <GalleryPreview />
      <FAQPreview />
      <CTABanner />
      <Newsletter />
    </>
  )
}
