import type { Metadata } from 'next'
import CourseDetail from '@/components/sections/CourseDetail'

export const metadata: Metadata = {
  title: 'Intermediate Surf Course Fuerteventura | Improve Your Technique',
  description:
    'Already surfing white water? Our intermediate course at La Pared, Fuerteventura will level up your technique with video analysis, turn coaching, and wave reading.',
}

const course = {
  level: 'Intermediate',
  badge: '📈 Level Up',
  title: 'Intermediate Surf Course',
  subtitle: 'You can get to your feet — now learn to actually surf. Turns, positioning, and reading real waves.',
  description: `The intermediate course is for surfers who can stand up on white water but want to progress to green, unbroken waves and develop real technique. Many people reach this stage and plateau without proper coaching. Our intermediate sessions focus on what matters most at this level: paddle efficiency, positioning in the lineup, reading and timing waves, and your first real turns. We use video analysis to show you exactly what you\'re doing right — and what to fix. In three hours, you\'ll feel a noticeable difference.`,
  heroImage: '/images/hero-surf.png',
  heroAlt: 'Intermediate surf coaching at La Pared beach Fuerteventura',
  price: '€65',
  duration: '3 hours',
  groupSize: 'Max 4 people',
  minAge: '10 years',
  includes: [
    'Mid-length performance board',
    'Full wetsuit & leash',
    'Pre-session strategy talk',
    'Video recording & analysis',
    'In-water coaching throughout',
    'Turn & technique drills',
    'Written progress notes to take home',
  ],
  youWillLearn: [
    'How to paddle efficiently and avoid fatigue',
    'Reading unbroken waves and choosing which to take',
    'Correct positioning in the lineup',
    'The bottom turn: foundation of all real surfing',
    'Your first top turn or cutback',
    'How to use your arms and upper body for balance',
    'Surf etiquette and priority rules',
    'Ocean awareness: rips, currents, and hazards',
  ],
  faqs: [
    {
      question: 'How do I know if I\'m intermediate level?',
      answer: 'If you can stand up on white water (broken waves) consistently but struggle on green (unbroken) waves, you\'re in the right place. If you\'re completely new to surfing, our beginner lesson is the right starting point.',
    },
    {
      question: 'What kind of board will I use?',
      answer: 'We\'ll select a board appropriate for your height, weight, and skill level. Typically a mid-length (7\'0–8\'0) or a fun shape that gives you stability while still being responsive enough to feel turns.',
    },
    {
      question: 'Is the video analysis really useful?',
      answer: 'Hugely. Most people have no idea what they look like in the water. Seeing yourself surf — even just a few clips on a phone — immediately shows you the specific things to fix. It\'s one of the fastest ways to improve.',
    },
    {
      question: 'How many intermediate lessons should I book?',
      answer: 'Even one session will give you a big breakthrough. But for serious progression, we recommend 3–5 sessions over a week or so. We\'ll track your progress and customise each session.',
    },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Intermediate Surf Course Fuerteventura',
    description: 'Improve your surfing technique at La Pared, Fuerteventura. Video analysis, wave reading, and turn coaching for intermediate surfers.',
    provider: {
      '@type': 'Organization',
      name: 'Adrenalin Surf School',
      url: 'https://www.adrenalinsurfschool.com',
    },
    offers: {
      '@type': 'Offer',
      price: '65',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    courseMode: 'onsite',
    educationalLevel: 'Intermediate',
  },
}

export default function IntermediateCoursePage() {
  return <CourseDetail course={course} />
}
