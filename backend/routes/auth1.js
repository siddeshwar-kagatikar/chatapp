const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Hey there!I am using whatsapp"
const fetchuser = require('../middleware/fetchuser')

//Create User
router.post('/createuser1', async (req, res) => {
    // If ther are erroers, return bad request and the errors
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success,errors: errors.array() });
    }
    //check wether the user with this email exist
    try {
        let user = await User.findOne({ username: req.body.username })
        if (user) {
            return res.status(400).json({success,error: "sorry a user with this username already exists" })
        }

        // const salt = await bcrypt.genSaltSync(10);
        // const secpass = await bcrypt.hashSync(req.body.password,salt);

        user = await User.create({
            username: req.body.username,
            password: req.body.password
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
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

//Login
router.post('/login1',async (req,res) => {
    try{let success = false
    let user = await User.findOne({ username: req.body.username  })
    if(!user){
        return res.status(400).json({success,error: "sorry incorrect credentials"});
    }
    if(req.body.password !== user.password){
        return res.status(400).json({success,error: "sorry incorrect credentials"});
    }

    const data = {
        user:{
            id: user.id
        }
    }
    success = true
    const autoken = jwt.sign(data,JWT_SECRET);
    res.json({success,autoken})
    }catch(error){
        console.error(error.message);
        res.status(500).send("error at backend");
    }

})

router.post('/getuser1',fetchuser,async (req,res) => {
    try{
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user)
    }catch(error){
        console.error(error.message);
        res.status(500).send("error at backend");
    }
})

module.exports = router