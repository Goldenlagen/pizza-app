const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
}, {
    timestamps: true
});

let employeeSchema = mongoose.model('Employee', EmployeeSchema);

module.exports = employeeSchema;
