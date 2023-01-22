import React from 'react'
import "./trainlist.css"
import Train from "./Train/Train.js";
import { useState, useEffect } from 'react'


function TrainList({dataArray, info}) {

  // const [dataArray, setData] = useState([]);

  // useEffect(()=>{
  //   // GET request using fetch inside useEffect React Hook
  //   fetch("http://localhost:8050/train_between_station/")
  //   .then(res => res.json())
  //   .then( (data)=>{
  //     setData(data);
  //   });
  // },[]);

  return (
    <div className='train-list'>
      <div className="train-list-heading">
        <h1>Trains List</h1>
      </div>
      <div className="train-component">
        {/* <Train/> */}
        {
          dataArray.map((dataItem)=>(
            <Train obj={info} train_name={dataItem}             
            />
            
          ))
        }
        
      </div>






    </div>
  )
}

export default TrainList