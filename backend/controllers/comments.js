const modelComments = require("../models/comments");
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
    modelComments.find()
        .then((comments) => {
            res.status(200).json(comments);
        })
}
exports.deleteComment = (req, res) => {
    modelComments.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(201).json({message: "Commentaire Supprimé"});
    })
}