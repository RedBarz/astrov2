import react from "@astrojs/react";

export default {
  integrations: [
    react(),
  ],
  pages: {
    // "/counter": "./src/components/Counter.jsx",
    // "/carlist": "./src/components/CarList.jsx",
  },
  output: 'static'
};

