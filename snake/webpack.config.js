const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插�?
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件
  output: {
    // 指定打包后的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件名
    filename: "bundle.js",
    // 告诉webpack不使用箭头函�?
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  // 指定打包时要使用的模�?
  module: {
    // 指定loader加载的规�?
    rules: [
      {
        // 指定规则生效的文�?
        test: /\.ts$/,
        // 要使用的loader
        use: 'ts-loader',
        // 指定排除的文�?
        exclude: /node-modules/
      },
      // 设定LESS
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      title: "贪吃蛇",
      template: './src/index.html'
    })
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}