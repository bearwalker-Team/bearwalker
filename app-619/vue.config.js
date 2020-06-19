module.exports = {
  devServer: {
    proxy: {
      '/api': {
          target: 'http://192.168.85.236:3007/',
          changeOrigin: true, 
          pathRewrite: {
              '^/api': ''
          }
      }
    }
  }
}
