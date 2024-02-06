/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: [
      './index.html',
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

