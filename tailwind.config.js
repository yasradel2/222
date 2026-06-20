/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8e1',
          100: '#faefc3',
          200: '#f5dc87',
          300: '#efc94b',
          400: '#e8b82a',
          500: '#D4AF37',
          600: '#b8922a',
          700: '#9a7420',
          800: '#7d5c1a',
          900: '#664c15',
        },
        navy: {
          50: '#e8eaf0',
          100: '#c5cad8',
          200: '#9ea7be',
          300: '#7784a4',
          400: '#596890',
          500: '#3b4d7c',
          600: '#2d3d68',
          700: '#1e2d54',
          800: '#101e40',
          900: '#020817',
          950: '#01050f',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.7), 0 0 60px rgba(212, 175, 55, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #f5dc87 50%, #D4AF37 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #f5dc87 25%, #efc94b 50%, #f5dc87 75%, #D4AF37 100%)',
        'navy-gradient': 'linear-gradient(135deg, #020817 0%, #101e40 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(16,30,64,0.9) 0%, rgba(2,8,23,0.95) 100%)',
      },
    },
  },
  plugins: [],
};
