const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            // css-loader只负责将css文件进行加载
            // style-loader负责将样式添加到DOM中
            // 使用多个loader时，是从右往左
            use: [ 'style-loader', 'css-loader']
          },
          {
            test: /\.less$/,
            use: [{
              loader: "style-loader"
            },{
              loader: "css-loader"
            },{
              loader: "less-loader"
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // 当加载的图片小于limit时，会将图片编译成base64字符串的形式,
                  // 当加载的图片大于limit时，需要使用file-loader模块进行加载。
                  limit: 15000,
                  name: 'img/[name].[hash:8].[ext]'
                },
              }
            ]
          }
        ],
      },
}