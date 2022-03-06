const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    prenom: {type: String, required: true},
    nom: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = Users;