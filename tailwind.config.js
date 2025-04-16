/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#26BEA6',
          50: '#E2F8F5',
          100: '#C5F1EB',
          200: '#8AE6D7',
          300: '#50DAC3',
          400: '#2ECFB1',
          500: '#26BEA6',
          600: '#1D9886',
          700: '#157267',
          800: '#0E4C47',
          900: '#072726',
          950: '#031514',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'blink': 'blink 1s infinite',
        'blob': 'blob 7s infinite',
        'orbit': 'orbit 15s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 1.5s steps(30, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(120px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(120px) rotate(-360deg)',
          },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
      },
    },
  },
  plugins: [],
} 