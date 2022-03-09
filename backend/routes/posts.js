const express = require("express");
const router = express.Router();

const controllersPostsEtComments = require("../controllers/posts");

router.post("/postCreate", controllersPostsEtComments.postCreate);
router.get("/getAllPosts", controllersPostsEtComments.getAllPosts);

router.post("/createComment/:id", controllersPostsEtComments.createComment);
router.get("/getAllComments", controllersPostsEtComments.getAllComments)

module.exports = router;