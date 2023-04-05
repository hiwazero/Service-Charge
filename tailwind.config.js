/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'alliance': '#ed3b3b',
        'alliance-darker': '#e01515',
      },
      maxWidth: {
        '200px': '200px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}