import React from 'react'
import Header from '../Header'
import { useState, useEffect } from 'react'
import Bookings from './Bookings';

function BookingsPage() {

  // let ele = document.getElementById("posts");
  // ele.style.backgroundColor = "#337ab7";
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:8050/booking")
    .then(res => res.json())
    .then((data)=>{
      setData(data);
      console.log(data);
    })
  },[])

  return (
    <div>
      <Header/>
      { data.map((booking) => {
        console.log(booking);
        return(
          <Bookings obj={booking}/>
        )

      })}
    </div>
  )
}

export default BookingsPage
