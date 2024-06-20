//创建单个文件夹
// const fs=require('fs');
// fs.mkdir('./a',err=>{
//   if(err){
//     console.log('创建失败');
//     return;
//   }
//   console.log('创建成功');
// })
//递归创建文件夹 {recursive:true}
// const fs=require('fs');
// fs.mkdir('./a/b/c',{recursive:true},err=>{
//   if(err){
//         console.log(err);
//         return;
//       }
//       console.log('创建成功');
// })
//读取文件夹
// const fs=require('fs');
// fs.readdir('../res',(err,data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data)
// })

//删除空文件夹
// const fs=require('fs');
// fs.rmdir('./a/b/c',err=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log('删除成功')
// })
//递归删除非空文件夹 rmdir方法不推荐使用，未来可能会被删除 推荐使用rm方法
// const fs=require('fs');
// fs.rmdir('./a',{recursive:true},err=>{
//   if(err){
//         console.log(err);
//         return;
//       }
//       console.log('删除成功')
// })
//rm方法递归删除文件夹
const fs=require('fs');
fs.rm('./a',{recursive:true},err=>{
  if(err){
            console.log(err);
            return;
          }
          console.log('删除成功')
})