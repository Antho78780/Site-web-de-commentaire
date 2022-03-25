const express = require("express");
const multer = require("multer");
const modelUsers = require("./models/users");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});

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
const routeComments = require("./routes/comments");
app.put("/users/image/:id", upload.single("image"), (req, res) => {
    modelUsers.findById(req.params.id)
    .then((user) => {
        user.update({
            image: `${req.protocol}://${req.get("host")}/images/${req.file.filename} `
        })
        .then(() => {
            res.status(201).json(user);
        })
    })
})
app.use("/users/", routeUsers);
app.use("/posts/", routePosts);
app.use("/comments/", routeComments);
app.use("/images/", express.static(path.join(__dirname, "/images/")))

module.exports = app;