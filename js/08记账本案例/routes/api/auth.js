var express = require('express');
var router = express.Router();
const md5 = require('md5');
const userModel = require('../../modules/userModel');
const jwt = require('jsonwebtoken');
const {secret}=require('../../config/config')
//登录操作
router.post('/login', (req, res) => {
  let { username, password } = req.body;
  userModel.findOne({ username: username, password: md5(password) }).then(data => {
    
    console.log(data)
    //判断是否读取到数据
    if (!data) {
      return res.json({
        code: '2002',
        msg: '用户名或密码错误',
        data: null
      })
    }
    //创建token
    let token = jwt.sign({
      uaername: data.username,
      _id: data._id
    }, secret, {
      expiresIn: 60 * 60 * 24 * 7
    });
    //响应token
    res.json({
      code: '0000',
      msg: '登录成功',
      data: token
    })
    //写入session
    // req.session.username=data.username;
    // req.session._id=data._id;
  }).catch(error => {
    return res.json({
      code: '2001',
      msg: '登录失败',
      data: null
    })
  })
})

//退出
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render('success', { msg: '退出成功', url: '/login' });
  })
})
module.exports = router;