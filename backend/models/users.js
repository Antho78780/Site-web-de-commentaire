const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Users = new mongoose.Schema({
    userName: {type: String, required: true},
    prenom: {type: String, required: true},
    nom: {type: String, required: true},
    email: {type: String, required: true, index:true, unique: true},
    password: {type: String, required: true},
    image: {type: String}
})

Users.plugin(uniqueValidator);
module.exports = mongoose.model("users", Users)