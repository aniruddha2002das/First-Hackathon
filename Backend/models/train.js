const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },

  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters"],
  },

  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
   
  },

  DepartureDate: {
    type: Date,
    required: [true, "Please add a date"],
  },

  DepartureTime: {
    type: String,
    required: [true, "Please add a time"],
  },

  ArrivalDate: {
    type: Date,
    required: [true, "Please add a arrival date"],
  },

  ArrivalTime: {
    type: String,
    required: [true, "Please add a arrival time"],
  },
  TrainName: {
    type: String,
  },

  BoardingStation: {
    type: String,
  },

  Destination: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("train", trainSchema);
