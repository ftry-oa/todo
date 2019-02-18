const cssLoader = require('css-loader')

module.exports = {
  process(src, filename, config, options) {
      console.log('@@@src', src)
    return cssLoader(src)
  }
}