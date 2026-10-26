/* ============================================================
   TAILWIND CSS CONFIGURATION — NAFA iSTORE
   ============================================================ */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        cream: "#F6F1E7",
        creamdark: "#E9E1CF",
        silver: {
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#D9D9D9",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        calibri: [
          "Calibri",
          "Candara",
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      animation: {
        floaty: "floaty 5.5s ease-in-out infinite",
        "floaty-slow": "floaty 7s ease-in-out 0.8s infinite",
        marquee: "marquee 75s linear infinite",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
