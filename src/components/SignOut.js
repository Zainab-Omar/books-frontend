import React from 'react'
import {connect} from 'react-redux';
import {signout} from '../actions/signout'
import { Redirect } from "react-router";

class SignOut extends React.Component{

    handleClick = event => {
        event.preventDefault()
        console.log(this.props)
        localStorage.removeItem("token")
        this.props.signout()
    }

    render(){
        return(
          <button className="signout-button" onClick={this.handleClick} >SignOut</button>
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

