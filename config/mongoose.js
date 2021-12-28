// require it
const mongoose = require("mongoose");

// connect with DB
mongoose.connect("mongodb://localhost/auth-system", {
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connecting Database"));


db.once("open", function () {
    console.log("Connected to Database :: MongoDB!!!");
})


// export db
module.exports = db;


