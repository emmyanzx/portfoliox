/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      colors: {
        // Signature palette: deep charcoal + electric orange + off-white
        bg:        '#0e0e0e',
        surface:   '#171717',
        border:    '#2a2a2a',
        orange:    '#FF6B35',
        'orange-dim': 'rgba(255,107,53,0.12)',
        cream:     '#F5F0E8',
        muted:     '#6b6b6b',
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease both',
        'fade-in':  'fadeIn 0.5s ease both',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'none' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}