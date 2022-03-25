const modelComments = require("../models/comments");
const modelPosts = require("../models/post");

exports.createComment = (req, res) => {
    modelComments.create({
        userId: req.body.userId,
        postId: req.params.id,
        comment: req.body.comment,
        datePost: new Date()
    })
        .then((comment) => {
            res.status(201).json(comment)
        })

}

exports.getAllComments = (req, res) => {
   modelPosts.findById(req.params.id)
   .then((post) => {
       modelComments.find({
           postId: {$in: [post._id]}
       })
       .then((comments) => {
            res.status(201).json(comments) 
       })
   })
}
exports.deleteComment = (req, res) => {
    modelComments.findByIdAndDelete(req.params.id)
    .then((deleteComment) => {
        res.status(201).json(deleteComment);
    })
}