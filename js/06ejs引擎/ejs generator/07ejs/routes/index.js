var express = require('express');
var router = express.Router();
const formidable=require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait',(req,res)=>{
  res.render('portrait');
})

router.post('/portrait',(req,res)=>{
  const form = new formidable.IncomingForm({
    multiples:true,
    uploadDir:__dirname+'/../public/images',
    keepExtensions:true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //portrait是一个数组，需要用数组下标获取newFilename的值
    
    let url='/images/'+files.portrait[0].newFilename;

    console.log(fields);
    console.log(files);
    res.send(url);
  });
})

module.exports = router;
