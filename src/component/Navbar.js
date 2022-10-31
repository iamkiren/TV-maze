import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <>
    
    <div className='navitems'>
        <Link to="/" className='link'><label>Actor</label></Link>
        <Link to="/Show" className='link'><label>Show</label></Link>
    </div>
    </>
  )
}

export default Navbar
