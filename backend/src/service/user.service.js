const User = require('../model/user.model');

module.exports.findAll = (req,res,next)=>{
    return User.find()
    .then (list => res.json(list));
}