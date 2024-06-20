var express = require('express');
var router = express.Router();
//导入lowdb 可以存储数据
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
//  //写入存储数据文件的绝对路径
// const adapter = new FileSync(__dirname+'/../data/data.json')
// //创建lowdb对象
// const db = low(adapter)
//导入shortid
// const shortid=require('shortid');
//导入accountModel
const accountModel = require('../../modules/accountModel');
const moment = require('moment')
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware')

/* GET home page. */
router.get('/account', checkLoginMiddleware, function (req, res) {
  res.render('account');
});

router.post('/account/success', checkLoginMiddleware, (req, res) => {
  console.log(req.body);
  //写入account数据库
  accountModel.create({
    ...req.body,
    //req.body中的time属性是字符串形式 需要使用moment模块将其转换为日期形式才能写入数据库中
    time: moment(req.body.time).toDate()
  }).then((data) => {
    res.render('success', { msg: '添加成功哦~', url: '/account/get' });
    // console.log(data)
  }).catch((error) => {
    res.status(500).send('创建失败');
    console.log(error)
  })
  //生成id属性
  // let id=shortid.generate();
  // //将id属性和要存储的数据添加到一起，并且req.body对象要展开
  // //利用lowdb对象将请求体对象存储到数据文件中，unshift方法可以在数组的前面添加数据
  // db.get('accounts').unshift({id:id,...req.body}).write();
})

router.get('/account/get', checkLoginMiddleware, (req, res) => {

  //通过db对象获取数据 不要忘记后面的value()方法
  // let account=db.get('accounts').value();
  accountModel.find().sort({ time: -1 }).then((data) => {
    // console.log(data)
    //将日期转换为年月日的格式
    // console.log(moment(data.time).format('YYYY-MM-DD'))
    res.render('get', { account: data, moment: moment });
  }).catch((error) => {
    res.status(500).send('查找错误');
    console.log(error)
  })
})

router.get('/account/get/:id', checkLoginMiddleware, (req, res) => {
  let id = req.params.id;
  //删除数据
  // db.get('accounts').remove({id:id}).write();
  accountModel.deleteOne({ _id: id }).then((data) => {
    res.render('success', { msg: '删除成功', url: '/account/get' })
  }).catch((error) => {
    res.send('删除失败')
    console.log(error)
  })
})
module.exports = router;
