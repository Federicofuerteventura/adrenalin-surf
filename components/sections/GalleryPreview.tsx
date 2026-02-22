import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// Placeholder gallery items — replace src with real images
const galleryItems = [
  { src: '/images/hero-surf.png', alt: 'Surfer riding a wave at La Pared, Fuerteventura', span: 'col-span-2 row-span-2' },
  { src: '/images/hero-surf.png', alt: 'Surf instructor coaching a beginner student', span: '' },
  { src: '/images/hero-surf.png', alt: 'Group surf lesson at sunset on the beach', span: '' },
  { src: '/images/hero-surf.png', alt: 'Aerial view of La Pared beach waves', span: '' },
  { src: '/images/hero-surf.png', alt: 'Student successfully standing up on surfboard for the first time', span: '' },
]

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="gallery-preview-heading">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="section-label">Gallery</span>
            <div className="divider" />
            <h2 id="gallery-preview-heading" className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              Life at La Pared
            </h2>
          </div>
          <Link href="/gallery" className="btn btn-outline btn-sm flex-shrink-0 group">
            View Full Gallery
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[400px] md:h-[480px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-[#F7F7F5] ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-2xl" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="text-center mt-6 sm:hidden">
          <Link href="/gallery" className="btn btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
