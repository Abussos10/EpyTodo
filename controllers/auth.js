const express = require("express");
const register = require("./register");
const login = require("./login");
const router = express.Router();

router.post("/register", register)
router.post("/login", register);

module.exports = router;