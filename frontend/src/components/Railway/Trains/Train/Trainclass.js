import React from 'react'
import "./trainclass.css"

function Trainclass({train_class,ticket_price,availability,update}) {
  return (
    <div className="train-class">
        <div className="top-line">
            <div className="rail-class"><strong>{train_class}</strong></div>
            <div className="class-price"><strong><span>₹</span><span>{ticket_price}</span></strong></div>
        </div>
        <div className="availability-info font-same-size">{availability}</div>
        <span className="free-cancellation font-same-size">Free Cancellation</span>
        <div className="update-info font-same-size">{update}</div>
    </div>
  )
}

export default Trainclass