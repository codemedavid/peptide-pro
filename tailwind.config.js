/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Biotech / Clinical Science Theme
        'theme-bg': '#FFFFFF',        // Pure white background (clinical base)
        'theme-text': '#0F2A44',      // Deep Navy (headings)
        'theme-accent': '#1F6FB2',    // Metallic Blue (primary)
        'theme-accent-hover': '#2A85D0', // Lighter blue for hover
        'theme-secondary': '#F4F7FA', // Soft Lab Gray (UI backgrounds)
        'text-secondary': '#6B7280',  // Cool Gray (body text)
        'theme-green': '#2BB673',     // Metallic Green (accents)

        // Primary Blue scale (Authority & Science)
        primary: {
          50: '#E8F4FC',
          100: '#C5E3F7',
          200: '#9DD0F2',
          300: '#75BCEC',
          400: '#4DA9E7',
          500: '#1F6FB2', // Primary Metallic Blue
          600: '#1A5E99',
          700: '#154D80',
          800: '#103C66',
          900: '#0B2B4D',
        },
        // Metallic Blue scale (mapped to primary for compatibility)
        blue: {
          50: '#E8F4FC',
          100: '#C5E3F7',
          200: '#9DD0F2',
          300: '#75BCEC',
          400: '#4DA9E7',
          500: '#1F6FB2',
          600: '#1A5E99',
          700: '#154D80',
          800: '#103C66',
          900: '#0B2B4D',
        },
        // Metallic Green scale (Biology & Innovation)
        green: {
          50: '#E6F7EF',
          100: '#C2ECD9',
          200: '#99E0C2',
          300: '#70D4AB',
          400: '#4DC999',
          500: '#2BB673', // Primary Metallic Green
          600: '#249E63',
          700: '#1D8654',
          800: '#166E44',
          900: '#0F5635',
        },
        // Accent colors
        accent: {
          light: '#2A85D0',   // Light blue
          DEFAULT: '#1F6FB2', // Metallic Blue
          dark: '#154D80',
          green: '#2BB673',   // Metallic Green
          white: '#FFFFFF',
          black: '#0F2A44',
        },
        // Navy scale for deep sections
        navy: {
          50: '#E8EEF3',
          100: '#C5D4E1',
          200: '#9DB8CC',
          300: '#759CB7',
          400: '#5282A3',
          500: '#0F2A44', // Deep Navy
          600: '#0D2439',
          700: '#0B1E2E',
          800: '#081823',
          900: '#061218',
        },
        // Gray scale for UI elements
        gray: {
          50: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F4F7FA', // Soft Lab Gray
          300: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280', // Cool Gray
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#0F2A44',
        },
        // Backward compatibility - magenta mapped to primary blue
        magenta: {
          50: '#E8F4FC',
          100: '#C5E3F7',
          200: '#9DD0F2',
          300: '#75BCEC',
          400: '#4DA9E7',
          500: '#1F6FB2',
          600: '#1A5E99',
          700: '#154D80',
          800: '#103C66',
          900: '#0B2B4D',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(15, 42, 68, 0.04)',
        'medium': '0 4px 15px rgba(15, 42, 68, 0.08)',
        'hover': '0 8px 25px rgba(15, 42, 68, 0.12)',
        'glow-blue': '0 0 20px rgba(31, 111, 178, 0.3)',
        'glow-green': '0 0 20px rgba(43, 182, 115, 0.3)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(31, 111, 178, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(31, 111, 178, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
