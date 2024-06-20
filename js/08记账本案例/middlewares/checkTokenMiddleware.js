const jwt = require('jsonwebtoken');
const { secret } = require('../config/config')
module.exports = (req, res, next) => {
  let token = req.get('token');
  if (!token) {
    return res.json({
      code: '2005',
      msg: 'token缺失',
      data: null
    })
  }
  jwt.verify(token, secret, (err, data) => {
    if (err) {
      return res.json({
        code: '2006',
        msg: 'token校验失败',
        data: null
      })
    }
    //保存用户信息 在请求对象中添加user属性保存用户信息
    req.user = data;
    next();
  })

}