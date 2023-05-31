module.exports = {
    // 首先修改入口文件地址为examples下的main.js
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    // 其次将components加入打包编译任务中.
    // 扩展 webpack 配置，使 components 加入编译
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add('/components')
          .end()
        .use('babel')
          .loader('babel-loader')
    }
  }
  