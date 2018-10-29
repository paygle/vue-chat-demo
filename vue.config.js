const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: [/node_modules\/d3*/ig],
  devServer: {
    port: 8090
  },
  chainWebpack: (config) => {

    config.resolve.alias
      .set('src', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('lib', resolve('src/lib'))
  }
}
