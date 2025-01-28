const mongoose = require('mongoose');

const blockedIPSchema = new mongoose.Schema({
    ip: {
        type : String,
        required : true,
        unique : true
    },
    blockedAt : {
        type : Date,
        default : Date.now // update the date to the current date
    }

    });

module.exports = mongoose.model('BlockedIP', blockedIPSchema);