const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenSecret = 'iP8H&H0!ci2z';

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

EmployeeSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = bcrypt.hashSync(this.password, 8);
    } else {
        return next();
    }
});

EmployeeSchema.methods.comparePassword = function (pw) {
    return bcrypt.compareSync(pw, this.password);
};

EmployeeSchema.methods.getJWT = function () {
    return jwt.sign({ id: this._id.toString() }, tokenSecret, {
        expiresIn: '1h'
    });
};

let employeeSchema = mongoose.model('Employee', EmployeeSchema);



module.exports = employeeSchema;
