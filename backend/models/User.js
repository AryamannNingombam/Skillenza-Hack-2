const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');



const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },

    address: {
        type: mongoose.Types.ObjectId,
        required: true,

    }

})

UserSchema.methods.generateAuthToken = function (payload) {
    token = jwt.sign(
        payload,
        process.env.JWT_TOKEN_HASH, {
            expiresIn: 360000
        }
    );
    return token;
}

const User = mongoose.model('User', UserSchema);


module.exports = User;