module.exports = (req, res, next) => {
  //通过session判断是否登录
  if (!req.session.username) {
    console.log(req.session.username)
    return res.redirect('/login');
  }
  next();
}