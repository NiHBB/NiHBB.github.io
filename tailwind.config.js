/** @type {import('tailwindcss').Config} */
export default {
  // Use the `.dark` class instead of the OS preference so the toggle works
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
