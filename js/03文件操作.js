// console.log("this is from script.");
// setTimeout(()=>{
//   console.log("node可以使用setTimeout，但是不可以使用BOM和DOM");
// },1000);
// console.log(globalThis);
// console.log(global===globalThis);

//buffer
// let buf3=Buffer.from('hello');
// console.log(buf3);
// let buf_4=Buffer.from([105,108,111,118,101,121,111,117]);
// // console.log(buf_4.toString());
// console.log(buf_4[2]);
// buf_4[2]=110;
// console.log(buf_4[2]);
// console.log(buf_4.toString())

//fs
// const fs=require('fs');

//写入文件 异步 会将原来文件的内容清空重新写入
// fs.writeFile('./写入文件.txt','三人行，则必有我师焉',err=>{
//   if(err){
//     console.log('写入失败');
//     return;
//   }
//   console.log('写入成功');
// });
// console.log(1+2);

//同步写入文件 会将原来文件的内容清空重新写入
// fs.writeFileSync('./写入文件.txt','同步写入文件');

//追加写入文本 异步
// const fs=require('fs');
// fs.appendFile('./写入文件.txt','择其善者而从之，其不善者而改之',err=>{
//   if(err){
//     console.log('追加写入失败');
//     return;
//   }
//   console.log('追加写入成功');
// })

//同步追加写入
// fs.appendFileSync('./写入文件.txt','\r\n温故而知新');

// writeFile追加写入 加入第三个参数{flag:'a'}
// fs.writeFile('./写入文件.txt','\r\n可以为十一',{flag:'a'}, err=>{
//   if(err){
//     console.log('writeFile追加写入失败');
//     return
//   }
//   console.log('writeFile追加写入成功')
// })
//writeFileSync同步追加写入
// fs.writeFileSync('./写入文件.txt','\r\n有朋自远方来，不亦说乎',{flag:'a'},err=>{
//   if(err){
//     console.log('writeFileSync同步追加写入失败');
//     return;
//   }
//   console.log('writeFileSync同步追加写入成功');
// })

//流式写入文件
// const fs=require('fs');
// const ws=fs.createWriteStream('./写入文件.txt');
// ws.write('《观书有感》\r\n');
// ws.write('半亩方塘一鉴开\r\n');
// ws.write('天光云影共徘徊\r\n');
// ws.write('问渠哪得清如许\r\n');
// ws.write('为有源头活水来\r\n');

// 读取文件 异步
// const fs=require('fs');
// fs.readFile('./写入文件.txt',(err,data)=>{
//   if(err){
//     console.log('读取失败');
//     return;
//   }
//   console.log(data.toString());
// })

//读取文件 同步
// let data=fs.readFileSync('./写入文件.txt');
// console.log(data.toString())

//流式读取文件
// const fs=require('fs');
// const rs=fs.createReadStream('../res/firework.mp4');
// rs.on('data',chunk=>{
//   console.log(chunk);
// })
// end 可选事件 文件读取完成之后
// rs.on('end',()=>{
//   console.log('读取完成');
// })

//非流式复制文件
// const fs=require('fs');
// const process=require('process');   //引入process查看进程信息
// fs.readFile('../res/firework.mp4',(err,data)=>{
//   if(err){
//     console.log('读取失败');
//     return;
//   }
//   fs.writeFile('../res/firework1.mp4',data,err=>{
//     if(err){
//       console.log('复制失败');
//       return;
//     }
//     console.log(process.memoryUsage())  ///查看进程的内存使用量85139456  81M
//   });
// })

//流式复制文件
// const fs=require('fs');
// const process=require('process');
// const rs=fs.createReadStream('../res/firework.mp4');
// const ws=fs.createWriteStream('../res/firework2.mp4');
// rs.on('data',chunk=>{
//   ws.write(chunk);
// })
// rs.on('end',()=>{
//   console.log(process.memoryUsage())  //61849600  58M
// })

//文件重命名 异步
// const fs=require('fs');
// fs.rename('./写入文件.txt','./观书有感.txt',err=>{
//   if(err){
//     console.log('重命名失败');
//   }
//   console.log('重命名成功');
// });
//文件重命名同步
// fs.renameSync('./观书有感.txt','./写入文件.txt')
//文件移动 异步
// fs.rename('./写入文件.txt','../res/观书有感.txt',err=>{
//   if(err){
//         console.log('移动失败');
//     }
//     console.log('移动成功');
// })
//文件移动 同步
// fs.renameSync('../res/观书有感.txt','./观书有感.txt');

//文件删除 
//1. unlink异步  unlinkSync同步
// const fs=require('fs');
// fs.unlink('./观书有感.txt',err=>{
//   if(err){
//     console.log('删除失败');
//   }
//   console.log('删除成功');
// })

//2. rm方法删除文件 rmSync异步
// const fs=require('fs');
// fs.rm('../res/firework2.mp4',err=>{
//   if(err){
//         console.log('删除失败');
//       }
//       console.log('删除成功');
// })

const fs=require('fs');
fs.renameSync('./script.js','./文件操作.js');