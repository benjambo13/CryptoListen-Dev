const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { 
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    siteTime: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    hps: {
        type: Number,
        required: true
    },
    throttle: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User