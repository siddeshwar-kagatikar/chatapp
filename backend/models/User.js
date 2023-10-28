const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required:[true,'Please add a name'],
    },
    mobile_no:{
        type : Number ,  //mobile number should be unique and not empty.
        required: true  
    }
})

const User = mongoose.model('user',UserSchema);
User.createIndexes();
module.exports = User;