var express = require('express');
var router = express.Router();
const md5 = require('md5');
const userModel = require('../../modules/userModel');
//首页
router.get('/',(req,res)=>{
  res.redirect('account')
})
//注册页面
router.get('/reg', (req, res) => {
  res.render('auth/reg');
})
//注册操作
router.post('/reg', (req, res) => {
  console.log(req.body);
  userModel.create({ ...req.body, password: md5(req.body.password) }).then(data => {
    res.render('account');
  }).catch(error => {
    res.send('注册失败');
  })

})
//登录页面
router.get('/login', (req, res) => {
  res.render('auth/login');
})
//登录操作
router.post('/login', (req, res) => {
  let { username, password } = req.body;
  userModel.findOne({ username: username, password: md5(password) }).then(data => {
    console.log(data)
    //判断是否读取到数据
    if (!data) {
      return res.send('用户名或密码错误');
    }
    req.session.username = data.username;
    req.session._id = data._id;
    res.render('account');
    //写入session
  }).catch(error => {
    res.send('登录失败');
  })
})

//退出
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render('success', { msg: '退出成功', url: '/login' });
  })
})
module.exports = router;