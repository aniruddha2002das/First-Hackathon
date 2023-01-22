import React, { useEffect } from 'react'
import LinkBar from '../LinkBar'
import { useState } from 'react'
import FlightResult from './FlightResult';
import './FlightSearch.css'
import moment from 'moment'
import Header from '../Header';
import Loader from '../Loader';

// const min_date = new Date();

// let date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let ddate = `${year}-${month}-${day}`;


function FlightSearch() {

    const [searchObj, clickedSearch] = useState({ state: false, dataObj: null });
    const [From, setFrom] = useState("");
    const [travelDate, setTravelDate] = useState("");
    const [To, setTo] = useState("");
    const [minDate, setMinDate] = useState(null)

    
    useEffect(() => {
        const min_date = new Date();
        setMinDate(moment(min_date).format('YYYY-MM-DD'));
    }, [])
    
    
    
    async function searched(e) {
        e.preventDefault();
        
        // var elem = document.getElementById("loader");
        // elem.style.visibility = "visible";
        // elem.classlist.add("eightyP");
        
        let res = await fetch("http://localhost:8050/flights", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from_air: From, to_air: To, travel_date: travelDate})
        })
        
        // console.log(elem.style);
        const dataOb = await res.json();
        // elem.classlist.add("hundredP");
        clickedSearch({ state: true, dataObj: dataOb });
        // elem.style.visibility = "hidden";
        // elem.classlist.remove("eightyP hundredP");
    }

    return (
        <div>
            <Header/>
            <Loader />
            <LinkBar />
            <form onSubmit={searched} className='searchBox'>

                <div> Search Your Flight <br /> (e.g. BOM, CCU, DEL, IDR, MAA )</div>

                <div className='input'>
                    <div>FROM</div>
                    <input type="text" className='input' onChange={(e) => {
                        setFrom(e.target.value)

                    }} />
                    <div>To</div>
                    <input type="text" className='input' onChange={(e) => setTo(e.target.value)} />
                </div>
                <input type="date" min={minDate} onChange={(e) => setTravelDate(e.target.value)}/>
                <button className='button' type='submit'  >Search</button>
            </form>
            <>
                {searchObj.state ? <FlightResult dataObj={searchObj.dataObj} /> : null}
            </>
        </div>
    )
}

export default FlightSearch
