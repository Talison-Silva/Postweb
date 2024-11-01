/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {        
        arriving: {
          '0%': { transform: 'translateX(-100vw)', opacity:'0.1' },
          '100%': { transform: 'translateX(0vw)' },
        },
        going: {
          '0%': { transform: 'translateX(0vw)' },
          '100%': { transform: 'translateX(100vw)', opacity:'1' },
        }
      },
      animation:{
        'going': 'going 1.5s',
        'arriving': 'arriving 1.5s',
      }
    },
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

