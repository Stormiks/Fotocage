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
  publicPath: process.env.NODE_ENV === 'production' ? 'Fotocage' : '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  // runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    extract: process.env.NODE_ENV == 'production',
    sourceMap: true
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src'),
        'views': path.resolve('src/views'),
        'layoutAuth': path.resolve('src/views/layouts/AuthLayout'),
        'layoutDefault': path.resolve('src/views/layouts/DefaultLayout'),
        'layoutError': path.resolve('src/views/layouts/ErrorLayout'),
        'assets': path.resolve('src/assets'),
        'router': path.resolve('src/router'),
        'components': path.resolve('src/components'),
        'plugins': path.resolve('src/components/plugins')
      }
    },
  },

  pluginOptions: {
    svgSprite: {
      /*
      * The directory containing your SVG files.
      */
      dir: 'src/assets/img/svg',
      /*
      * The reqex that will be used for the Webpack rule.
      */
      test: /\.(svg)(\?.*)?$/,
      /*
      * @see https://github.com/kisenka/svg-sprite-loader#configuration
      */
      loaderOptions: {
        extract: true,
        spriteFilename: 'assets/img/icons/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      /*
      * @see https://github.com/kisenka/svg-sprite-loader#configuration
      */
      pluginOptions: {
        plainSprite: true
      }
    },
    // https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/less/_var.less')
      ]
    }
  }
}
