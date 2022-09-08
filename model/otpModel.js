const mongoose = require('mongoose')
const otpModel = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true,
    },
    code: {
        type: Number,
    },
    expireIn: {
        type: Number,
    },
}, {
    collection: "OTP",
    timestamps: true
})

module.exports = mongoose.model("otp", otpModel)