/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#262d35",
        primary: "#caa271",
        secondary: "#265b64",
        backdrop: "#f7faff",
        // grey: "#eff0f2",
        grey: "#dfe4e7",
        'light-grey': "#fafafa"
      }
    },
  },
  plugins: [],
}