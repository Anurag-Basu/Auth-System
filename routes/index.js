const express = require("express");
const router = express.Router();
const passport = require("passport");

const indexController = require("../controllers/index_controller")

// for home page if isn't signed in throw to sign-in
router.get("/", passport.checkAuthentication, indexController.home);

// for sign in page if signed in throw to home
router.get("/sign-in", passport.checkSessionPresent, indexController.signIn);

// for sign up page if signed in throw to home
router.get("/sign-up", passport.checkSessionPresent, indexController.signUp);

// for user routes
router.use("/users", require("./users"));


module.exports = router;