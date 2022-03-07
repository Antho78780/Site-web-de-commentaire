const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Users = new mongoose.Schema({
    prenom: {type: String, required: true},
    nom: {type: String, required: true},
    email: {type: String, required: true, index:true, unique: true},
    password: {type: String, required: true}
})

Users.plugin(uniqueValidator);
module.exports = mongoose.model("users", Users)