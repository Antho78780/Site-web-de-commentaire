const express = require("express");
const app = express();

app.use(express.json());

const dotenv = require("dotenv");
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://Antho78:LABRADOR78@clustersiteweb.narmn.mongodb.net/ClusterSiteWeb?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true}) 
.then(() => {
    console.log("Connexion mongoose réussi")
})
.catch(() => {
    console.log("Connexion mongoose echoué")
})

const routeUsers = require("./routes/users");
app.use("/users", routeUsers)

module.exports = app;