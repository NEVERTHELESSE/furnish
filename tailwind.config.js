/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        fadedColor: "var(--fadedColor)",
        bgColor: "var(--bgColor)",
        fgColor: "var(--fgColor)",
        shadowColor: "var(--shadowColor)",
        secondaryColor: "var(--secondaryColor)",
      },
    },
  },

  plugins: [],
};
