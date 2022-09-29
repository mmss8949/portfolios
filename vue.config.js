const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave:false,
    // project deployment base
    publicPath: '/portfolios/',
    // where to output built files
    outputDir: 'dist',
    // where to put static assets (js/css/img/font/...)
    assetsDir: 'portfolios/tools',//assetsDir: 'swap-attachment',
    // filename for index.html (relative to outputDir)
    indexPath: 'index.html',
})
