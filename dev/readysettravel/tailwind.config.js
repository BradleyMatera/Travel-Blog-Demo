// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline-orange': '0 0 0 3px rgba(255, 165, 0, 0.5)', // Custom shadow class definition
      },
    },
  },
  plugins: [],
};
