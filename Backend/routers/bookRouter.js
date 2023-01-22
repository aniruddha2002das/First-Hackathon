const express = require('express');
const router4 = express.Router();
const bookFlight = require('../controllers/flightController');

router4.route('/').post(bookFlight.bookingFlight).get(bookFlight.getBookingFlight);

module.exports = router4;

