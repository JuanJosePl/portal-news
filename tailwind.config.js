/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1e1e2e',
        'dark-secondary': '#2a2a3c',
        'dark-accent': '#3a3a4c',
        'highlight': '#ff6b6b',
        'text-primary': '#f0f0f0',
        'text-secondary': '#b0b0b0',
      },
      fontFamily: {
        'sans': ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        'headline': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}