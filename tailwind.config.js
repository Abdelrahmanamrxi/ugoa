/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors:{
      primary:"#00ADAD",
      secondary:"#038096",
      dark:"#435E6F",
      silver:"#A6A6A6",
      light_silver:"#D9D9D9"

    },
    fontFamily:{
      raleway:["Raleway","sans-serif"]
    }
  },
  },
  plugins: [],
}

