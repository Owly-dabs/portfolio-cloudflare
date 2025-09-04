import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ["'Source Code Pro'", 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8191ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        secondary: '#764ba2',
        muted: '#6b7280',
        'muted-foreground': '#9ca3af',
        border: '#374151',
        input: '#374151',
        ring: '#667eea',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        primary: {
          DEFAULT: '#667eea',
          foreground: '#ffffff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
