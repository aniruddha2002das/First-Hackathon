const mongoose = require('mongoose');

const Air_trip = new mongoose.Schema({
    // trip:[
    //     {
    //         from_air: String,
    //         to_air: String,
    //         travel_date: String
    //     }
    // ]

    email: {
        type: String,
        default: 'das.aniruddha655@gmail.com'
    },
    from_air:{
        type: String,
        required: true
    },
    to_air:{
        type: String,
        required: true
    },
    travel_date: {
        type: String,
        required: true
    },
    Departure_date: {
        type: String,
        required: true
    },
    Departure_time: {
        type: String,
        required: true
    },
    Arival_date: {
        type: String,
        required: true
    },
    Arival_time: {
        type: String,
        required: true
    },
    CompanyShortName:{
        type: String,
        required: true
    },
    totalTime:{
        type: String,
        required: true
    }
})


const Air_tripCollection = new mongoose.model('Air_tripCollection',Air_trip);

module.exports = Air_tripCollection;
