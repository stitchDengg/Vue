const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false /*关闭语法检查*/,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  configureWebpack() {
    return {
      resolve: {
        fallback: {
          http: require.resolve("stream-http"),
        },
      },
    }
  },
  // 开启代理服务器（方式1）
  /*  devServer:{
     proxy:"http://localhost:5000"，
   } */

  // 开启代理服务器（方式2）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        // 非常重要的配置 匹配以/api开头的都变成空字符串 路径重写配置
        pathRewrite: { '/api': '' },
        ws: true,  //用于支持webscoket
        /*
          changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
          changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
          changeOrigin默认值为true
        */
        changeOrigin: true,  //用于控制请求头中的host值
      },
      "demo":{
        target: 'http://localhost:5001',
        // 非常重要的配置 匹配以/api开头的都变成空字符串 路径重写配置
        pathRewrite: { '/demo': '' },
        ws: true,//用于支持webscoket
        changeOrigin: true,  //用于控制请求头中的host值
      }
    }
  }
})
