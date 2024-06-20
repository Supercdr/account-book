//所导入模块的路径不能省略./和../，建议使用相对路径
//如果导入的模块是一个文件夹，则首先检测文件夹下的package.json文件中的main属性对应的文件
//如果没有，则去导入文件夹下的index.js和index.json
//若都没有，则报错
const m=require('./file');
console.log(m);