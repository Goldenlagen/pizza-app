const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let RestaurantSchema = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }]
}, {
    timestamps: true
});

let restaurantSchema = mongoose.model('Restaurant', RestaurantSchema);

module.exports = restaurantSchema;
