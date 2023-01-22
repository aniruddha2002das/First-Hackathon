import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage';
import BookingsPage from './components/pages/BookingsPage.js';
import FlightSearch from './components/flight/FlightSearch';
import {Routes, Route} from 'react-router-dom';
import BookTrainTicket from "./components/Railway/BookTrainTicket/BookTrainTicket.js";
import TrainList from "./components/Railway/Trains/TrainList.js";
import TrainSearch from './components/pages/TrainSearch';
// import FlightResult from './components/flight/FlightResult';
// import TrainResult from './components/pages/TrainResult';
// import SignupPage from './components/pages/SignupPage'
// import AddPostPage from './components/pages/AddPostPage.js';

function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/bookings' element={<BookingsPage/>}/>
          {/* <Route path='/flightresult' element={<FlightResult/>} /> */}
          <Route path='/flightsearch' element={<FlightSearch/>} />
          {/* <Route path='/trainresult' element={<TrainResult/>} /> */}
          <Route path='/trainsearch' element={<TrainSearch/>} />
          <Route path='/railways' element={<BookTrainTicket />}/>
          <Route path='/train-list' element={<TrainList/>}/>
      
        </Routes>

    </div>
  );
}

export default App;

 