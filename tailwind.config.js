/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#d9e0ee',
          200: '#b3c1dd',
          300: '#7d93c4',
          400: '#4865a8',
          500: '#2c4a8a',
          600: '#213a6f',
          700: '#1b2f58',
          800: '#152541',
          900: '#0f1a2e',
          950: '#0a1120',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        graphite: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d4d8de',
          300: '#aab2bd',
          400: '#7c8896',
          500: '#5b6877',
          600: '#475361',
          700: '#38424d',
          800: '#2a323b',
          900: '#1d242b',
          950: '#121719',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(15,26,46,0.92) 0%, rgba(15,26,46,0.75) 50%, rgba(15,26,46,0.55) 100%)',
      },
    },
  },
  plugins: [],
};
