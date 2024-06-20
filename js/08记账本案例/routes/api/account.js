const express = require('express');
const router = express.Router();
//导入accountModel
const accountModel = require('../../modules/accountModel');
const moment = require('moment')
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware');

//添加账单页面
router.get('/account',checkTokenMiddleware, function (req, res) {
  res.render('account');
});

router.post('/account/success',checkTokenMiddleware, (req, res) => {
  console.log(req.body);

  accountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  }).then((data) => {
    res.json({
      code: '0000',
      msg: '创建成功',
      data: data
    })
  }).catch((error) => {
    res.json({
      code: '1001',
      msg: '创建失败',
      data: null
    })
  })
})
//记账本的列表
router.get('/account/get',checkTokenMiddleware, (req, res) => {
console.log(req.user);
  accountModel.find().sort({ time: -1 }).then((data) => {
    res.json({
      code: '0000',
      msg: '读取成功',
      data: data
    })
  }).catch((error) => {
    res.json({
      code: '1002',
      msg: '读取失败',
      data: null
    })
  })
})

router.delete('/account/get/:id',checkTokenMiddleware, (req, res) => {
  let id = req.params.id;
  accountModel.deleteOne({ _id: id }).then((data) => {
    res.json({
      code: '0000',
      mag: '删除成功',
      data: data
    })
  }).catch((error) => {
    res.json({
      code: '1003',
      msg: '删除失败',
      data: {}
    })
  })
})
//获取单个账单记录
router.get('/account/:id',checkTokenMiddleware, (req, res) => {
  let { id } = req.params;
  accountModel.findById(id).then((data) => {
    res.json({
      code: '0000',
      msg: '查找成功',
      data: data
    })
  }).catch((error) => {
    res.json({
      code: '1004',
      msg: '查找失败',
      data: {}
    })
  })
})
//更新单个账单记录
router.patch('/account/:id',checkTokenMiddleware, (req, res) => {
  let { id } = req.params;
  accountModel.updateOne({ _id: id }, req.body).then((data) => {
    accountModel.findById(id).then((data) => {
      res.json({
        code: '0000',
        msg: '更新成功',
        data: data
      })
    }).catch((error) => {
      res.json({
        code: '1004',
        msg: '更新失败',
        data: {}
      })
    })
  }).catch((error) => {
    res.json({
      code: '1004',
      msg: '更新失败',
      data: {}
    })
  })
})

module.exports = router;
