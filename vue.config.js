/* eslint-disable comma-dangle */
/* eslint-disable quote-props */

const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Photocage'
    }
  },
  assetsDir: 'assets',
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  // runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    extract: process.env.NODE_ENV == 'production',
    sourceMap: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        'views': path.resolve('src/views/'),
        'assets': path.resolve('src/assets'),
        'router': path.resolve('src/router'),
        'components': path.resolve('src/components'),
      }
    },
  }
}
