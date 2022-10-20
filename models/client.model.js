const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenSecret = 'iP8D&H0!ci2z';

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

ClientSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = bcrypt.hashSync(this.password, 8);
    } else {
        return next();
    }
});

ClientSchema.methods.comparePassword = function (pw) {
    return bcrypt.compareSync(pw, this.password);
};

ClientSchema.methods.getJWT = function () {
    return jwt.sign({ id: this._id.toString() }, tokenSecret, {
        expiresIn: '1h'
    });
};

let clientSchema = mongoose.model('Client', ClientSchema);

module.exports = clientSchema;
