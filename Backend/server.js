const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT ||  8050;
const database_url = process.env.DATABASE_URL || 'mongodb://localhost:27017/First_Hackathon';
const connectDatabase = require('./db/connection');

// connection with database
connectDatabase(database_url);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
