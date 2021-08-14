
const path = require('path')
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
    ],
    mode:"development" //production生产模式，速度较慢 //development开发模式，辅助插件便于更好调试 //none 模式 最原始打包，不做任何处理
}