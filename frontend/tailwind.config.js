/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      ubuntu:['Ubuntu', 'sans-serif'],
      ubuntuMono:['Ubuntu Mono', 'monospace'],
      robotoMono:['Roboto Mono', 'monospace']
    },
    letterSpacing: {
      '1': '.4125em',
    }
  },
  plugins: [],
}

