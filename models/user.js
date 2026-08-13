const { Schema } = require('mongoose')

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
}, { timestamps: true } );