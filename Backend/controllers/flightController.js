const axios = require("axios");
const fs = require("fs");
const xml2js = require("xml2js");
const util = require("util");
const parser = new xml2js.Parser();
const Air_tripCollection = require('../models/trip');
const express = require('express');
const x = require('../controllers/userSignInController');

app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllFlights = (req,res) => {
    const from_air = req.body.from_air;
    const to_air = req.body.to_air;
    const travel_date = req.body.travel_date;
    const resDate = travel_date.replace(/-/gi,"")
    const options = {
        method: 'GET',
        url: `https://timetable-lookup.p.rapidapi.com/TimeTable/${from_air}/${to_air}/${resDate}/`,
        headers: {
            'X-RapidAPI-Key': 'e29b4b7d59msh9a96fe432d8d2b9p137461jsn842c94906224',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        parser.parseString(response.data, (err, result) => {
            // console.log(util.inspect(result, false, null, true));
            res.send(JSON.stringify(result));
        });
        // console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    // console.log(req.body);
};



exports.bookingFlight = async (req,res) => {
    // const result = await usr_booking.create(req.body);
    // try{
    //     const Athe = new Air_tripCollection(req.body);
    //     const newAthe = await Athe.save();
    //     res.status(200).send(newAthe);
    // }
    // catch(err) {
    //     res.status(400).send(err);
    // }

    try{
        // console.log(req.body);
        // let newData = {
        //     email: 'das.aniruddha655@gmail.com'
        // }

        // console.log(newData);
        // var myObject = JSON.parse(req.body);
        // console.log(myObject);
        // // console.log(req.body);
        // myObject.push(newData);
        // var newData2 = JSON.stringify(myObject);

        // console.log(newData2);

        const Athe = new Air_tripCollection(req.body);
        const newAthe = await Athe.save();

        // console.log(newAthe);
        // Air_tripCollection.updateOne()

        // console.log(newAthe);
        res.status(200).send(newAthe);
    }catch(err){
        res.status(400).send(err);
    }
    
    
}


exports.getBookingFlight = async (req,res) => {
    try{
        // let arr = []
        console.log("hi");
        const result1 = await Air_tripCollection.find({email: 'das.aniruddha655@gmail.com'});
        // arr.push(result1);
        const result2 = JSON.stringify(result1);
        // console.log(result2);
        res.status(200).send(result2);

    }
    catch(err){
        res.status(400).send(err);
    }
}