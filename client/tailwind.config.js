/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light themes
        l_elements: "hsl(0, 0%, 98%)",
        l_bg: "hsl(236, 33%, 92%)",
        l_line: "hsl(233, 11%, 84%)",
        l_lineThrough: "hsl(236, 9%, 61%)",
        l_text: " hsl(235, 19%, 35%)",
        // dark themes
        d_bg: "hsl(235, 21%, 11%)",
        d_elements: "hsl(235, 24%, 19%)",
        d_text: "hsl(234, 39%, 85%)",
        d_panel_hover: "hsl(236, 33%, 92%)",
        d_panel: "hsl(234, 11%, 52%)",
        d_lineThrough: "hsl(233, 14%, 35%)",
        d_line: "hsl(237, 14%, 26%)",
      },
      screens: {
        xs: "0px",
        lg: "600px",
      },
    },
  },
  plugins: [],
};
