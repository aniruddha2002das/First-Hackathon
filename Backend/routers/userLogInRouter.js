const express = require('express');
const userSignInController = require('../controllers/userSignInController');
const router2 = express.Router();

router2.route("/").post(userSignInController.checkID);

module.exports = router2;