import React from 'react'

function Bookings(obj) {
  return (
    <>
    <div>{obj.from_air}</div>
    <div>{obj.to_air}</div>
    <div>{obj.Departure_date}</div>
    <div>{obj.Departure_time}</div>
    <div>{obj.Arrival_date}</div>
    <div>{obj.Arrival_time}</div>
    <div>{obj.CompanyShortName}</div>
    <div>{obj.totalTime}</div>
    </>
  )
}

export default Bookings