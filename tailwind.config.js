/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
				"./App.{js,jsx,ts,tsx}",         
        "./components/**/*.{js,jsx,ts,tsx}", 
        "./screens/**/*.{js,jsx,ts,tsx}", 
        "./src/components/**/*.{js,jsx,ts,tsx}" 
	],

  theme: {
    extend: {
      colors: {
        primary: "#5C54AD",
        textBlack: "#18171f",
        white: "#fff",
        lightPurple: "#6C63FF",
        danger: "#DC3545",
        success: "#28A745"
      },
    },
  },
  plugins: [],
}

