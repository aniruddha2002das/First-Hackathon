import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="containerAnk">

        <div className="brandName">Wonderer</div>

        <ul >

          <Link to={'/home'}><li id="home">HOME</li></Link>
          <Link to={'/bookings'}><li id="posts">Bookings</li></Link>
          {/* <Link to={'/addpost'}><li id="add_post">ADD POST</li></Link> */}
        </ul>
      </div>
    </nav>
  )
}

{/* <Link to={'/home'}><li id="signin">SIGN IN</li></Link>
<Link to={'/home'}><li id="signup">SIGN UP</li></Link> */}