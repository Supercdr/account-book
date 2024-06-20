const express=require('express');
const fs=require('fs');
const path=require('path');

const server=express();
//声明全局中间件函数 next是内部函数，执行之后指向后续的路由回调或中间件函数回调
function recordMiddleware(req,res,next){
  //获取url和ip参数
  let {url,ip}=req;
  //将信息追加到access.log文件中
  fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url}  ${ip} \r\n`);
  //调用next执行后续的路由回调
  next();
}
//use方法使用全局中间件函数
server.use(recordMiddleware);
//创建路由回调
server.get('/admin',(req,res)=>{
  res.send('前端页面')
})

server.listen(8888,()=>{
  console.log('服务启动...端口监听中...')
})