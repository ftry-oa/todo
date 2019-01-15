// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const PRODUCTION = 'production'
const env = process.env.NODE_ENV
const isDev = env !== PRODUCTION

module.exports = {
    entry: {
        app: './src/index', // "app"key值可以随便定义，输出的时候就可以取这个key值为输出文件命名
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: isDev ? '[name].js' : '[name].[chunkhash].js', // 这里[name]就对应entry中的‘app’key值
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // web服务的目录为 "dist" 目录
        port: 9001 // web服务端口
    },
    mode: env  || 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            // 'process.env': {
            //     NODE_ENV: JSON.stringify(env || 'production')
            // }
        })
    ]
}