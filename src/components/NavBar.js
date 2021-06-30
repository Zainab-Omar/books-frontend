import React from 'react'
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import SignOut from './SignOut'

const NavBar = () => {
    return(
    <div className="navbar-component" style={{ background: 'maroon', paddingTop: '12px', paddingBottom: '5px' }}>
           
    <NavLink to="/" className="navbar-logo" >
        Zbooks
    </NavLink>

    <NavLink to="/" style={link} className="navbar-link">Home</NavLink>
    <NavLink to="/books" style={link} className="navbar-link">Books</NavLink>
    <NavLink to="/about" style={link} className="navbar-link">About</NavLink>

    <DropdownButton
      title="Menu"
      className="dropdown-button"
      id="dropdown-menu-align-right"
     >
       <Dropdown.Item eventKey="profile"><NavLink to="/profile" style={link} className="navbar-link">profile</NavLink></Dropdown.Item> 
       <Dropdown.Item eventKey="signup"><NavLink to="/signup" style={link} className="navbar-link">Signup</NavLink></Dropdown.Item> 
       <Dropdown.Item eventKey="signin"><NavLink to="/signin" style={link} className="navbar-link">Signin</NavLink></Dropdown.Item> 
       <Dropdown.Item eventKey="signout"><SignOut /></Dropdown.Item> 
    </DropdownButton>
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