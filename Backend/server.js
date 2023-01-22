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
const bookingRouter = require('./routers/bookRouter');
// connection with database
connectDatabase(database_url);
app.use(express.json());
app.use(cors());
app.use('/register', SignInRouter);
app.use('/login', LogInRouter);
app.use('/flights',flightRouter);
app.use('/booking',bookingRouter);

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation',
//   params: {cityName: 'Mumbai', countryName: 'India'},
//   headers: {
//     'X-RapidAPI-Key': '25c45287d9msh50ea2b5a2b76e31p1bc6bdjsn329bc1706e10',
//     'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
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

