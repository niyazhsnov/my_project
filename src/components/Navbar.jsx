import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import MyImage from "./giphy.gif"
const Navbar = () => {
  return (
    <nav>
     <img src={MyImage}  alt="logo_gif" /> 
      <ul>
        <li>
          <Link className="li" to="/">Home</Link>
        </li>
        <li>
          <Link  className="li" to="/categories">Users</Link>
        </li>
      
      </ul>
    </nav>
  )
}

export default Navbar
