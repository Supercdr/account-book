//查看文件资源信息 stat方法
const fs=require('fs');
fs.stat('../res/firework.mp4',(err,data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(data)
  console.log(data.isFile())   //判断目标资源是否为文件  isFile()
  console.log(data.isDirectory())  //判断目标资源是否为文件夹
})
//size：文件大小
//atime：文件最后访问时间
//mtime：最后修改时间
//ctime：最后修改文件状态的时间
//birthtime：文件创建时间