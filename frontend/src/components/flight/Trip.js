import React from 'react'
import PartTrip from './PartTrip'
import './Trip.css'



function Trip({ trip }) {
    let tripObj = trip.FlightLegDetails[0];

    let dept_time = new Date(tripObj.$.DepartureDateTime);
    let arri_time = new Date(tripObj.$.ArrivalDateTime);

    let from_air = tripObj.DepartureAirport[0].$.FLSLocationName;
    let to_air = tripObj.ArrivalAirport[0].$.FLSLocationName;
    // let travel_date =
    let Departure_date = `${dept_time.getFullYear()}-${dept_time.getMonth() + 1}-${dept_time.getDate()}`;
    let Departure_time = `${dept_time.getHours()} : ${dept_time.getMinutes() }`;
    let Arrival_date = `${arri_time.getFullYear()}-${arri_time.getMonth() + 1}-${arri_time.getDate()}`;
    let Arrival_time = `${arri_time.getHours()} : ${arri_time.getMinutes() }`;
    let CompanyShortName = tripObj.MarketingAirline[0].$.CompanyShortName;
    let totalTime = trip.$.TotalFlightTime.replace(/PT/gi,"");
    
    
    async function saveTrip(){
        const res = await fetch("http://localhost:8050/booking", {
            method: "POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({from_air,to_air,Departure_date,
                Departure_time,Arrival_date,Arrival_time,CompanyShortName,
                totalTime})
        })
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