const express=require('express');
const {singers}=require('./singers.json'); //解构赋值

const server=express();
//all表示get和post方法都可以匹配
//这里的:id表示匹配占位符
server.get('/singers/:id.html',(req,res)=>{
  let {id}=req.params;
  let result=singers.find(item=>{
    if(item.id===Number(id)){
      return true;
    }
  })
  if(!result){
    res.end(`<h1>404 Not Found</h1>`);
    return;
  }
  res.end(`
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>singer</title>
        </head>
        <body>
          <h1>${result.name}</h1>
          <hr>
          <img src='${result.image_url}'>
        </body>
      </html>
  `);
})
server.listen(8888,()=>{
  console.log('express创建的服务已启动...端口监听中...');
})