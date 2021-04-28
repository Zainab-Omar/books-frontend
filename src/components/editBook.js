import React from 'react'
import { connect } from 'react-redux'
import {editBook} from '../actions/editBook'

class EditBook extends React.Component {

    state = {
        title: '',
        author: '',
        img_url: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let book = {...this.state, id: this.props.book.id}
        this.props.editBook(book)
        this.setState({
            title: '',
            author: '',
            img_url: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br />

                    <label>Author Name: </label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                    <br />

                    <label>Book Image: </label>
                    <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
                    <br />

                    <input type="submit" />

                </form>
            </div>
        )
    }
}
EditBook.defaultProps = {
    books: {}
}
export default connect(null, {editBook})(EditBook)