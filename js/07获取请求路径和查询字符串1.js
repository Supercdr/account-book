const http=require('http');
const url=require('url');

let server=http.createServer((request,response)=>{
  console.log(request.url);
  let body='';
  request.on('data',chunk=>{
    body+=chunk;
  })
  request.on('end',()=>{
    console.log(body);
    let res=url.parse(request.url,true); //使用url.parse()方法解析路径  将第二个参数设置为true，可将query以对象形式返回
    console.log(res);
    let pathname=res.pathname;  //url查询路径
    console.log(pathname);  
    console.log(res.query.keywords);  //查询字符串
    response.end('response');
  })
})
server.listen(8888,()=>{
  console.log('服务已经启动...')
})