// 底层基于node，必须打包出去
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    entry: './src/index.js', // 入口文件
    // 开发阶段不需要配置output,只有生产阶段才需要配置
    output: {
        path: path.join(__dirname, "mydist"),
        filename: 'mybabelrc.js'
    },
    // loader
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/, // 不会编译的目录,被排除
                use: {
                    loader: 'babel-loader',
                    // options: { // 可以和 .babelrc 二选一
                    //     presets: ['@babel/preset-env']
                    // }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff|woff2)$/,
                use: [
                    { loader: "url-loader" }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
                loader: 'file-loader?name=[hash:12].[ext]'
            }
        ]
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin({ template: './public/index.html' }) // 该插件将来在开发环境和生产环境中 以 ./public/index.html 为模板
    ],
    // 模式
    mode: 'production' // 开发阶段设置为 development
}