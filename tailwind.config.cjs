/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
      },

      colors: {
        mainBG: "rgb(7,7,36)",
        grey: "rgb(198,198,198)",
        softWhite: "rgb(255,250,240)",
        earth: "rgb(84,91,254)",
        mercury: "rgb(222,224,252)",
        venus: "rgb(246,204,126)",
        mars: "rgb(255,106,69)",
        jupiter: "rgb(236,173,122)",
        saturn: "rgb(253,203,206)",
        uranus: "rgb(101,241,212)",
        neptune: "rgb(72,126,251)",
      },

      keyframes: {
        fadeIn: {
          'from': { transform: 'translateX(-200px); opacity: 0.2' },
          'to': { transform: 'translateX(0)' },
        },
        opacity: {
          'from': { opacity: '0.2' }
        },
        text: {
          'from': { transform: 'translateX(200px); opacity: 0.2' },
          'to': { transform: 'translateX(0)' },
        },
        bottomToTop: {
          'from': { transform: 'translateY(200px); opacity: 0.2' },
          'to': { transform: 'translateX(0)' },
        }
      },
      animation: {
        fadeInPlanetImage: 'fadeIn 1s ease-in-out',
        bottomToTop: 'bottomToTop 1s ease-in-out',
        text: 'text 1s ease-in-out',
        fadeInOpacity: 'opacity 1s ease-in',
      }
    },
  },
  plugins: [],
}
