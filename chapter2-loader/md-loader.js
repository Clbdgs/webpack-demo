module.exports = (source)=>{
    const str = source
    const code = `export default ${JSON.stringify(str)}`
    return code
}