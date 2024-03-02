const mongoose = require('mongoose');
var validator = require("email-validator");

//Đinh dạng trường dữ liệu
var toySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    mobile: {
        type: String
        
    },
    city: {
        type: String
    }
})


mongoose.model('Toy', toySchema);