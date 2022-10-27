/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html" ],
  theme: {
    width:{
      "full":"100vw",
      "semi-full":"50%",
    },
    
    height: {
      "full":"97vh",
      "semi-full" : "50%"
    },

    gap: {
      "logo-sign":"68%"
    },
    
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
