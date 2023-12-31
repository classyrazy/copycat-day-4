/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fadewhite': '#f7f7f7',
        'c_gray': '#86868b',
        'fadegray': '#f5f5f7',
        'main-blue': '#0171e2',
        'watch_orange': '#f56900',
        'blacktxt': '#1d1d1f',
        'grey-txt': '#666',
      }
    },
  },
  plugins: [],
}

