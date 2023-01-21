import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage';
import BookingsPage from './components/pages/BookingsPage.js';
import FlightSearch from './components/pages/FlightSearch';
import {Routes, Route} from 'react-router-dom';
import FlightResult from './components/pages/FlightResult';
import TrainResult from './components/pages/TrainResult';
import TrainSearch from './components/pages/TrainSearch';
// import SignupPage from './components/pages/SignupPage'
// import AddPostPage from './components/pages/AddPostPage.js';

function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/bookings' element={<BookingsPage/>}/>
          <Route path='/flightresult' element={<FlightResult/>} />
          <Route path='/flightsearch' element={<FlightSearch/>} />
          <Route path='/trainresult' element={<TrainResult/>} />
          <Route path='/trainsearch' element={<TrainSearch/>} />
          
      
        </Routes>

    </div>
  );
}

export default App;
