const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'showcase'
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      css: {},
      scss: {
        // prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
