/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primary:"#f2f2f2",
      black:"#000000",
      yellow:"#ffc82f",
      white:"#ffffff",
      
    },
    fontFamily:{
      "source-sans-pro": ["'Source Sans Pro'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

