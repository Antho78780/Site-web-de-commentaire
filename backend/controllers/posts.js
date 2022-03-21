const modelsPosts = require("../models/post");

exports.postCreate = (req, res) => {
    modelsPosts.create({
        userId: req.body.userId,
        post: req.body.post,
        comments: [],
        datePost: new Date()
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

exports.deletePost = (req, res) => {
    modelsPosts.findByIdAndDelete(req.params.id)
    .then((deletePost) => {
        res.status(201).json(deletePost);
    })
}