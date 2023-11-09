/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16A085",
        secondary: "#434778",
        "light-blue": "#5D69DB",
        "light-gray": "#D2DBBD",
        "footer-bg": "#273238",
      },
    },
  },
  plugins: [],
};
export default withMT(config);

