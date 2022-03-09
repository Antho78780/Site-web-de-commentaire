
const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    userId: {type: String, required: true},
    post: {type: String, required: true},
    comments: {type: Array, required: true},
    datePost: {type: Date},
    image: {type: String}
})

module.exports = mongoose.model("post", Post);