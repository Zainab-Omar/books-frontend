import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks'
import Books from '../components/books'

class BooksContainer extends React.Component {
    componentDidMount(){
        this.props.fetchBooks()
    }

    render(){
        // let books = console.log(this.props.books)
        return(
            <div>
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