/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
		"./app/**/**/*.{js,jsx,ts,tsx}",
		"./app/(tabs)/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./screens/**/*.{js,jsx,ts,tsx}",
   ],

   theme: {
      extend: {
         colors: {
            primary: "#6C63FF",
            textBlack: "#18171f",
            white: "#fff",
            lightPurple: "#5C54AD",
            danger: "#DC3545",
            success: "#28A745",
         },
      },
   },
   plugins: [],
};
