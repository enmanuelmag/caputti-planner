/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  //prefix: '',
  theme: {
    extend: {
      colors: {
        caputi: '#00bdc5',
      },
    },
    fontFamily: {
      alexbrush: ['"AlexBrush"'],
      cinzel: ['"Cinzel"'],
      krub: ['"Krub"'],
      sansserif: ['sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
