import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/createComment'

class CommentInput extends React.Component {
    state = {
        text: '',
        commenter: '',
        book_id: this.props.bookId
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createComment(this.state)
        this.setState({
            text: '',
            commenter: ''
        })
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment: </label>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange} /><br />

                    <label>Name: </label>
                    <input type="text" name="commenter" value={this.state.commenter} onChange={this.handleChange} /><br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createComment})(CommentInput)