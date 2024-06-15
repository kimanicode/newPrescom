
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        primary: '#1375BC', 
        secondary: '#EF4423'// Replace with your desired color
        // ... other NextUI theme customizations
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}

