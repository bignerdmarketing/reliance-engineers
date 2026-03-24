/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#182F53',
          light: '#1E3A6B',
          dark: '#0F1F38',
        },
        accent: {
          DEFAULT: '#C6A24A',
          light: '#D4B565',
          dark: '#A8873B',
        },
        secondary: '#407EC9',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8F9FA',
          dark: '#F1F3F5',
        },
        brand: {
          text: '#231F20',
          muted: '#5A6270',
          subtle: '#8A929E',
          label: '#3D4451',
          input: '#1A1F2E',
          border: '#D8DCE3',
          required: '#B91C1C',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'layered': '0 1px 2px rgba(24,47,83,0.04), 0 4px 8px rgba(24,47,83,0.06), 0 12px 24px rgba(24,47,83,0.08)',
        'layered-lg': '0 2px 4px rgba(24,47,83,0.04), 0 8px 16px rgba(24,47,83,0.06), 0 24px 48px rgba(24,47,83,0.1)',
      },
    },
  },
  plugins: [],
};
