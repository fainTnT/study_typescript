const path = require('path');

module.exports = {
  // 指定入口文件
  entry:"./src/index.ts",

  // 指定打包文件
  output:{
    // 指定打包后的目录
    path:path.resolve(__dirname,'dist'),
    // 打包后文件名
    filename:"bundle.js",
  },
  // 指定打包时要使用的模块
  module:{
    // 指定loader加载的规则
    rules:[
      {
        // 指定规则生效的文件
        test:/\.ts$/,
        // 要使用的loader
        use:'ts-loader',
        // 指定排除的文件
        exclude:/node-modules/
      }
    ]
  }
}