import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/caret_icon.svg'




const Navbar = () => {
  return (
    <div className='nav-bar'> 

{/* left side of nav has logo and menu links  */}
      <div className="navbar-left">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>News & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      </div>

{/* Right side nav has icon */}
      <div className="navbar-right">
        <img className='icons' src={search_icon} alt="" />
        <p>Children</p>
        <img className='icons' src={bell_icon} alt="" />
        
        <div className="navbar-profile">
        <img className='profile' src={profile_img} alt="" />
        <img  src={dropdown_icon} alt="" />

        {/* Only seen when we hover over profile icon */}
        <div className="dropdown">
          <p>Sign Out of Netflix</p>
        </div>


        </div>
      </div>
      
    </div>
  )
}

export default Navbar