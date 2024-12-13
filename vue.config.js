const path = require('path');

module.exports = {
  // Configure Webpack to resolve @ as the src directory
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': path.resolve(__dirname, 'src'), // Alias @ to src
  //     },
  //   },
  // },

  // CSS loader options for global SCSS variables and mixins
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/variables.scss"; // Import global SCSS variables
          @import "@/assets/styles/mixins.scss";    // Import global SCSS mixins
        `,
      },
    },
  },

  // Optional: Add dev server configurations (e.g., proxy settings if needed)
  devServer: {
    port: 8080, // Default port for development
    open: true, // Automatically open the browser when starting the dev server
  },
};