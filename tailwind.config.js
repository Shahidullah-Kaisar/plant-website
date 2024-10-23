/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "340px", // 340 to 539 is a sm
      md: "540px", // 540 to 767 is a md
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" }
      }
    },
    animation: {
      movingY: "move 3s linear infinite"
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
        sm: "48px",
      }
    }
  },
  plugins: [],
}

