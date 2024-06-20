const db = require('./db/connection');
const bookModel = require('./modules/bookModel')
const movieModel = require('./modules/movieModel');
db(() => {
  console.log('数据库连接成功');
  // create新增一个数据 接受两个参数
  // bookModel.create({
  //     name: '许三观卖血记',
  //     author: '余华',
  //     type: '现实主义小说',
  //     public: new Date(),
  //     price: 18.8
  //     }).then((data)=>{
  //       console.log(data)
  //     }).catch((error)=>{
  //       console.log(error)
  //     })
  //insertMary新增多个数据
  // bookModel.insertMany([{
  //   name: '1984',
  //   author: '乔治·奥威尔',
  //   type: '反乌托邦小说',
  //   public: new Date(),
  //   price: 15.99
  //   },{
  //     name: '鬼吹灯',
  //     author: '天下霸唱',
  //     type: '冒险',
  //     public: new Date(),
  //     price: 29.99
  // },{
  //   name: '活着',
  //   author: '余华',
  //   type: '现实主义小说',
  //   public: new Date(),
  //   price: 18.8
  //   },{
  //     name: '三体',
  //     author: '刘慈欣',
  //     type: '科幻',
  //     public: new Date(),
  //     price: 20.0
  // },{
  //   name: '百年孤独',
  //   author: '加西亚·马尔克斯',
  //   type: '魔幻现实主义',
  //   public: new Date(),
  //   price: 22.3
  //   },{
  //     name: '哈利·波特与魔法石',
  //     author: 'J.K.罗琳',
  //     type: '奇幻',
  //     public: new Date(),
  //     price: 24.99
  // },{
  //   name: '傲慢与偏见',
  //   author: '简·奥斯汀',
  //   type: '经典文学',
  //   public: new Date(),
  //   price: 16.5
  //   },{
  //     name: '解忧杂货店',
  //     author: '东野圭吾',
  //     type: '现代小说',
  //     public: new Date(),
  //     price: 21.2
  // }]
  // ).then((data)=>{
  //     console.log(data);
  //   }).catch((error)=>{
  //     //断开连接
  //     // mongoose.disconnect();
  //     console.log(error);
  //   })
  //更新一个对象updataOne 
  // bookModel.updateOne({author:'J.K.罗琳'},{name:'哈利波特'}).then((data)=>{
  //   console.log(data)
  // }).catch((error)=>{
  //   mongoose.disconnect();
  //   console.log(error)
  // })
  //更新多个updateMany对象
  // bookModel.updateMany({author:'余华'},{price:9.9}).then((data)=>{
  //   console.log(data)
  // }).catch((error)=>{
  //   console.log(error)
  // })
  //读取单个数据findOne
  // bookModel.findOne({name:'红楼梦'}).then((data)=>{
  //   console.log(data);
  // }).catch((error)=>{
  //   console.log(error)
  // })
  //通过id读取数据
  // bookModel.findById('664588046a1db0099ad70286').then((data)=>{
  //     console.log(data);
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  //读取多条数据或者全部数据 find
  // bookModel.find({}).then((data)=>{
  //     console.log(data);
  //   }).catch((error)=>{
  //     console.log(error)
  //   })

  //条件控制查找 查找price小于20的书籍
  // bookModel.find({price:{$lt:20}}).then((data)=>{
  //       console.log(data);
  //     }).catch((error)=>{
  //       console.log(error)
  //     })
  //查找作者是余华或者价格大于20的 {$or:[{},{}]}
  // bookModel.find({$or:[{author:'曹雪芹'},{price:{$lt:15}}]}).then((data)=>{
  //         console.log(data);
  //       }).catch((error)=>{
  //         console.log(error)
  //       })
  //查找name中含有‘三’的 使用正则表达式 name:/三/ 或 name:new RegExp('三')
  // bookModel.find({name:new RegExp('三')}).then((data)=>{
  //         console.log(data);
  //       }).catch((error)=>{
  //         console.log(error)
  //       })
  //字段筛选 排序 截取
  bookModel.find({})
    .select({ name: 1, price: 1, _id: 0 })
    .sort({ price: 1 })
    .skip(3).limit(3)
    .then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error)
    })

  // movieModel.create({
  //   name: '千与千寻',
  //   director: '宫崎骏',
  //   country: 'Japan'
  // }).then((data) => {
  //   console.log(data);
  // }).catch((error) => {
  //   console.log(error)
  // })

});