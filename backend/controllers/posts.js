const modelsPosts = require("../models/post");

exports.postCreate = (req, res) => {
    console.log(req.body)
    modelsPosts.create({
        userId: req.body.userId,
        post: req.body.post,
        comments: []
    })
    .then((post) => {
        res.status(201).json(post)
    })
}
exports.getAllPosts = (req, res) => {
    modelsPosts.find()
    .then((posts) => {
        res.status(200).json(posts)
    })
}