const { boolean } = require('joi');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    // activities:[{}]
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    userMail:{type: String},
    password:{type: String, required: true},
    imagenUser:{type: String, required: true},
    userCountry:{type:String,  required: true},
    google:{type:Boolean, default:false}
})
const User = mongoose.model('user', UserSchema)
module.exports = User;
