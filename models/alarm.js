const mongoose = require('mongoose')

const alarmsSchema = new mongoose.Schema({

    Name: {

        type: String,
        required: true
    },

    Severity:{
        type: String,
        required: true

    },
    desc:{
        type: String,
        required: true

    },
    owner:{
        type: String,
        required: true

    },
    status:{
        type: String,
        default: NaN
    }
})
 module.exports = mongoose.model('Alarm', alarmsSchema)