import React from 'react'
import './LinkBar.css'
import {Link} from 'react-router-dom'


function LinkBar() {
  return (
    <div className='centerContainer'>
     <Link to={'/flightsearch'}><div>Flights</div></Link> 
     <Link to={'/trainsearch'}><div>Trains</div></Link> 
     {/* <Link ><div>Buses</div></Link> 
     <Link ><div>Hotels</div></Link>  */}
    </div>
  )
}

export default LinkBar
