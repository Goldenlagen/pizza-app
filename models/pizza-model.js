const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    _id: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const Pizza = mongoose.model('pizza_api_collections', pizzaSchema)
module.exports = Pizza;



