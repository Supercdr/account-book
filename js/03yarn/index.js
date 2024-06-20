const http=require('http');
const fs=require('fs');
const path=require('path');
const mimes={
  "html": "text/html",
  "txt": "text/plain",
  "gif": "image/gif",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "au": "audio/basic",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "mpg": "video/mpeg",
  "mpeg": "video/mpeg",
  "avi": "video/x-msvideo",
  "css": "text/css",
  "js": "text/javascript",
  "png": "image/png",
  "mp3": "audio/mpeg",
  "mp4": "video/mp4",
}
let server=http.createServer((request,response)=>{
//判断请求方法必须为GET
  if(request.method!=='GET'){
    response.statusCode=403;
    response.end('<h1>Method Not Allowed</h1>');
    return;
  };
  let {pathname}=new URL(request.url,'http://127.0.0.1');
  let root=__dirname+'/page';
  let filepath=root+pathname;
  fs.readFile(filepath,(err,data)=>{
    let ext=path.extname(filepath).slice(1);  //使用path模块里的extname获取路径的扩展名，并且使用slice方法对扩展名字符串进行切割，返回从下标1到结尾的数组
    let type=mimes[ext];
    if(type){
      if(ext==='html'){
        response.setHeader('content-type',type+';charset:utf-8');
      }else{
        response.setHeader('content-type',type);
      }
    }else{
      response.setHeader('content-type','application/octet-stream');
    }
    if(err){
      response.setHeader('content-type','text/html;charset=utf-8');
      switch(err.code){
        case'ENOENT':
          response.statusCode=404;
          response.end('文件不存在');
        case 'EACCES':
          response.statusCode=403;
          response.end('权限错误');
        case 'EEXISE':
          response.statusCode=409;
          response.end('文件已存在');
        default:
          response.statusCode=500;
          response.end('浏览器内部资源错误');
      }
      return;
    }
    response.end(data);
  })
  }
)
server.listen(8888,()=>{
  console.log('服务已经启动...端口监听中...');
})