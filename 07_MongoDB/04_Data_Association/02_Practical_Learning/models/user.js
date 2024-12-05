const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/miniproject');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    age: Number,
    profilepic: {
        type: String,
        default: "default.webp"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});

module.exports = mongoose.model("user", userSchema);