import React from 'react'
import Trip from './Trip'
import './FlightResult.css'
// import dataObj from './dummy.json'

var i = 0;

function FlightResult({dataObj}) {
	return (
		<div className='flightresult'>

			{console.log(dataObj)}
			<div className='topInfo'>

				<div className='fromDiv'>
					<span>From</span> <br />
					<div>
						{dataObj.OTA_AirDetailsRS.FLSResponseFields[0].$.FLSOriginName}
					</div>
					<div>
						{dataObj.OTA_AirDetailsRS.FLSResponseFields[0].$.FLSOriginCode}
					</div>
				</div>


				<div className='dateDiv'>
					<span>Date</span><br />
					{dataObj.OTA_AirDetailsRS.FLSResponseFields[0].$.FLSStartDate}
				</div>

				<div className='toDiv'>
					To <br />
					<div>
						{dataObj.OTA_AirDetailsRS.FLSResponseFields[0].$.FLSDestinationName}
					</div>
					<div>
						{dataObj.OTA_AirDetailsRS.FLSResponseFields[0].$.FLSDestinationCode}
					</div>
				</div>

			</div>


			{dataObj.OTA_AirDetailsRS.FlightDetails.map((element) => {

				return (<Trip trip={element} />)
			})}


		</div>
	)
}

export default FlightResult;