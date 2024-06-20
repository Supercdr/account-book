//相对路径以命令行的所在目录为参照物
// const fs=require('fs');
//同步创建并且写入文件
// fs.writeFileSync('./index.html','相对路径');

//绝对路径  使用__dirname可以获取当前文件的所在文件目录
// const fs=require('fs');
// fs.writeFileSync(__dirname+'/index.html','绝对路径');
// console.log(__dirname);

// 导入path模块
//path.resolve拼接规范的绝对路径
const path=require('path');
// console.log(path.resolve(__dirname,'../res/firework.mp4'));  // D:\web\html\res\firework.mp4
//path.sep 获取操作系统的路径分隔符
// console.log(path.sep)
//path.parse  解析路径并返回对象
// let url='D:\\web\\html\\res\\firework.mp4'  //反斜杠'\'需要用转义字符进行转变
// console.log(path.parse(url))

//path.basename 获取路径的基础名称
//path.dirname 获取路径的目录名
//path.extname 获取路径的扩展名