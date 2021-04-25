import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <div>
        <NavLink to="/" style={link} className="navbar-link">Home</NavLink>
        <NavLink to="/books" style={link} className="navbar-link">Books</NavLink>
        <NavLink to="/add/book" style={link} className="navbar-link">Add Book</NavLink>
        {/* <NavLink to="/about" style={link} className="navbar-link">About</NavLink> */}
    </div>
    )
}
const link = {
    width: '100px',
    padding: '15px',
    margin: '0 8px 8px',
    textDecoration: 'none',
    color: 'black',
  }
  
  export default NavBar;