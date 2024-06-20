const http=require('http');

let server=http.createServer((request,response)=>{
  let url=new URL(request.url,'http://www.baidu.com');
  console.log(url);
  console.log(url.pathname);  //获取请求路径
  //url中的searchParams返回查询字符串的对象,需使用get()方法获取
  console.log(url.searchParams.get('keywords')); //获取查询字符串
  response.end('hello');
})
server.listen(8888,()=>{
  console.log('服务已经启动...')
})