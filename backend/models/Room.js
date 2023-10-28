const mongoose = require('mongoose');
const {Schema} = mongoose;

const RoomSchema = new Schema({
    room_no:{
        type: Number,
        required:[true,'Please add a name'],
    },
    data:{
        type : Array, 
        required: true  
    }
})

const Room = mongoose.model('room',RoomSchema);
Room.createIndexes();
module.exports = Room;