import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#17252B', muted: '#647278', paper: '#F6F5F1', brass: '#B78A55', line: '#E5E4DF' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } },
  plugins: [],
};
export default config;
