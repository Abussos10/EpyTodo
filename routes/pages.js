const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const getUserController = require("../controllers/user");
const checkLoggedIn = require("../controllers/loggedIn");

router.get("/", (req, res) => {
  res.render("index", { user: res.locals.user });
});

router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public/" });
});

router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});

router.get("/user", (req, res) => {
  res.sendFile("user.html", { root: "./public/" });
});

// POST route for registration
router.post("/register", registerController);

// POST route for login
router.post("/login", loginController);

// GET route for user
router.get("/user/:id", getUserController);

module.exports = router;
