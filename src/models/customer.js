const {Schema, model} = require('mongoose')

const customerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    dBirth:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
})

module.exports = model('Customer', customerSchema);

