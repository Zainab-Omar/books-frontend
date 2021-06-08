import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks'
import Books from '../components/Books'
import SearchBook from '../components/SearchBook'

// user can search a specific book

class BooksContainer extends React.Component {

    state = {
        // hold search term
        searchTerm: '',
        // sortbook: []
    }

    componentDidMount(){
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
 
    // findBook = (value) => {
    //     const newList = this.props.books.filter(book => {
    //         const lc = book.title.toLowerCase();
    //         const valueLc = value.toLowerCase();
    //         return lc.includes(valueLc)
    //     })
 
    //     this.setState({searchTerm: newList})
   
 
    //  }

    // sortBooks = () => {
    //     const newList = this.props.books.sort((a,b) => a.title > b.title ? 1: -1)
    //     this.setState({sortbooks: newList})
    // }

    render(){
    //    console.log(this.props.books)
        return(
            <div>
                <br />
                {/* <button onClick={this.sortBooks}>sort A-Z</button> */}
                {/* <SearchBook findBook = {this.findBook}/>  */}
                <form onSubmit={this.handleSubmit}>
                    <label>Search a Book: </label>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
                <br />
                <Books books = {this.state.searchTerm.length > 0 ? this.state.searchTerm : this.props.books} />
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