const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件
        test: /\.css$/,
        use:[
          // use中多个loader的使用顺序是从右往左也可以说成是从下往上的
          {loader: "style-loader"},
          {loader: "css-loader"},
          {
            loader: "postcss-loader",
            // options: {
            //   postcssOptions: {
            //     plugins: ["autoprefixer"]
            //   }
            // }
          }
        ]
      },
      {
        test:/\.less$/,
        use:[
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "less-loader"},
          {loader: "postcss-loader"}
        ]
      }
    ]
  }
}