/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    animation: {
      'spin': 'spinIcons 10s linear infinite',
      'spinCircle': 'spinCircle 10s linear infinite',
      'spinAntiClock': 'spinAntiClock 5s linear infinite'
    },
    keyframes: {

      spinIcons: {
        '0%': { rotate: '0deg' },
        '100%': { rotate: '-360deg' },
      },
      spinCircle: {
        '0%': { rotate: '0deg' },
        '100%': { rotate: '360deg' },
      },
      spinAntiClock:{
        '0%': { rotate: '0deg' },
        '100%': { rotate: '-360deg' },
      }
      
    },
    extend: {},
  },
  plugins: [],
}
