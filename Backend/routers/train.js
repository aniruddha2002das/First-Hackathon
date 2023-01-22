const express = require("express");
const axios = require("axios");
const router = express.Router({ mergeParams: true });
const Prettify = require("../utils/Prettify");
const prettify = new Prettify();
const UserAgent= require("user-agents");
const train=require("../models/train");

router.post("/train_between_station", async (req, res) => {
  const arr = [];
  const arr1 = [];


  const from = req.body.from;
  const to = req.body.to;

console.log(from);

  const date = req.query.date;

  const URL_Trains = `https://erail.in/rail/getTrains.aspx?Station_From=${from}
    &Station_To=${to}`;
  try {
    const response = await axios(URL_Trains, {
      method: "GET",
    });
    const data = await response.data;
    const Str = prettify.BetweenStation(data);

    // console.log(Str);
    Str["data"].forEach((ele, ind) => {
      arr.push(ele);
    });

    let i = 0;
    arr.forEach((element) => {
      console.log(arr[i].train_base.train_name);
      arr1.push(arr[i].train_base.train_name);
      i = i + 1;
    });

    res.status(200).json({
      success: true,
      data: arr1,
    });
  } catch (error) {
    console.log(error.message);
  }
});





router.post('/getTrainOn',async(req, res)=>{

    const arr = [];
    const arr1 = [];
    const retval = {};
    const from = req.query.from;
    const to = req.query.to;
    const date = req.query.date;
    if (date == null) {
      retval["success"] = false;
      retval["time_stamp"] = Date.now();
      retval["data"] = "Please Add Specific Date";
      res.json(retval);
      return;
    }
    const URL_Trains = `https://erail.in/rail/getTrains.aspx?Station_From=${from}
    &Station_To=${to}
    &DataSource=0&Language=0&Cache=true`;
    try {
      const userAgent = new UserAgent();
      const response = await axios(URL_Trains, {
        method: "GET",
        headers: { "User-Agent": userAgent.toString() },
      });
      const data = await response.data;
      const json = prettify.BetweenStation(data);
    
     
      const DD = date.split('-')[0];
      const MM = date.split('-')[1];
      const YYYY = date.split('-')[2];
    
      const day = prettify.getDayOnDate(DD, MM, YYYY);
      json["data"].forEach((ele, ind) => {
        if (ele["train_base"]["running_days"][day] == 1) arr.push(ele);
      });

      let i = 0;
      arr.forEach((element) => {
        console.log(arr[i].train_base.train_name);
        arr1.push(arr[i].train_base);
        i = i + 1;
      });

      retval["success"] = true;
      retval["time_stamp"] = Date.now();
      retval["data"] = arr;
      console.log(arr1);
      res.json(arr1);
    } catch (err) {
      console.log(err);
    }


})



router.post('/train_ticket',async(req, res) => {

try {
    const train_ticket = await train.create(req.body);
    res.status(200).json({success: true,
    data: train_ticket});
    
} catch (error) {
    
    console.log(error);
}
    
});

module.exports = router;
