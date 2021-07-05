import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/createComment'

class CommentInput extends React.Component {
    state = {
        note: '',
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
            note: '',
        })
    }

    render(){
        return(
            <div className="comment-form">
                <h3>Add Note: </h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Note: </label>
                    <textarea name="note" value={this.state.note} onChange={this.handleChange} /><br/>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {createComment})(CommentInput)