import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#E85F33',
          hover:   '#CF5229',
          tint:    '#FFE6DC',
          50:      '#FFF4F0',
          100:     '#FFE6DC',
          500:     '#E85F33',
          600:     '#CF5229',
          700:     '#A8401F',
        },
        navy: {
          DEFAULT: '#0B2A3A',
          light:   '#0F3347',
          50:      '#EFF6FA',
          100:     '#D0E8F2',
          700:     '#0B2A3A',
          800:     '#081E2A',
          900:     '#040F14',
        },
        brand: {
          bg:     '#F7F7F5',
          text:   '#0F172A',
          muted:  '#64748B',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem',    { lineHeight: '1.1',    letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05',   letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem',  { lineHeight: '1',      letterSpacing: '-0.035em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card':  '0 2px 12px 0 rgba(11,42,58,0.08)',
        'card-hover': '0 8px 30px 0 rgba(11,42,58,0.14)',
        'orange': '0 4px 20px 0 rgba(232,95,51,0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
