const express = require('express');
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Hey there!I am using whatsapp"

//Create User
router.post('/createuser', async(req,res) => {
    let success = false
    try{
        let user = User.find({name: req.body.name})
        console.log(user)
        if(user)
        {
            return res.status(400).json({success,error: "sorry a user with this mobile number already exists" })
        }
        
        user = await User.create({
            name: req.body.name,
            mobile_no:req.body.mobile_no
        })
        
        const data = {
            user:{
                id: user.id
            }
        }
        success = true;
        const autoken = jwt.sign(data,JWT_SECRET);
        console.log({success,autoken});
        res.json({success,autoken})
        
    }catch(error){
        console.error(error.message);
        res.status(500).send("failed to create user");
    }
})

//Login
router.post('/login', async (req,res) => {
    let success = false
    try{
        let user=await  User.findOne({mobile_no : req.body.mobile_no})
        if(!user){
            return res.status(400).json({success,error: "sorry incorrect credentials"}); 
        }
        const data = {
            user:{
                id: user.id
            }
        }
        success = true
        const autoken = jwt.sign(data,JWT_SECRET);
        res.json({success,autoken}); 
    }catch(error){
        console.error(error.message);
        res.status(500).send("failed to login");
    }
})

module.exports = router