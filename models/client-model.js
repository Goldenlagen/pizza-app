const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    _id: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    }
}, {
    timestamps: true
})

const Client = mongoose.model('client_api_collections', clientSchema)
module.exports = Client;



