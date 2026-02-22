import type { Metadata } from 'next'
import CourseDetail from '@/components/sections/CourseDetail'

export const metadata: Metadata = {
  title: 'Beginner Surf Lesson Fuerteventura | Learn to Surf at La Pared',
  description:
    'First time surfing? Our beginner surf lesson at La Pared, Fuerteventura is perfect for you. Certified instructors, board & wetsuit included. Stand up on your first session.',
}

const course = {
  level: 'Beginner',
  badge: '🏄 Most Popular',
  title: 'Beginner Surf Lesson',
  subtitle: 'Stand up, feel the wave, and fall in love with surfing — on your very first session.',
  description: `Our beginner surf lesson is designed for people who have never surfed before — or who have tried once or twice and want a proper foundation. You'll spend time on the beach learning the theory: how waves work, how to read the ocean, how to position yourself on the board, and the key safety rules. Then we get in the water together and our instructor will be right there with you every step of the way. Most beginners stand up within the first session. The feeling is indescribable.`,
  heroImage: '/images/hero-surf.png',
  heroAlt: 'Beginner surf lesson at La Pared beach Fuerteventura',
  price: '€45',
  duration: '2 hours',
  groupSize: 'Max 6 people',
  minAge: '8 years',
  includes: [
    'Softboard (ideal for learning)',
    'Full wetsuit',
    'Leash & wax',
    'Rash guard if needed',
    'Beach theory session',
    'In-water coaching',
    'Post-session tips & debrief',
  ],
  youWillLearn: [
    'How to read waves and choose the right moment',
    'Correct paddling technique to catch waves',
    'The pop-up: from lying flat to standing in one movement',
    'Foot position and balance on the board',
    'How to fall safely to protect yourself',
    'Basic ocean and surf etiquette',
    'How to navigate the lineup safely',
    'What to do after a wipeout',
  ],
  faqs: [
    {
      question: 'Do I need to be able to swim?',
      answer: 'You should be comfortable in water, but you don\'t need to be a strong swimmer. The beach at La Pared where we teach beginners has relatively gentle white water and the wetsuit provides buoyancy. Our instructors are always close by.',
    },
    {
      question: 'What should I wear and bring?',
      answer: 'Wear a swimsuit or board shorts. We provide the wetsuit on top. Bring sunscreen, a towel, and flip-flops. Leave valuables in your car or accommodation — there are no lockers at the beach.',
    },
    {
      question: 'Will I actually stand up?',
      answer: 'Almost all of our students stand up during the first lesson! Our teaching method is structured and progressive. The softboards we use are very stable, making your first pop-up much more achievable.',
    },
    {
      question: 'Can I book a private lesson instead?',
      answer: 'Yes! A private 1-on-1 beginner lesson is available from €90. It\'s the fastest way to learn as you get the instructor\'s full attention. Just mention it when you contact us.',
    },
    {
      question: 'Can children join this lesson?',
      answer: 'Yes, from age 8. Children learn incredibly fast and absolutely love it. Parents are welcome to watch from the beach. If you have a younger child, contact us first and we\'ll advise.',
    },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Beginner Surf Lesson Fuerteventura',
    description: 'Learn to surf from scratch at La Pared beach, Fuerteventura. Certified instructor, board and wetsuit included.',
    provider: {
      '@type': 'Organization',
      name: 'Adrenalin Surf School',
      url: 'https://www.adrenalinsurfschool.com',
    },
    offers: {
      '@type': 'Offer',
      price: '45',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    courseMode: 'onsite',
    educationalLevel: 'Beginner',
    locationCreated: {
      '@type': 'Place',
      name: 'La Pared Beach',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Pared',
        addressRegion: 'Fuerteventura',
        addressCountry: 'ES',
      },
    },
  },
}

export default function BeginnerCoursePage() {
  return <CourseDetail course={course} />
}
