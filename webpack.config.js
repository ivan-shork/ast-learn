const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 5000,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 先eslint处理后再交由babel
        use: ["babel-loader"],
        exclude: /node_modules/ 
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        // 放在最前面处理的loader
        enforce: "pre",
        include: [path.resolve(__dirname, "src")], // 指定检查的目录
        options: {                                 // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
          // formatter: require("eslint-friendly-formatter") // 指定错误报告的格式规范
          fix: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "leo study!",   // 生成的文件标题	
      filename: "index.html", // 最终生成的文件名
      template: "src/index.html",	
      minify: { // 压缩选项	
        collapseWhitespace: false, // 移除空格	
        removeComments: true, // 移除注释	
        removeAttributeQuotes: true, // 移除双引号	
      }	
    }),
    // new ESLintPlugin({
    //   fix: true,
    //   extensions: ["js", "json", "coffee"],
    //   exclude: "/node_modules/"
    // })
  ]
};