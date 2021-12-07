const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    userMail:{type: String},
    password:{type: String, required: true},
    imagenUser:{type: String, required: true},
    userCountry:{type:String,  required: true},
})
const User = mongoose.model('user', UserSchema)
module.exports = User;
