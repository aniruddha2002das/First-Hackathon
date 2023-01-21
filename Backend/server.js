const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 8050;
const database_url = process.env.DATABASE_URL || 'mongodb://localhost:27017/First_Hackathon';
const connectDatabase = require('./db/connection');
const SignInRouter = require('./routers/userSignInRouter');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
const LogInRouter = require('./routers/userLogInRouter');
const flightRouter = require('./routers/FlightRouter');
// connection with database
connectDatabase(database_url);
app.use(express.json());
app.use(cors());
app.use('/register', SignInRouter);
app.use('/login', LogInRouter);
app.use('/flights',flightRouter);



// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: '/airportsapi/v1/airports/{icao_code}',
// //   params: {state: 'CA', source: 'airbnb', city: 'Los Angeles', zip_code: '90291'},
//   headers: {
//     'X-RapidAPI-Key': '25c45287d9msh50ea2b5a2b76e31p1bc6bdjsn329bc1706e10',
//     'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
