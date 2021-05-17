import react from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
// import {newUserFetch} from '../actions/newUserFetch'

class Signup extends Component {
    state ={
        username: "",
        email: "",
        password: "",
        avatar: "",
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
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Signup</h1>

                <label>username: </label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br />

                <label>email: </label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <br />

                <label>password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br />

                <label>avatar: </label>
                <input type="password" name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
                <br />

                <label>bio: </label>
                <textarea name="bio" value={this.state.bio} onChange={this.handleChange}/>
                <br />


            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    newUserFetch: userInfo => dispatch(newUserFetch(userInfo))
}

export default connect(null, mapDispatchToProps)(Signup);