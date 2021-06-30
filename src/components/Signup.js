import React, {Component} from 'react';
import { connect } from 'react-redux'
import {newUserFetch} from '../actions/newUserFetch'
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Signup extends Component{
    state ={
        username: "",
        email: "",
        password: "",
        avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
        bio: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.newUserFetch(this.state)
        this.props.history.push("./books")
    }

    render(){
        if (localStorage.token === undefined){
        return(
            <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
                <h1>Signup !</h1>

                <FormGroup>

                <label>username: </label>
                <FormControl input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                <label>email: </label>
                <FormControl input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>

                <label>password: </label>
                <FormControl input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>

                <h6 style={{color:"rgb(0 123 255)"}}>Optional</h6>

                <label>Use default avatar or add yours: </label>
                <FormControl input type="text" name="avatar" value={this.state.avatar} onChange={this.handleChange} />
              

                <label>bio: </label>
                <FormControl textarea name="bio" value={this.state.bio} onChange={this.handleChange}/>
                <br/>
                <button className="btn btn-primary" type="submit">Sign Up</button>

                </FormGroup>

                <Link to="/signin">
                 <p>already have account signin</p>
                </Link>
            </form>
        </div>
        )
    }
    else return (
        <div>
            <h4 className="signup-alart">You are signed in to create new account signout first</h4>
        </div>
    )
}
}


const mapDispatchToProps = dispatch => ({
    newUserFetch: userInfo => dispatch(newUserFetch(userInfo))
  })

export default connect(null, mapDispatchToProps)(Signup);


