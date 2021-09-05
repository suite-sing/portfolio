module.exports = {
  "publicPath": "/",
  "outputDir": "docs",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
}