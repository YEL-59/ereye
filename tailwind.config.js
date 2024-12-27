/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      // container: {
       
      //   maxWidth: "1640px",
      // },

      btncolor:{
        yelow:"#FFAD00"
      },
      colors: {
        textcolor: '#333', 
        secoundary:"#05164D",
      },
    },
  },
  plugins: [],
}

