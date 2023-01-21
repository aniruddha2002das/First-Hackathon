const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usr_schema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        minlength:2,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    }
})

// We are encrypting our password
usr_schema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password,12);
    this.confirm_password = await bcrypt.hash(this.confirm_password,12);
    next();
});


const usr_signIn = new mongoose.model('usr_signIn',usr_schema);

module.exports = usr_signIn;
