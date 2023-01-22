import React from 'react'
import './Bookings.css'

function Bookings({obj}) {
  return (
    <div className='container'>
        <div className='dept'>

            <div>{obj.from_air}</div>
            <div>{obj.Departure_date}</div>
            <div>{obj.Departure_time}</div>
        </div>
        
        <div className='center'>
            <div>{obj.CompanyShortName}</div>
            <div>{obj.totalTime}</div>
        </div>

        <div className='arri'>

            <div>{obj.to_air}</div>
            <div>{obj.Arrival_date}</div>
            <div>{obj.Arrival_time}</div>
        </div>
    </div>
  )
}

export default Bookings