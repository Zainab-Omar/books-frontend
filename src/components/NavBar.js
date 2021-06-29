import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <div style={{ background: 'blueviolet', paddingTop: '12px', paddingBottom: '12px' }}>
     <NavLink to="/" className="navbar-logo" style={{padding: '40px', margin: '0 8px 8px', color: 'white'}}>
        Zbooks
      </NavLink>
        <NavLink to="/books" style={link} className="navbar-link">Books</NavLink>
        <NavLink to="/about" style={link} className="navbar-link">About</NavLink>
        <NavLink to="/signup" style={link} className="navbar-link">Signup</NavLink>
        <NavLink to="/signin" style={link} className="navbar-link">Signin</NavLink>
        <NavLink to="/profile" style={link} className="navbar-link">profile</NavLink>
     
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