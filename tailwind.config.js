/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'handlee': 'Handlee, cursive',
      'protest': 'Protest Riot, sans-serif',
    },
    extend: {
      
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },

      screens: {
        'phone': {'min': '320px', 'max': '767px'},
        'tablet': {'min': '768px', 'max': '1023px'},
        'desktop': {'min': '1024px', 'max': '1279px'},
        'desktop-lg': {'min': '1280px', 'max': '1440px'},
      },
    },
  },
  plugins: [],
}

