const mongoose=require('mongoose')
let movieSchema=new mongoose.Schema({
  name:{
    type:String,
    unique:true
  },
  director:String,
  country:String
});
let movieModel=mongoose.model('movie',movieSchema);

module.exports=movieModel;