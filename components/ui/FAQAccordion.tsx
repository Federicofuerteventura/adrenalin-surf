'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('divide-y divide-[var(--border)]', className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={cn(
              'w-full flex items-center justify-between gap-4 py-5 text-left',
              'text-[var(--text)] font-semibold text-base md:text-lg',
              'hover:text-[#E85F33] transition-colors duration-150',
              'focus-visible:outline-none focus-visible:text-[#E85F33]'
            )}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span>{item.question}</span>
            <ChevronDown
              size={20}
              className={cn(
                'flex-shrink-0 text-[#E85F33] transition-transform duration-300',
                openIndex === i ? 'rotate-180' : ''
              )}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <p className="pb-5 text-[var(--muted)] leading-relaxed text-sm md:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
