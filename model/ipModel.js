const mongoose = require('mongoose');
const ipSchema = new mongoose.Schema({
    ip : {
        type: String,
        required: true,
        unique: true
    },
});


module.exports = mongoose.model('ip', ipSchema);