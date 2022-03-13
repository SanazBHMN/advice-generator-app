module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
      },
    },
    fontSize: {
      md: "1.75rem",
    },
    boxShadow: {
      "3xl": "0px 0px 25px 0px hsl(150deg 100% 66%)",
    },
  },
  plugins: [],
};
