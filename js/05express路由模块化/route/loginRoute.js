const express=require('express'); //导入express模块
const route=express.Router();  //创建路由对象

route.get('/login',(req,res)=>{
  res.sendFile('login');
})

module.exports=route