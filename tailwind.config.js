/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "var(--theme-primary)",
        "theme-selected": "var(--theme-selected)",
        "theme-whatsapp": "var(--theme-whatsapp)",
        "theme-light": "var(--theme-light)",
        "theme-cream": "var(--theme-cream)",
        "theme-dark": "var(--theme-dark)",
        "theme-yellow": "var(--theme-yellow)",
        "theme-light-dark": "var(--theme-light-dark)",
        "theme-cta": "var(--theme-cta)",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
