import React from 'react'
import "./BookTrainTicket.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NearMeIcon from '@mui/icons-material/NearMe';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useState } from 'react'
import TrainList from '../Trains/TrainList';
import LinkBar from '../../LinkBar';
import Header from '../../Header';




  function BookTrainTicket() {

    const [from,setFrom]=useState("");
    const [to, setTo] = useState("");
    const [array, setArray]=useState([]);
    const [search, setSearch] = useState(false);

    // const [found, setFound] = useState("");
  // let name,value;

  // const handleInputs=(e)=>{
  //   const name=e.target.name;
  //   const value=e.target.value;
  //   console.log(name,value);

  //     setUser({ ...user,[name]:value});
  // }


  // const handleSubmit = (e) =>{
  //     e.preventDefault();

  //     const newRecord={...user, id: new Date().getTime().toString() }
  //     console.log(records);
  //     setRecords([...records,newRecord]) // Creating array
  //     console.log(records);
  //     setUser({from: "",to: "",date: "",class:""});
  // }
  
    async function PostData(e){
      e.preventDefault();

      const res = await fetch("http://localhost:8050/train_between_station",{
        
        method:"POST",
        headers:{'Content-Type':'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'
      
      },
        body: JSON.stringify({from,to})
        
      }) 
      
      let dataObj = await res.json();

      console.log(dataObj);
      setSearch(true);

      setArray(dataObj.data);

     

      // dataObj.data.map((element)=>{
      //   console.log(element);
      // })
      
  }




  const options = ['All Class','Sleeper Class','Third AC','Second AC','First AC','Second Seating','AC Chair Car','First Class','Third AC Economy'];
  const defaultOption = options[0];
  return (
<>
    <Header/>
    <LinkBar/>

    
    <div className='book-train-ticket'>
      <div className="book-header-title">BOOK TICKET</div>
      <div className="book-notice"><span>* </span> Enter Only Valid Station codes (e.g. JBP, INDB, HWH, PNBE, MMCT)</div>
      <form method='POST' >
      {/* Line one */}
      <div className="book-ticket-line-one">
      <div className="source-location inputs-full-box">
      
      <label htmlFor="from-source"><NearMeIcon /></label>
      <input type="text" placeholder='From' name='from' autoComplete='off' className='input-box' id='from-source'  onChange={(e)=>{setFrom(e.target.value)}}/>
      </div>

      <div className="destination-location inputs-full-box">
      
      <label htmlFor="to-destination"><LocationOnIcon/></label>
      <input type="text" placeholder='To' name='to' autoComplete='off' className='input-box' id='to-destination' onChange={(e)=>{setTo(e.target.value)}}/>
      </div>
      </div>

      {/* Line two */}
      <div className="book-ticket-line-two">
      <div className="date-box inputs-full-box">
      
      <label htmlFor="calendar"><CalendarMonthIcon/></label>
      <input type="date" id="calendar" name="date" autoComplete='off' min="2023-01-22" max="2023-05-22"  />
      </div>

      <div className="classes-dropdown inputs-full-box">
      <label htmlFor="class-lists"><BusinessCenterIcon/></label>
      {/* onChange={this._onSelect} */}
      {/* value={user.class} onChange={handleInputs} */}
      <Dropdown options={options} value={defaultOption} autoComplete='off' placeholder="Select an option" id='class-lists' />
      </div>
      </div>
      <button type="submit" className='search-ticket-btn' onClick={PostData}>Search</button>

      </form>

        {/* <div>
            {   
                records.map((curElem) => {
                 return (
                     <div key={curElem.id}>
                        <p>{curElem.from}</p>
                        <p>{curElem.to}</p>
                        <p>{curElem.date}</p>
                     </div>
                 )
                })
            
            }
        </div> */}


      {search ? (<TrainList info={{from, to}} dataArray={array}/>) : (null)}
      </div>
      </>
  )
}

export default BookTrainTicket