/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        novaGold: '#d8aa4f',
        novaGoldSoft: '#f4d48a',
        wealthGreen: '#67cf69',
        growthPurple: '#a776ff',
        voidBlack: '#020202',
      },
      boxShadow: {
        goldGlow: '0 0 35px rgba(216, 170, 79, 0.32)',
        greenGlow: '0 0 35px rgba(103, 207, 105, 0.32)',
        purpleGlow: '0 0 35px rgba(167, 118, 255, 0.32)',
      },
      keyframes: {
        starDrift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-120px, 90px, 0)' },
        },
        haloPulse: {
          '0%, 100%': { opacity: '0.36', transform: 'translateX(-50%) scale(1)' },
          '50%': { opacity: '0.82', transform: 'translateX(-50%) scale(1.05)' },
        },
        shimmer: {
          '0%': { opacity: '0.18', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.64', transform: 'translateY(-12px) scale(1.15)' },
          '100%': { opacity: '0.18', transform: 'translateY(0) scale(1)' },
        },
        orbitGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(244, 212, 138, 0.38))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(244, 212, 138, 0.75))' },
        },
      },
      animation: {
        starDrift: 'starDrift 75s linear infinite alternate',
        haloPulse: 'haloPulse 5s ease-in-out infinite',
        shimmer: 'shimmer 4.8s ease-in-out infinite',
        orbitGlow: 'orbitGlow 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
