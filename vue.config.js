module.exports = {
  lintOnSave: 'warning',
  css: {
    // extract: true,
    loaderOptions: {
      sass: {
        // make (non-outputting) settings available to all scss files
        additionalData: '@import "@/assets/scss/settings.scss";',
      },
    },
  },
};
