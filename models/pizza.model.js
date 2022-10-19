const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PizzaSchema = new Schema({
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
},{
    timestamps: true
})

let pizzaSchema = mongoose.model('Pizza', PizzaSchema)

module.exports = pizzaSchema;



