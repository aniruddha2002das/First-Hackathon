const usr_signIn = require('../models/userSignIn');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
app.use(bodyParser.urlencoded({ extended: true }));

exports.createUser = async (req, res) => {
    try {
        const newUser = new usr_signIn(req.body);
        // Here password will be encrypted
        const result = await newUser.save();
        res.status(200).send(result);
        // const newUser = await usr_signIn.create(req.body);
        // res.status(200).send(newUser);
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

// var mail;
exports.checkID = async (req, res) => {
    try {

        const pass = req.body.password;
        const mail = req.body.email;
        const ursEmail = await usr_signIn.findOne({ email: mail });
        if (ursEmail != null) {
            const password_match = await bcrypt.compare(pass, ursEmail.password);
            // console.log(pass);
            // console.log(mail);
            if (password_match) {
                return res.json({status:'ok',user: true})
            } else {
                return res.json({status:'error',user: false})
            }

        } else {
            res.send("Email does not exist.");
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
};
