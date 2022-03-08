const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


const moogoose = require("mongoose");

moogoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clustersiteweb.narmn.mongodb.net/${process.env.CLUSTER}?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true}) 
.then(() => {
    console.log("Connexion mongoose réussi")
})
.catch(() => {
    console.log("Connexion mongoose echoué")
})

const routeUsers = require("./routes/users");
const routePosts = require("./routes/posts");

app.use("/users/", routeUsers);
app.use("/posts/", routePosts);

module.exports = app;