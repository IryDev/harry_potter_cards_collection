/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'play-now': "url('../assets/images/play-now-bg.webp')",
        'bg-nav-mobile': "url('../assets/images/mobile-nav-bg.webp')",
        'gold-btn-bg': "url('../assets/images/gold-btn-bg.webp')",
        'mobile-menu-bg': "url('../assets/images/mobile-menu-bg.webp')",
        'bg-secondary': "url('../assets/images/bg-bottom.webp')",
        'bg-auth': "url('../assets/images/bg-auth.webp')"
      },
      fontFamily: {
        BluuNext: ['BluuNext', 'sans-serif']
      }
    }
  },
  plugins: []
}
