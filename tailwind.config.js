import defaultTheme from "tailwindcss/defaultTheme"
import rippleUi from "rippleui"
import typopgraphy from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit Variable", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    rippleUi,
    typopgraphy,
  ],
  darkMode: "selector"
}

