/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors:{
      primary:"#00ADAD",
      secondary:"#038096",
      dark_green: "#0D5C63",
      dark:"#435E6F",
      silver:"#A6A6A6",
      light_silver:"#D9D9D9",
      offwhite:"#FFFFFF",
      dark_navy:"#252B42",
      darkWhite: '#F8FAFC',
      notBlack:"#19352D",
    },
    backgroundImage:{
      "gradient-primary":"linear-gradient(to bottom,#0D5C63 20%,#000000 90%)"
    },
    fontFamily:{
      raleway:["Raleway","sans-serif"]
    }
  },
  },
  plugins: [],
}

