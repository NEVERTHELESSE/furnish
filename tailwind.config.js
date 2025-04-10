/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        fadedColor: "var(--fadedColor)",
        fgColor: "var(--fgColor)",
      },
      screens: {
        smm: "max-width(1065px)",
      },
    },
  },

  plugins: [],
};
