import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        'primary-purple': '#8B5CF6',
        'accent-green': '#22C55E',
        'highlight-pink': '#EC4899',
        'neutral-dark': '#1F2937',
        'neutral-medium': '#4B5563',
        'neutral-light': '#F9FAFB',
        'neutral-gray': '#D1D5DB',
        'error-red': '#EF4444',
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s infinite alternate',
        'confetti': 'confetti 1.5s ease-in-out',
        'bounce-in': 'bounce-in 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(.68,-0.55,.27,1.55)',
        'gradient-move': 'gradient-move 12s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -16px, 0)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 8px 2px #EC4899' },
          '50%': { boxShadow: '0 0 24px 8px #8B5CF6' },
        },
        'confetti': {
          '0%': { opacity: '0', transform: 'translate3d(0, -20px, 0) scale(0.8)' },
          '50%': { opacity: '1', transform: 'translate3d(0, 0, 0) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translate3d(0, 20px, 0) scale(0.8)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 40px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config 