const path = require("path")
// 转化vue文件里面的css需要用到的插件
const { VueLoaderPlugin } = require("vue-loader/dist/index")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// 在打包的文件夹下面也生成html文件
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode:"development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  resolve: {
    // 文件扩展名查询
    extensions:[".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
    // 别名
    alias:{
      src: path.resolve(__dirname, "./src")
    }
  },
  // npm下载webpack-dev-server包,在开发环境中会开启一个本地服务,是在开发模式下会用到的
  devServer:{
    hot: true,
    // port: 8888
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
      },
      {
        test:/\.(png|jpe?g|svg|gif)$/,
        // 图片,字体, 等资源不用下载对应的loader了webpack5已经内置对应的loader

        // 1.打包两张图片,并且这两张图片都有自己的地址,将地址设置到img和bgi中
        // 缺点: 多图片加载将会发送多次请求
        // type: "asset/resource"

        // 2.将图片进行base64的编码, 并且直接编码后的源码放到打包的js文件中
        // 缺点: 造成js文件非常大, 下载js文件本身消耗时间非常长, 造成js代码的下载和解析/执行时间过长
        // type: "asset/inline"

        // 3.合理的规范
        // 3.1.对于小一点的图片,可以进行base64编码
        // 3.2.对于大一点的图片,单独的图片打包,形成url地址,单独的请求这个url图片
        type: "asset",
        parser:{
          dataUrlCondition: {
            maxSize: 60 * 1024
          }
        },
        generator: {
          // 占位符
          // name: 指向原来的图片名称
          // ext:扩展名
          // hash:webpack生成的hash避免打包后的图片的名字重复
          filename: "img/[name]_[hash:8][ext]"
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   plugins: [
            //     "@babel/plugin-transform-arrow-functions",
            //     "@babel/plugin-transform-block-scoping"
            //   ]
            // }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "tianqiao",
      template: "./index.html"
    })
  ]
}