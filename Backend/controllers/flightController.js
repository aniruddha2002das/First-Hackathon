const axios = require("axios");
const fs = require("fs");
const xml2js = require("xml2js");
const util = require("util");
const parser = new xml2js.Parser();


exports.getAllFlights = (req,res) => {
    
    const options = {
        method: 'GET',
        url: 'https://timetable-lookup.p.rapidapi.com/TimeTable/BOM/CCU/20230125/',
        headers: {
            'X-RapidAPI-Key': 'e29b4b7d59msh9a96fe432d8d2b9p137461jsn842c94906224',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        parser.parseString(response.data, (err, result) => {
            // console.log(util.inspect(result, false, null, true));
            console.log(JSON.stringify(result));
        });
        // console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};


