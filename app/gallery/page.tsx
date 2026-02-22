'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'La Pared', 'Groups']

const photos = [
  { src: '/images/hero-surf.png', alt: 'Surfer catching a wave at La Pared beach Fuerteventura', category: 'La Pared', size: 'large' },
  { src: '/images/hero-surf.png', alt: 'Beginner surfer standing up for the first time on a soft board', category: 'Beginner', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Instructor coaching a student during a surf lesson at La Pared', category: 'Beginner', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Group of surfers carrying boards down to La Pared beach', category: 'Groups', size: 'wide' },
  { src: '/images/hero-surf.png', alt: 'Intermediate surfer performing a cutback turn on a wave', category: 'Intermediate', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Advanced surfer riding a powerful wave section at La Pared', category: 'Advanced', size: 'large' },
  { src: '/images/hero-surf.png', alt: 'Sunset at La Pared beach with silhouetted surfers', category: 'La Pared', size: 'wide' },
  { src: '/images/hero-surf.png', alt: 'Beach briefing before a group surf lesson', category: 'Groups', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Surf instructor giving high five to a student after catching a wave', category: 'Beginner', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Fuerteventura coastline viewed from the water while surfing', category: 'La Pared', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Intermediate student practising wave selection drills', category: 'Intermediate', size: 'small' },
  { src: '/images/hero-surf.png', alt: 'Advanced surfer aerial manoeuvre at La Pared', category: 'Advanced', size: 'small' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = photos.filter((p) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  )

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = () => setLightboxIndex((i) => (i === null || i === 0 ? filtered.length - 1 : i - 1))
  const nextPhoto = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length))

  return (
    <>
      {/* Page header */}
      {/*
        IMAGE FILES NEEDED (place in /public/images/gallery/):
          hero-desktop.webp  →  1920 × 1080 px (16:9)
          hero-mobile.webp   →  1080 × 1350 px (4:5)
        Alt: "Life at La Pared — Adrenalin Surf School Fuerteventura"
      */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet="/images/gallery/hero-mobile.webp" />
          <source srcSet="/images/gallery/hero-desktop.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/hero-desktop.webp"
            alt="Life at La Pared — Adrenalin Surf School Fuerteventura"
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
          <span className="section-label text-[#E85F33]">Gallery</span>
          <div className="divider bg-[#E85F33]" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Life at La Pared</h1>
          <p className="mt-3 text-white/60 max-w-lg">
            Moments from lessons, sessions, sunsets, and smiles at our favourite beach in Fuerteventura.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section-padding bg-[#F7F7F5]">
        <div className="container-site">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter gallery by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#E85F33] text-white shadow-orange'
                    : 'bg-white text-[#64748B] border border-[#E5E7EB] hover:border-[#E85F33] hover:text-[#E85F33]'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((photo, i) => (
              <button
                key={i}
                className="relative w-full overflow-hidden rounded-2xl bg-[#E5E7EB] group block cursor-zoom-in"
                onClick={() => openLightbox(i)}
                aria-label={`View photo: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={photo.size === 'large' ? 500 : photo.size === 'wide' ? 280 : 320}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center rounded-2xl">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/40 rounded-full transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white bg-black/40 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); prevPhoto() }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white bg-black/40 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); nextPhoto() }}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={900}
              height={700}
              className="rounded-2xl object-contain max-h-[85vh] w-auto"
              priority
            />
            <p className="text-center text-white/60 text-sm mt-3">
              {filtered[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
