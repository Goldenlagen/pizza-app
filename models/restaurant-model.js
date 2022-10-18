const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    _id: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    }
})

const Restaurant = mongoose.model('restaurant_api_collections', restaurantSchema)
module.exports = Restaurant;



