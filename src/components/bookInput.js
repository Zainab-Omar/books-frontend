import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'



class BookInput extends React.Component {

    state = {
        title: '',
        author: '',
        img_url: '',
        likes: 0
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addBook(this.state)
        this.setState({
            title: '',
            author: '',
            img_url: ''
        })
        // this.props.history.push(`/books/${this.props.books[0].id}`)
    }

    render(){
        console.log(this.props)
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
                {/* {this.props.history.push(`/books/${this.props.books.slice(-1)[0].id}`)} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {books: state.books}
}

export default connect(mapStateToProps, {addBook})(BookInput);