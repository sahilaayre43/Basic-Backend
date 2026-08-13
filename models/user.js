const { Schema, Model } = require('mongoose')

const userSchema = new Schema ({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    salt: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    profileImageURL: {
        type: String,
        default: "/images/images.png",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
}, { timestamps: true } );

const User = model('user', userSchema)

module.exports = User;