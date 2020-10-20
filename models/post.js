const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ContactSchema = new Schema({
    Chapter_Name : String,
    email:String,
    phone:String,
    address:String
});


module.exports = mongoose.model("postcontact",ContactSchema);