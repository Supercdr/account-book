const mongoose=require('mongoose');

let accountSchema=new mongoose.Schema({
  title:String,
  time:Date,
  category:{
    type:Number,
    required:true,
  },
  cost:{
    type:Number,
    required:true
  },
  remark:String,
});

let accountModel=mongoose.model('account',accountSchema);

module.exports=accountModel;