const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
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
    restaurantId: {
        type: String,
        ref: 'Restaurant'
    },
    status: {
        type: String,
        required: true
    }
})

const Employee = mongoose.model('employee_api_collections', employeeSchema)
module.exports = Employee;



