/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sulphur': ['sulphur point', 'sans-serif'],
        'Wire-One': ['Wire One', 'sans-serif'],
        'Slackey': ['Slackey', 'sans-serif'],
        'inter-tight': ['Inter Tight', 'sans-serif'],
        'Big-Shoulders-Display': ['Big Shoulders Display', 'sans-serif'],
        'coda': ['coda', 'sans-serif']
      },
      keyframes: {
        scrolling: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scrolling: 'scrolling 30s linear infinite',
      },
      colors: {
        lightgreen : '#AACCA1 ',
        lightviolet : '#11001C',
      }
    },
  },
  plugins: [],
}

// {} {}
// '0%': {
//   transform: 'translateX(0)'
// },
// '25%':{
//   transform: 'translateX(-25%)'
// },
// '75%':{
//   transform: 'translateX(-75%)'
// },
// '100%' :{
//   transform: 'translateX(-100%)'
// },