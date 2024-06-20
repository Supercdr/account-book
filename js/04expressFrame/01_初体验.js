const express=require('express');
//创建应用对象

const server=express();

server.get('/request',(req,res)=>{
  console.log(req.method);
  console.log(req.url);
  console.log(req.path);
  //获取查询字符串的对象
  console.log(req.query);
  console.log(req.httpVersion);
  console.log(req.headers);
  获取ip
  console.log(req.ip);
  //单独获取请求头中的单个值
  console.log(req.get('host'));
  res.end('express');
});

server.listen(8888,()=>{
  console.log('express服务已经启动...端口监听中...');
})