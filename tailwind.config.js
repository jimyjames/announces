module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700: "#ffffff" },
        black: { 900: "#000000", "900_19": "#00000019", "900_3f": "#0000003f" },
        gray: { "800_33": "#49484833" },
      },
      boxShadow: {
        bs: "1px 1px  1px 0px #0000003f",
        bs1: "1px 1px  1px 1px #0000003f",
      },
      fontFamily: { inter: "Inter" },
      textShadow: {
        ts2: "2px 2px  2px #ffffff7f",
        ts: "1px 1px  1px #0000003f",
        ts1: "2px 2px  2px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
