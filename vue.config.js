const path = require('path')

module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',

  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve('src'))
    config.resolve.alias.set('@views', path.resolve('src/views/'))
    config.resolve.alias.set('@assets', path.resolve('src/assets'))
    config.resolve.alias.set('@router', path.resolve('src/router'))
    config.resolve.alias.set('@components', path.resolve('src/components'))
  },
  devServer: {
    historyApiFallback: true,
  }
}
