// require mongoose
const mongoose = require("mongoose");

// Schema
const accessTokenSchema = mongoose.Schema({
    access_token: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    valid: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

// export schema
const AccessTokens = mongoose.model("AccessTokens", accessTokenSchema);

module.exports = AccessTokens;