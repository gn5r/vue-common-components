module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 80,
  },
  publicPath: "./",
  // outputDir: "docs",
  filenameHashing: false,
  configureWebpack: {
    devtool: "source-map",
    plugins: [],
  },
};
