const fs=require('fs');
const files=fs.readdirSync('./');
console.log(files);
// for(let i=0;i<files.length;i++){
//   let newname='0'+i+'-'+files[i];
//   console.log(newname);
//   fs.renameSync(`./${files[i]}`,`./${newname}`)
// }
files.forEach(item=>{
  item1=item.split('-');
  let [num,data]=item1;   //es6解构赋值
  // console.log(data);
  fs.renameSync(`./${item}`,`./${data}`);  //${}方法必须要用在反引号里面
})
