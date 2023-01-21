import React, { useEffect } from 'react'
import LinkBar from '../LinkBar'
import { useState } from 'react'
import FlightResult from './FlightResult';
import './FlightSearch.css'
import moment from 'moment'

// const min_date = new Date();

// let date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let ddate = `${year}-${month}-${day}`;


function FlightSearch() {

    const [search, clickSearch] = useState(false);
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [minDate, setMinDate] = useState(null)

    useEffect(() => {
        const min_date = new Date();
        setMinDate(moment(min_date).format('YYYY-MM-DD'));
    }, [])

    let result;
    function searched() {
        clickSearch(true);
    }

    return (
        <div>
            <LinkBar />
            <div className='searchBox'>

                <div> Search Your Flight <br /> (e.g. BOM CCU )</div>

                <div className='input'>
                    <div>FROM</div>
                    <input type="text" className='input' onChange={(e) => {setFrom(e.target.value)
                      
                    }} />
                    <div>To</div>
                    <input type="text" className='input' onChange={(e) => setTo(e.target.value)}/>
                </div>
               <input type="date"   min={minDate}  />
            </div>
            <button className='button' type='submit' />
            <>
                {search ? <FlightResult /> : null}
            </>
        </div>
    )
}

export default FlightSearch
