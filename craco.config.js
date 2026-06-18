module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Procura e desativa a exigência de extensão completa (.js/.mjs) nas importações
      webpackConfig.module.rules.push({
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      });
      return webpackConfig;
    },
  },
};