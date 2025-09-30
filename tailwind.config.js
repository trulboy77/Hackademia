/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)", "Courier New", "monospace"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "matrix-rain": "matrix-rain 20s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "scan-line": "scan-line 2s linear infinite",
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 5px currentColor" },
          "100%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}