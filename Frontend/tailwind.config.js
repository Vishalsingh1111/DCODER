
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        pulseOpacity: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
      },
      animation: {
        pulseOpacity: 'pulseOpacity 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}