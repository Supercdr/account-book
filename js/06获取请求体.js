const http=require('http');
//创建server对象
let server=http.createServer((request,response)=>{
  let body='';  //设置一个变量存储请求体
  //request绑定data事件，读取请求体
  request.on('data',chunk=>{
     body+=chunk.toString();
  })
  //绑定end事件
  request.on('end',()=>{
    console.log(body);
    response.end('响应体');
  })
})
//监听端口，启动服务
server.listen(8888,()=>{
  console.log('服务器启动...');
})