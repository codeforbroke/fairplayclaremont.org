/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary greens
        'forest':      '#0F6E56',
        'forest-deep': '#085041',
        'forest-mid':  '#1D9E75',
        'forest-light':'#5DCAA5',
        'forest-pale': '#9FE1CB',
        'forest-ghost':'#E1F5EE',
        // Boys blue
        'boys-bg':     '#E6F1FB',
        'boys-text':   '#185FA5',
        // Girls pink
        'girls-bg':    '#FBEAF0',
        'girls-text':  '#D4537E',
        // Status
        'yes-text':    '#0F6E56',
        'no-text':     '#993C1D',
        'warn-text':   '#854F0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
