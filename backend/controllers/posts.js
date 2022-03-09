const modelsPosts = require("../models/post");
const modelComments = require("../models/comments");

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

exports.createComment = (req, res) => {
    modelComments.create({
        userId: req.body.userId,
        postId: req.params.id,
        comment: req.body.comment
    })
    .then((comment) => {
        res.status(201).json(comment)
    })
   
}

exports.getAllComments = (req, res) => {
    modelComments.find()
    .then((comments) => {
        res.status(200).json(comments);
    })
}