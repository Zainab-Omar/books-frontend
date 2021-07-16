import React from 'react'
import {connect} from 'react-redux'
import {userSignin} from '../actions/userSignin'
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Signin extends React.Component {
    state = {
        email: '',
        password: '',
    }
   
  
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userSignin(this.state)
        this.props.history.push("./books")
        
    }

    render(){
        if (localStorage.token === undefined){
        return(
            
            <div className="signin-form">
                <h1>Sign In !</h1>
                
            <form onSubmit={this.handleSubmit}>
                <FormGroup>

                <FormControl input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required />
                <br />

                <FormControl input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required/>
                <br />

                <button className="btn btn-primary" type="submit">Sign In</button>
                </FormGroup>

             <Link to="/signup">
             <p>Do not have account Signup</p>
            </Link>
            </form>
            </div>
        )
    }
    else return(
        <div className="signin-alart">
            <h3>You already Signed in
            <Link to="/profile">
             <p>view your profile </p>
            </Link>
            </h3>
        </div>
    )
    
  }
}


const mapDispatchToProps = dispatch => ({
    userSignin: userInfo => dispatch(userSignin(userInfo))
})

export default connect(null, mapDispatchToProps)(Signin);


               
