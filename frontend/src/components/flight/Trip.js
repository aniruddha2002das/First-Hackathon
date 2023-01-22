import React from 'react'
import PartTrip from './PartTrip'
import './Trip.css'



function Trip({ trip }) {


    async function saveTrip(){

    }

    return (
        <div className='trip'>
            <div className='bookButton' onClick={saveTrip}>Book Now</div>
            <div className='totalTime'>Total Trip Time <br/> {trip.$.TotalFlightTime.replace(/PT/gi,"")}</div>

            {trip.FlightLegDetails.map((partTrip) => {

            return(<PartTrip tripObj={partTrip} />)
        })}


        </div>
    )
}

export default Trip