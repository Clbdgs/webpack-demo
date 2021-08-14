
class MyRemoveCommentsPlugin {
  constructor(options){
    this.options  = options
  }
    apply (compiler) {
      compiler.hooks.emit.tap('myRemoveCommentsPlugin', compilation => {
        // compilation => 可以理解为此次打包的上下文
        console.log(this.options)
        for (const name in compilation.assets) {
          console.log(name) // 输出文件内容
          if (name.endsWith('.js')) {
            const contents = compilation.assets[name].source()
            //消除所有注释
            const noComments = contents.replace(/\/\*{2,}\/\s?/g, '').replace(/\/\/[a-z]{0,}/g,'')
            compilation.assets[name] = {
              source: () => noComments,
              size: () => noComments.length
            }
          }
        }
      })
    }
}
module.exports = MyRemoveCommentsPlugin