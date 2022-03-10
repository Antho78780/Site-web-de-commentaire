const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
    userId: {type: String},
    postId: {type: String},
    comment: {type: String},
    datePost: {type: Date},
})

module.exports = mongoose.model("Comments", Comments);