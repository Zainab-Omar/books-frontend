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
            <div className="book-showpage">
                <div className="book-details">
                <br />
                <img src={this.state.book.img_url} alt="picture" width="300"  height="400" /> 
                <h6> Title: {this.state.book.title} </h6>
                <h6>Authors: {this.state.book.authors}</h6>
                {/* <LikeButton book = {this.state.book} likeBook={this.handleClick}/><br/> */}
                <CommentInput bookId = {this.props.match.params.bookId} />
                <Comments comments={this.props.comments} />
                </div>
                
              
            </div>
        )
    }


}

const mapStateToProps = (state, selectedBook) => {
    const book = state.users.currentUser.books.find(book => book.id === selectedBook.match.params.bookId) || {}
    return({
        book: book,
        comments: state.users.currentUser.comments
    })
}

export default connect(mapStateToProps, { fetchBook, fetchComments, likeBook})(BookShow)