import React from 'react'
import {connect} from 'react-redux'
import {userSignin} from '../actions/userSignin'

class Signin extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userSignin(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign In form</h1>

                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                <br />

                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                <br />

                <input type="submit" />


            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userSignin: userInfo => dispatch(userSignin(userInfo))
})

export default connect(null, mapDispatchToProps)(Signin);


