import React from 'react'
import {connect} from 'react-redux';
import {signout} from '../actions/signout'
import { Redirect } from "react-router";
import { Button } from 'react-bootstrap'
class SignOut extends React.Component{

    handleClick = event => {
        event.preventDefault()
        console.log(this.props)
        localStorage.removeItem("token")
        this.props.signout()
    }

    render(){
        return(
        <Button className="signout-button" variant="link" onClick={this.handleClick}>SignOut</Button>
        )
    }  
}

const mapStateToProps = state => ({
   currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)

