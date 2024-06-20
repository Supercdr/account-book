const express=require('express');
const route=express.Router();

route.get('/info',(req,res)=>{
  res.send(`<h1>Welcome!</h1>`);
})
module.exports=route