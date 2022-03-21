const express = require("express");
const router = express.Router();

const controllersPosts = require("../controllers/posts");

router.post("/postCreate", controllersPosts.postCreate);
router.get("/getAllPosts", controllersPosts.getAllPosts);
router.delete("/deletePost/:id", controllersPosts.deletePost);

module.exports = router;