const http=require('http');

let server=http.createServer((request,response)=>{
  response.setHeader('content-type','text/html;charset=utf-8');
  let url=new URL(request.url,'http://127.0.0.1');
  let {method}=request;
  let {pathname}=url;
  if(method=='GET'&&pathname=='/login'){
    response.end('登录页面');
  }else if(method=='GET'&&pathname=='/reg'){
    response.end('注册页面');
  }else{
    response.end('NOT FOUND');
  }
})
server.listen(8888,()=>{
  console.log('服务已经启动...端口8888监听中...');
})