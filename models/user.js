// require mongoose
const mongoose = require("mongoose");
const path = require("path");

// create schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    auth: {
        type: String
    }
}, {
    timestamps: true
})

// export schema 
const User = mongoose.model("User", userSchema);

module.exports = User;