import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks'
import Books from '../components/Books'

class BooksContainer extends React.Component {
    state = {
        searchTerm: '',
        sortedBooks: [],
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

    sortBooks = () => {
        const newList = this.props.books.items.map(item => item.volumeInfo).sort((a,b) => (a.title > b.title) ? 1:-1)
        this.setState({sortedBooks: newList})
        console.log(this.state.sortedBooks)
    }

    unsortBooks = () => {
        const booksArray = this.props.books.items|| []
        const newList = booksArray.map(item => item.volumeInfo)
        return newList
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

                <button onClick={this.sortBooks}>Sort A-Z</button>
                <Books books = {this.state.sortedBooks.length > 0 ? this.state.sortedBooks : this.unsortBooks()}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,
    }
}

export default connect(mapStateToProps, {fetchBooks})(BooksContainer)
