import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A2540',
          700: '#1B3A5C',
          500: '#2563EB',
        },
        accent: {
          100: '#FFEDD5',
          500: '#F97316',
          600: '#EA580C',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
          dark: '#0A2540',
        },
        ink: {
          DEFAULT: '#1E293B',
          muted: '#64748B',
        },
        success: '#16A34A',
        warning: '#F59E0B',
      },
      fontFamily: {
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(10, 37, 64, 0.08)',
        lift: '0 10px 40px -10px rgba(10, 37, 64, 0.15)',
        cta: '0 8px 24px -6px rgba(249, 115, 22, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
