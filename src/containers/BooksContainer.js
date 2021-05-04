import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks'
import Books from '../components/Books'
import SearchBook from '../components/SearchBook'
// import SortButton from '../components/SortButton'
// user can search a specific book

class BooksContainer extends React.Component {

    state = {
        // hold search term
        searchTerm: '',
        sortbooks: []
    }

    componentDidMount(){
        this.props.fetchBooks()
    }

    findBook = (value) => {
       const newList = this.props.books.filter(book => {
           const lc = book.title.toLowerCase();
           const valueLc = value.toLowerCase();
           return lc.includes(valueLc)
       })

       this.setState({searchTerm: newList})
       console.log(this.state.searchTerm)

    }

    sortBooks = () => {
        // const books = console.log(this.props.books)
        //  debugger
        const newlist = this.props.books.sort((a,b)=> (a.title > b.title) ? 1: -1)
        this.setState({sortbooks: newlist})
        console.log(this.state.sortbooks)

    }

    render(){
    //    console.log(this.props.books)
        return(
            <div>
                <br />
                <button onClick={this.sortBooks}>Sort A-Z</button>
                <SearchBook findBook = {this.findBook}/> 
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