const ejs=require('ejs');
const fs=require('fs');
const express=require('express');
const path=require('path');

let china='中国';
let xiyou=['唐僧','孙悟空','沙僧','猪八戒'];
let isLogin=false;
const server=express();

//设置模板引擎
server.set("view engine","ejs");
//设置模板文件存放的位置
server.set("views",path.resolve(__dirname,'./views'));

server.get('/home',(req,res)=>{
  //res.render('模板的文件名','数据')
  res.render('home',{china,xiyou,isLogin});
})

server.listen(8888,()=>{
  console.log('8888端口监听中...');
})

//ejs渲染
// let html=fs.readFileSync('./01ejs.html').toString();
// let result=ejs.render(html,{china:china,xiyou,isLogin});
// console.log(result);