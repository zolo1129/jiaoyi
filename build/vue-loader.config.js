module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:8]' : '[hash:base64:8]',
      camelCase: true
    }
  }
}