const express = require("express");
const router = express.Router();
const passport = require("passport");

const usersController = require("../controllers/users_controller");

// create a user
router.post("/create", usersController.create);


// use passpt as a middleware to auth
router.post("/create-session", passport.authenticate(
    "local",
    { failureRedirect: "/sign-in" }
), usersController.createSession);

// sign-out
router.get("/sign-out", usersController.destroySession);

// route for google authentication
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// callback for google authentication and create session
router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/sign-in" }), usersController.createSession);

// show user profile
router.get("/profile", passport.checkAuthentication, usersController.profile);

// update profile
router.post("/update", passport.checkAuthentication, usersController.update);

// reset password with old password
router.post("/reset-password", passport.checkAuthentication, usersController.resetPassword);

// reset password with access token
router.get("/forgot-password", passport.checkSessionPresent, usersController.forgotPassword);

// send mail for forgetting password
router.post("/send-mail-forgot", passport.checkSessionPresent, usersController.sendMailForgot);

// reset password with access token render
router.get("/security-reset-password", usersController.securityResetPassword);

// reset password with access token process
router.post("/security-reset-password", usersController.resetPasswordByAcessToken);

// chechSessionPresent throws to '/' route and checkAuthenticationPresent sends to /sign-in

module.exports = router;