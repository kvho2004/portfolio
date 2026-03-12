/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0e0a",
        surface: "#1a1916",
        amber: "#f5a623",
        "pixel-green": "#4ade80",
        cream: "#e8e0c8",
        muted: "#6b6754",
      },
    },
  },
  plugins: [],
};
