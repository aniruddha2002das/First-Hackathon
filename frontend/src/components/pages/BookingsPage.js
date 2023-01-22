import React from 'react'
import Header from '../Header'
import { useState, useEffect } from 'react'
import Bookings from './Bookings';

function BookingsPage() {

  // let ele = document.getElementById("posts");
  // ele.style.backgroundColor = "#337ab7";
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:8050/getBookingFlight")
    .then(res => res.json())
    .then((data)=>{
      setData(data);
    })
  },[])

  return (
    <div>
      <Header/>
      { data.map((booking) => {
        
        return(
          <Bookings obj={booking}/>
        )

      })}
    </div>
  )
}

export default BookingsPage
