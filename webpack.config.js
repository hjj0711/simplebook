const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development', // 代表发开阶段
  output: {
    filename: 'main.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'),
  },
}
