/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',   // Small devices
      md: '768px',  // Default medium devices
      lg: '1024px', // Large devices
      xsm:'360px',
      
    },
  },
  plugins: [],
}