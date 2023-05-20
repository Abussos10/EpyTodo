const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register");
const loginController = require("../controllers/login");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public/" });
});

router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});

// POST route for registration
router.post("/register", registerController);

// POST route for login
router.post("/login", loginController);

module.exports = router;
