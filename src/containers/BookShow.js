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
    // handleClick = () => {
    //     this.props.likeBook(this.state.book)
    // }

    componentDidMount() {
        const {bookId} = this.props.match.params
        if (bookId != null) {
            this.props.fetchBook(bookId).then(book =>{
                this.setState({book})
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
                <img src={this.state.book.img_url} alt="picture" width="300"  height="400" /> <br/><br/>
                <h6> Title: {this.state.book.title} </h6>
                <h6>Authors: {this.state.book.authors}</h6>
                <h6>published Date: {this.state.book.published_date}</h6>
                <a href= {this.state.book.buy_link} target="_blank">Buy Link</a><br/>
            </div>
                {/* <LikeButton book = {this.state.book} likeBook={this.handleClick}/><br/> */}
                {this.props.users !== undefined? <CommentInput bookId = {this.props.match.params.bookId} userId = {this.props.users.id}/> : null}
                 {/* <CommentInput bookId = {this.props.match.params.bookId} /> */}
                <Comments comments={this.props.comments} /> 
               
                
              
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return({
        users: state.users.currentUser,
    })
}

export default connect(mapStateToProps, { fetchBook, fetchComments, likeBook })(BookShow)