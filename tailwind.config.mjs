/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  //prefix: '',
  theme: {
    extend: {},
    fontFamily: {
      alexbrush: ['"AlexBrush"'],
      cinzel: ['"Cinzel"'],
      krub: ['"Krub"'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
