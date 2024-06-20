const express=require('express');
const server=express();

//导入登录路由模块
const loginRoute=require('./route/loginRoute');
//注册路由模块
server.use(loginRoute);

const info=require('./route/postRoute');
server.use(info);

server.listen(8888,()=>{
  console.log('8888端口监听中...')
})