/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Ensure all components/pages are included
    ],
    theme: {
      extend: {},
    },
    corePlugins: {
      preflight: true, // Ensures Tailwind's default styles are applied
    },
    plugins: [],
  };
  