import React from 'react'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'
import LikeButton from '../components/LikeButton'
import { fetchComments } from '../actions/fetchComments'
import { fetchBook } from '../actions/fetchBook'
import { likeBook } from '../actions/likeBook'

class BookShow extends React.Component {
   
    state = {book: {}}

    handleClick = () => {
        this.props.likeBook(this.state.book)
    }

    componentDidMount() {
        const {bookId} = this.props.match.params
        if (bookId != null) {
            this.props.fetchBook(bookId).then(book =>{
                this.setState({ book })
            })
            this.props.fetchComments(bookId)
        }
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <img src={this.state.book.img_url} alt="picture" width="200" hieght="200" /> 
                <h4> {this.state.book.title} </h4>
               
                <LikeButton book = {this.state.book} likeBook={this.handleClick}/>
                <Comments comments={this.props.comments} />
                <CommentInput bookId = {this.props.match.params.bookId} />
            </div>
        )
    }


}

// find the book from its params to fetch comments associated with it

const mapStateToProps = (state, selectedBook) => {
    const book = state.books.find(book => book.id === +selectedBook.match.params.bookId) || {}
    return({
        book: book,
        comments: state.comments
    })
}

export default connect(mapStateToProps, { fetchBook, fetchComments, likeBook})(BookShow)