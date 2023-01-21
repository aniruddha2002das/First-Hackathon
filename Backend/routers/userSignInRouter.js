const express = require('express');
const userSignInController = require('../controllers/userSignInController');
const app = express();
const router1 = express.Router();

router1.route("/").post(userSignInController.createUser)

module.exports = router1;