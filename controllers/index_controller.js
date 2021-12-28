
// render home page
module.exports.home = async function (request, response) {
    response.render("home");
}

// render sign in page
module.exports.signIn = async function (request, response) {
    response.render("sign-in");
}

// render sign up page
module.exports.signUp = async function (request, response) {
    response.render("sign-up");
}