const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : String,
    userid : String,
    password : String,
    email : String
});

mongoose.model('User', UserSchema);