const mongoose = require('mongoose');
const {Schema} = mongoose;

const PatientSchema = new Schema({
    doctortype:{
        type : String,
        required: true
    },
    history:{
        type : Array, 
        required: false  
    }
})

const Patient = mongoose.model('patient',PatientSchema);
Patient.createIndexes();
module.exports = Patient;