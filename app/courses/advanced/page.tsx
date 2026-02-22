import type { Metadata } from 'next'
import CourseDetail from '@/components/sections/CourseDetail'

export const metadata: Metadata = {
  title: 'Advanced Surf Training Fuerteventura | Performance Coaching at La Pared',
  description:
    'Serious about surfing? Our advanced training at La Pared, Fuerteventura pushes your performance with high-level coaching, video analysis, and powerful Atlantic swell.',
}

const course = {
  level: 'Advanced',
  badge: '⚡ Performance',
  title: 'Advanced Surf Training',
  subtitle: 'Cutbacks, floaters, off-the-lip — push your limits in real La Pared swell with expert 1-on-1 coaching.',
  description: `Advanced training at Adrenalin is for surfers who are already riding green waves with confidence and want to push their performance further. La Pared offers a powerful, consistent beach break with a range of sections — perfect for working on aggressive turns, aerial attempts, and barrel riding on good days. Sessions are tailored entirely to your goals. Whether you want to compete, travel, or simply surf at your peak on holiday — we build a personalised plan and push you in every session.`,
  heroImage: '/images/hero-surf.png',
  heroAlt: 'Advanced surf training at La Pared, Fuerteventura',
  price: '€85',
  duration: '2–4 hours',
  groupSize: 'Max 3 people',
  minAge: '14 years',
  includes: [
    'High-performance shortboard selection',
    'Full wetsuit & all equipment',
    'Personalised training plan',
    'Multi-angle video analysis',
    'In-water & dry-land coaching',
    'Ocean fitness & conditioning tips',
    'Competition preparation (on request)',
    'Wipeout safety training',
  ],
  youWillLearn: [
    'Powerful bottom turns and driving off the top',
    'Cutback technique and body rotation',
    'Floater, closeout re-entry, and lip hits',
    'Reading larger, more powerful Atlantic swells',
    'Barrel awareness and positioning for tubes',
    'Mental approach: confidence in heavy surf',
    'Competition strategy and heat tactics',
    'Advanced ocean safety and big wave awareness',
  ],
  faqs: [
    {
      question: 'What level is "advanced"?',
      answer: 'You should be surfing green, unbroken waves consistently and executing at least basic turns. If you can perform bottom turns and cutbacks but want them cleaner and more powerful, you\'re at the right level.',
    },
    {
      question: 'Can I bring my own board?',
      answer: 'Absolutely. If you have your own board and it\'s appropriate for the conditions on the day, you\'re welcome to use it. Our instructor can also advise on whether your board choice is limiting your progression.',
    },
    {
      question: 'Do you offer competition preparation?',
      answer: 'Yes. We work with competitive amateur surfers to prepare for local and national events. This includes heat tactics, wave selection under time pressure, and mental preparation techniques.',
    },
    {
      question: 'How long should I plan to stay?',
      answer: 'For meaningful advancement, we recommend a minimum of one week. 5–10 sessions over 7–10 days, combined with free surfing time, will produce a visible and lasting improvement in your surfing.',
    },
    {
      question: 'Can I film my own sessions?',
      answer: 'Yes. We strongly encourage it. Bring your own waterproof camera or GoPro. Our instructor can also use your device to capture specific waves or turns for your personal analysis.',
    },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Advanced Surf Training Fuerteventura',
    description: 'Performance surf coaching at La Pared, Fuerteventura. Personalised advanced training for experienced surfers.',
    provider: {
      '@type': 'Organization',
      name: 'Adrenalin Surf School',
      url: 'https://www.adrenalinsurfschool.com',
    },
    offers: {
      '@type': 'Offer',
      price: '85',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    courseMode: 'onsite',
    educationalLevel: 'Advanced',
  },
}

export default function AdvancedCoursePage() {
  return <CourseDetail course={course} />
}
