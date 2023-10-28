const Room = require('../models/Room')
const express = require('express');
const router = express.Router();

//fetchall data
router.post('/fetchdata', async (req, res) => {
    try{
        const data = await Room.find({room_no: req.body.room_no})
        res.json(data)        
    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occured while fetching data");
    }
})

//create room
router.post('/createroom', async (req,res) => {
    try{
        const {room_no} = req.body
        const exist = await Room.find({room_no: room_no})
        if(exist.length === 0){
        const room = await Room.create({
            room_no,data:[]
        })}
        res.json(room_no)
    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occured while creating data");
    }
})

//updateroom
router.post('/updateroom', async (req,res) => {
    try{
        const {room_no,data} = req.body
        const del = await Room.findOneAndDelete({room_no: req.body.room_no})
        console.log(del)
        const room = await Room.create({
            room_no,data
        })
        res.json(room)
    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occured while adding data");
    }
})

module.exports = router