/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    width:{
      "full":"100vw",
      "semi-full":"50%",
    },
    
    height: {
      "full":"95vh",
      "semi-full" : "50%"
    },

    gap: {
      "logo-sign":"65%"
    },

    extend: {},
  },
  plugins: [],
}
