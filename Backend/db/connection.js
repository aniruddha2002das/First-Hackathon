const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDatabase = async(database_url) => {
    try{
        await mongoose.connect(database_url);
        console.log("Connection successful with database");
    }
    catch (err){
        console.log(err);
    }
};

module.exports = connectDatabase;