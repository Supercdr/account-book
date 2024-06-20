const express=require('express');
//导入中间件body-parser，作用是以键值对形式解析请求体中的数据，并为req添加body属性，body-parser只处理post请求
const bodyParser=require('body-parser');
const server=express();

//解析json格式的请求体的中间件
// const jsonParser=bodyParser.json();

//解析querystring格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });

server.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/res/login.html');
})
//body-parser中间件会为req添加body属性，传递解析后的数据
server.post('/login',urlencodedParser,(req,res)=>{
  let {username,password}=req.body;
  res.send(`<h1>Welcome ${username}!</h1>`);
})
// server.all('*',(req,res)=>{
     // res.send('<h1>404 Not Found</h1>');
// })
server.listen(8888,()=>{
  console.log('8888端口is running...');
})