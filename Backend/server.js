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

const train_router = require('./routers/train')
app.use(train_router);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

