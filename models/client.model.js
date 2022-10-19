const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ClientSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    card_number: {
        type: String
    }
}, {
    timestamps: true
});

let clientSchema = mongoose.model('Client', ClientSchema);

module.exports = clientSchema;
