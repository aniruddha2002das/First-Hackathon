import React from 'react'
import "./train.css"
import TrainClass from "./Trainclass";

function Train({train_name, obj}) {
  return (
    <div className='train'>
        <div className="train-info">
          <div className="left-info">
              <div className="train-name">{train_name}</div>
              <div className="train-no-dept-on">
                <div className="train-no"><span>#</span>12189</div>
                <span className='khada-danda'>|</span>
                <div className="depart-on">
                  Departs on:<span><b>S</b><b>M</b><b>T</b><b>W</b><b>T</b><b>F</b><b>S</b></span>
                </div>
              </div>
          </div>
          <div className="right-info">
              <div className="right-left-side">
                <div className="depart-time">4:55 PM, Fri</div>
                <div className="station-name">{obj.from}</div>
              </div>
              <div className="right-mid-side">
                <div className='hr-line'></div>
                <div className="journey-duration"><b>16</b> hrs <b>49</b> mins</div>
                <div className='hr-line'></div>
              </div>
              <div className="right-right-side">
                <div className="arrival-time">8:35 AM, Sat</div>
                <div className="station-name">{obj.to}</div>
              </div>
          </div>
        </div>
        <div className="train-class-card">
        {/* {train-class,ticket-price,availability,update} */}
        <TrainClass train_class='SL' ticket_price='670' availability='AVAILABLE 50' update='Updated few mins ago'/>
        <TrainClass train_class='3A' ticket_price='1370' availability='AVAILABLE 35' update='Updated few sec ago'/>
        <TrainClass train_class='2A' ticket_price='1965' availability='AVAILABLE 24' update='Updated few mins ago'/>
        <TrainClass train_class='1A' ticket_price='3330' availability='AVAILABLE 11' update='Updated few sec ago'/>
        <TrainClass train_class='2S' ticket_price='285' availability='AVAILABLE 5' update='Updated few mins ago'/>
        <TrainClass train_class='3E' ticket_price='500' availability='AVAILABLE 85' update='Updated few sec ago'/>
        
        

        </div>
    </div>
  )
}

export default Train