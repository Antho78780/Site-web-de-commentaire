const modelsUsers = require("../models/users");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.mdp, 10, (err, hash) => {
        modelsUsers.create({
            userName: req.body.userName,
            prenom: req.body.prenom, 
            nom: req.body.nom,
            email: req.body.email,
            password: hash
        })
            .then((userRegister) => {
                res.status(201).json(userRegister);
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })
}

exports.login = (req, res) => {
    console.log(req.body);
    modelsUsers.findOne({
        email: req.body.email
    })
        .then((user) => {
            if (user) {
                bcrypt.compare(req.body.mdp, user.password)
                    .then((controlMdp) => {
                        if (controlMdp) {
                            res.status(200).json(
                                {
                                    userId: user._id,
                                    message: "Compte connecté"
                                }
                            )
                        }
                        else {
                            res.status(400).json({ error: "mot de passe incorrect" })
                        }
                    })
            }
            else {
                res.status(400).json({ error: "Email incorrect" });
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

exports.getAllUsers = (req, res) => {
    modelsUsers.find()
        .then((users) => {
            res.status(200).json(users)
        })
}

exports.getOneUser = (req, res) => {
    console.log(req.params)
    modelsUsers.findById(req.params.id)
        .then((user) => {
            res.status(200).json(user)
        })
}
