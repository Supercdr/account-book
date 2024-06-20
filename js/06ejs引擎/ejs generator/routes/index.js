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
  const form = new formidable.IncomingForm({multiples:true});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    res.render('portrait',{ fields, files });
  });
})
router.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).render('error',{error:err});
})
module.exports = router;