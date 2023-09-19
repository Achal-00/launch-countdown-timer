/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.875rem, min(2dvw, 2dvh), 5rem)",
      },
      fontFamily: {
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
      colors: {
        "greyish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "mostly-dark-blue": "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};
