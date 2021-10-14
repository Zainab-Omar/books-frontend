import React from 'react'
import SignOut from './SignOut'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux'

const NavBar = ({users}) => {

  if((localStorage.token !== undefined) && (users !== undefined)){
    return(
      <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     
      <Navbar.Brand href="/">ZBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/books">Books</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        
          </Nav>
          <Nav>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <SignOut/>
          </Nav>
      </Navbar.Collapse>
     
      </Navbar>
      
  </div>
   
    )
  }
  else{
    return(
      <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     
     <Navbar.Brand href="/">ZBooks</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
         <Nav.Link href="/books">Books</Nav.Link>
         <Nav.Link href="/about">About</Nav.Link>
       
         </Nav>
         <Nav>
         <Nav.Link href="/signin">Signin</Nav.Link>
         <Nav.Link href="/signup">Signup</Nav.Link>
         </Nav>
     </Navbar.Collapse>
    
     </Navbar>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    users: state.users.currentUser
  }
}

  
  
  export default connect(mapStateToProps)(NavBar);