/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#3E7CB1',
          dark: '#1A2B3C',
        },
        'text': {
          DEFAULT: '#333333',
          secondary: '#666666',
        },
        'background': {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FA',
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.35' }],
        'h5': ['1.25rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      spacing: {
        'base': '8px',
        'content': '24px',
        'section': '48px',
        'grid': '32px',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        DEFAULT: '4px',
        'lg': '8px',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.1)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
