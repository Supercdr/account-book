var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//导入express-session
var session = require('express-session');
var MongoStore = require('connect-mongo');

var indexRouter = require('./routes/web/index');
const accountRouter = require('./routes/api/account');
const authRouter = require('./routes/web/auth');
const config = require('./config/config');
const authapiRouter = require('./routes/api/auth')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//设置session的中间件
app.use(session({
  name: 'sid',
  secret: 'atguigu',
  savaUninitialized: false,
  resave: true,
  store: MongoStore.create({
    mongoUrl: `mongodb://${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`
  }),
  cookie: {
    httpOnly: true,
    //设置session时长为7天
    maxAge: 1000 * 60 * 60 * 24 * 7
  },
}))

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accountRouter);
app.use('/api', authapiRouter);
// app.get('/login', (req, res) => {
//   if (req.query.username === 'admin' && req.query.password === '123') {
//     req.session.username = 'admin';
//     req.session.uid = 'fyhedaghda';
//     res.send(`登录成功，欢迎${req.session.username}`);

//   } else {
//     res.send('登录失败');
//   }
// })
// app.get('/cart', (req, res) => {
//   if (req.session.username) {
//     res.send('购物车页面');
//   } else {
//     res.send('您还没有登录');
//   }
// })
// //清除session
// app.get('/logout', (req, res) => {
//   req.session.destroy(() => {
//     res.send('退出登录');
//   })
// })
// catch 404 and forward to error handler 创建404页面
app.use(function (req, res, next) {
  res.render('404');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
