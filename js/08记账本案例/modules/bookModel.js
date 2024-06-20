
const mongoose=require('mongoose')
//创建文档的结构对象 设置集合中文档的属性以及属性值的类型
let bookSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,      //设置为必填
    unique:true,      //设置为唯一性，文档中不能有重复值
  },
  author:String,
  type:{
    type:String,
    enum:['志怪','奇幻','冒险','经典文学','言情','魔幻现实主义','悬疑','恐怖','反乌托邦小说','古典小说','天下霸唱','现实主义小说','科幻','现代小说'],
  },
  public:Date,
  price:Number
})
 
//创建模型对象 对文档操作的封装对象(可对文档完成增删改查等所有功能的操作)
//books是集合名称 bookSchema是结构对象
let bookModel=mongoose.model('books',bookSchema);
 
module.exports=bookModel;