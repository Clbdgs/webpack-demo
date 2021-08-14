
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')  
const RemoveCommentsPlugin  = require('./my-remove-plugin.js')
/** @type {import('webpack').Configuration} */

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module:{
    },
    plugins:[
      new RemoveCommentsPlugin({data:'demo'}),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title:'webpack plugin demo',
        template:'./index.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'another.html'
      }),
      new CopyWebpackPlugin({
        patterns: ['public'] // 需要拷贝的目录或者路径通配符
      })
    ],
    mode:"none" 
}