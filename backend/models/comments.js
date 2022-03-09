const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
    userId: {type: String},
    postId: {type: String},
    comment: {type: String}
})

module.exports = mongoose.model("Comments", Comments);