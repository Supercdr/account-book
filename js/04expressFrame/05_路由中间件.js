const express=require('express');

const server=express();
//声明路由中间件函数
function checkCodeMiddleware(req,res,next){
  if(req.query.code==='123'){
    //若参数正确，next()方法继续向下执行路由回调，返回响应
    next();
  }else{
    res.send('暗码错误')
  }
}
//创建路由回调 在第二个参数中导入路由中间件
server.get('/admin',checkCodeMiddleware,(req,res)=>{
  res.send('前端页面')
})
server.get('/login',checkCodeMiddleware,(req,res)=>{
  res.send('登录页面');
})
server.all('*',(req,res)=>{
  res.send('<h1>404 Not Found</h1>');
})
server.listen(8888,()=>{
  console.log('服务启动...端口监听中...')
})