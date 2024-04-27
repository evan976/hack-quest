import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(var(--background) / <alpha-value>)',
        'card': 'rgb(var(--card) / <alpha-value>)',
        'border': 'rgb(var(--border) / <alpha-value>)',
        'divider': 'rgb(var(--divider) / <alpha-value>)',
        'tag': 'rgb(var(--tag) / <alpha-value>)',
        'green-yellow': 'rgb(var(--green-yellow) / <alpha-value>)',
        'text-100': 'rgb(var(--text-100) / <alpha-value>)',
        'text-200': 'rgb(var(--text-200) / <alpha-value>)',
        'text-300': 'rgb(var(--text-300) / <alpha-value>)',
        'text-400': 'rgb(var(--text-400) / <alpha-value>)',
        'text-500': 'rgb(var(--text-500) / <alpha-value>)',
      },
      fontFamily: {
        'next-book': ['var(--font-next-book)'],
        'next-poster': ['var(--font-next-poster)'],
        'neue-machina': ['var(--font-neue-machina)'],
      }
    },
  },
  plugins: [],
} satisfies Config
