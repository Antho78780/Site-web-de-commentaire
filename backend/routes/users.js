const express = require("express");
const router = express.Router();

const controllersUsers = require("../controllers/users");

router.post("/register", controllersUsers.register);
router.post("/login", controllersUsers.login);
router.get("/getAllUsers", controllersUsers.getAllUsers);
router.get("/getOneUser/:id", controllersUsers.getOneUser);
router.put("/image/:id", controllersUsers.createImage)

module.exports = router;