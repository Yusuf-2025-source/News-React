/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#080c10',
        cardDark: '#0d131a',
        accentNeon: '#00ff87',
        accentRed: '#ff2a5f',
        textMuted: '#94a3b8'
      }
    },
  },
  plugins: [],
}
