const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String
},
{
  timestamps:true
});

module.exports=mongoose.model('User', UserSchema);
