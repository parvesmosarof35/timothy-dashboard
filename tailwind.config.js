/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ------------------------------------------------------------------
       |  CUSTOM FONT STACKS
       |-------------------------------------------------------------------
       |  – Use via className="font-raleway", "font-montserrat", etc.
       */
      fontFamily: {
        poppins:     ["'Poppins'", "sans-serif"],
        raleway:     ["'Raleway'", "sans-serif"],
        montserrat:  ["'Montserrat'", "sans-serif"],
      },

      /* ------------------------------------------------------------------
       |  BRAND COLOURS
       |-------------------------------------------------------------------
       |  Semantic names keep your JSX self‑explanatory. If you later tweak
       |  a hue, component code stays untouched.
       */
 
    },
  },

  /* --------------------------------------------------------------------
   |  PLUGINS
   |---------------------------------------------------------------------
   |  DaisyUI stays last so its components inherit your extended theme.
   */
  plugins: [require("daisyui")],
};
