import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        mono: ["'Source Code Pro'", 'monospace'],
      },
      colors: {
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        accent: '#569cd6',
        secondary: '#ce9178',
        muted: '#858585',
      },
    },
  },
  plugins: [],
};
export default config;
