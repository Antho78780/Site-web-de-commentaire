const express = require("express");
const router = express.Router();

const controllersUsers = require("../controllers/users");

router.post("/register", controllersUsers.register);
router.post("/login", controllersUsers.login);
router.get("/getAllUsers", controllersUsers.getAllUsers)

module.exports = router;