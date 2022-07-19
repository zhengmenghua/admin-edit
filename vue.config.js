const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/dist/',
  devServer: {
    port: 8080, // 端口
    host: 'localhost',
    open: true, // 默认打开浏览器
    // 配置跨域
    proxy: {
      '/api': {
        target: 'http://text.download521.com/api',
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 请求的时候使用这个api就可以
        }
      }
    }
  }
})
