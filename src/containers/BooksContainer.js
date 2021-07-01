import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks'
import Books from '../components/Books'
import SearchBook from '../components/SearchBook'

class BooksContainer extends React.Component {
    state = {
        searchTerm: '',
    }

    componentDidMount(){
        if (this.state.searchTerm.length > 0)
         this.props.fetchBooks(this.state.searchTerm)
         else
         this.props.fetchBooks()
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchBooks(this.state.searchTerm)
        this.setState({searchTerm: ''})
    }

    render(){
        return(
            <div className="books-container">
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>Search a Book:</label>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
                <br />
                <Books books = {this.props.books} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, {fetchBooks})(BooksContainer)
