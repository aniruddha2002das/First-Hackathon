import React from 'react'
import './PartTrip.css'

function PartTrip({ tripObj }) {


    let dept_time = new Date(tripObj.$.DepartureDateTime);
    let arri_time = new Date(tripObj.$.ArrivalDateTime);
    return (
        <div>
            <div className='topInfo'>

                <div className='fromDiv'>
                    <span>From</span> <br />
                    <div>
                        {tripObj.DepartureAirport[0].$.FLSLocationName}
                    </div>
                    <div>
                        {tripObj.DepartureAirport[0].$.LocationCode}
                    </div>

                    <div className='timeDate'>
                        Departure Date & Time <br/>
                        {`${dept_time.getFullYear()}-${dept_time.getMonth() + 1}-${dept_time.getDate()}`}<br/>
                        {`${dept_time.getHours()} : ${dept_time.getMinutes() }`}
                    </div>
                </div>


                <div className='timeDiv'>
                    {tripObj.$.JourneyDuration.replace(/PT/gi,"")}<br/>
                    {tripObj.MarketingAirline[0].$.CompanyShortName}  
                </div>

                <div className='toDiv'>
                    <span>To</span> <br />

                    <div>
                        {tripObj.ArrivalAirport[0].$.FLSLocationName}
                    </div>
                    <div>
                        {tripObj.ArrivalAirport[0].$.LocationCode}
                    </div>
                    Arrival Date & Time <br/>
                    {`${arri_time.getFullYear()}-${arri_time.getMonth() + 1}-${arri_time.getDate()}`}<br/>
                    {`${arri_time.getHours()} : ${arri_time.getMinutes() }`}
                </div>

            </div>

        </div>
    )
}

export default PartTrip;