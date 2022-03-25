const express = require("express");
const router = express.Router();

const controllersComments = require("../controllers/comments");

router.post("/createComment/:id", controllersComments.createComment);
router.get("/getAllComments/:id", controllersComments.getAllComments);
router.delete("/deleteComment/:id", controllersComments.deleteComment);

module.exports = router;