const express=require('express');
const server=express();

server.use((req,res,next)=>{
  //原生方法获取请求体中的referer req.headers.referer
  //使用express方法中的get方法获取请求体中的单个值
  let referer=req.get('referer');  
  if(referer){
    let url=new URL(referer);
    let {hostname}=url
    console.log(hostname);
    if(hostname!=='127.0.0.1'){
       res.send('<h1>404 Not Found</h1>');
       return;
    }
  }
  next();
})
//创建静态资源文件夹
server.use(express.static(__dirname+'/res'));

server.listen(8888,()=>{
  console.log('8888端口监听中...');
})
