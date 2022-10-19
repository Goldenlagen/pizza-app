const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const orderSchema = new Schema({
    content: {
        type: Array,
        ref: "Pizza"
    },
    paymentStatus: {
        type: Boolean
    },
    orderStatus: {
        type: Boolean
    },
    restaurantId: {
        type : String,
        ref : "Restaurant"
    },
    clientId : {
        type : String,
        required: true,
        ref : "Client"
    }
},{
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;



