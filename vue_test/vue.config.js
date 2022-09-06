const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false /*关闭语法检查*/,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  }
})
