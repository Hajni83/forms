const express = require('express');
const User = require('../model/user.model');
const controller = require('../service/user.service');

const router=express.Router();

router.get('/', (req,res,next)=>{
    return controller.findAll(req,res,next);
});

module.exports=router;