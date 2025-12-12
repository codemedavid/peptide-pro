/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimalist SlimDose Theme
        'theme-bg': '#FFFFFF',      // White
        'theme-text': '#1A1A1A',    // Soft Black
        'theme-accent': '#1A1A1A',  // Black for primary actions
        'theme-secondary': '#F0E6D2', // Beige

        // Mapping standard colors to the new theme for compatibility
        primary: {
          50: '#FFFFFF',
          100: '#F9F9F9',
          200: '#F0E6D2', // Beige
          300: '#E0D0B0',
          400: '#C0B090',
          500: '#1A1A1A', // Dark
          600: '#151515',
          700: '#101010',
          800: '#0A0A0A',
          900: '#000000',
        },
        // Deprecating gold but mapping to secondary/accent to prevent breaks
        gold: {
          50: '#FBF8F1',
          100: '#F7F1E3',
          200: '#EBDCB9',
          300: '#DFC790',
          400: '#D4AF37', // Classic Metallic Gold
          500: '#B89628',
          600: '#A08020',
          700: '#806018',
          800: '#604812',
          900: '#40300C',
        },
        accent: {
          light: '#F0E6D2', // Beige
          DEFAULT: '#000080', // Navy Blue (formerly Black)
          dark: '#000040',
          white: '#ffffff',
          black: '#1A1A1A',
          navy: '#000080', // Classic Navy
        },
        navy: {
          50: '#F0F4FF',
          100: '#E0E8FF',
          500: '#3B82F6',
          700: '#1D4ED8',
          800: '#1e3a8a', // Deep Navy
          900: '#000080', // Darkest Navy
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
