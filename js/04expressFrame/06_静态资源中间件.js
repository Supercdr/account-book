const express=require('express');

const server=express();
//使用静态资源中间件 在指定的静态资源文件夹中查找文件
//可将文件夹设置为首页
server.use(express.static(__dirname+'/res'));
server.get('/login',(req,res)=>{
  res.send('登录页面');
})
server.all('*',(req,res)=>{
  res.send('<h1>404 Not Found</h1>')
})
server.listen(8888,()=>{
  console.log('服务已启动..端口监听中...')
})