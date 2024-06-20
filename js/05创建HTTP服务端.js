
//引入http模块
const http=require('http');
//创建服务对象
const server=http.createServer((request,response)=>{
  response.setHeader('content-type','text/html;charset=utf-8');  //响应内容中文乱码的解决办法
  console.log(request.url);  //获取url的路径与1查询字符串
  console.log(request.method);  //获取请求的方法
  console.log(request.httpVersion); //获取http协议的版本号
  console.log(request.headers); //获取请求头
  console.log(request.headers.host) //获取请求头的某一部分
  response.end('hello http server');  //设置响应体
})
//监听端口，启动服务
server.listen(8888,()=>{
  console.log('服务已经启动...')
})
//结束服务 命令行ctrl+c