const express=require('express');
const path=require('path');
const server=express();

server.get('/other',(req,res)=>{
  //可连贯操作
  // res.status(300);
  // res.set('aaa','bbb');
  // res.send(`<h1>你好 我是response</h1>`);
  //res.status(300).set('aaa','bbb').send(`<h1>你好 我是response</h1>`);
  //跳转响应
  // res.redirect("http://baidu.com");  
  //json响应
  // res.json({
  //   name:'uhfiuw',
  //   sex:'女'
  // })
  //下载响应
  // res.download(path.resolve(__dirname,'./singers.json'));
  //响应文件内容
  res.sendFile(path.resolve(__dirname,'./singer.html'));
})

server.listen(8888,()=>{
  console.log('服务已经启动...端口监听中...');
})