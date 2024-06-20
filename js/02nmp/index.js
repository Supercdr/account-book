//导入uniq包
const uniq=require('uniq');
let arr=[1,2,3,4,5,4,3,2,1];
const result=uniq(arr);    //uniq方法可对数组去重
console.log(result);  // [ 1, 2, 3, 4, 5 ]
