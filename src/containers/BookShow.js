import React from 'react'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'
import { fetchComments } from '../actions/fetchComments'
import { fetchBook } from '../actions/fetchBook'
import { Redirect } from "react-router";

class BookShow extends React.Component {

    state = {book: {}}

    componentDidMount() {
        const {bookId} = this.props.match.params
        if (bookId != null) {
            this.props.fetchBook(bookId).then(book =>{
                this.setState({book})
            })
        }
    }

    render() {
    if(localStorage.token !== undefined){
        return(
            <div className="row">
                <div className="book-details column">
                <br />
                <img src={this.state.book.img_url} alt="picture" width="300"  height="400" /> <br/><br/>
                <h6> Title: {this.state.book.title} </h6>
                <h6>Authors: {this.state.book.authors}</h6>
                <h6>published Date: {this.state.book.published_date}</h6>
                <a href= {this.state.book.buy_link} target="_blank">Buy Link</a><br/>
              </div>

              <div className="comment-form-show column">
                {this.props.users !== undefined? <CommentInput bookId = {this.props.match.params.bookId} userId = {this.props.users.id}/> : null}
                {this.props.users !== undefined? <Comments comments={this.props.users.comments} bookId = {this.props.match.params.bookId} />  : null}
               </div> 
              
            </div>
        )
    }
    else return (
        
        <Redirect to="/signin" />  

)
    }


}

const mapStateToProps = (state) => {
    return({
        users: state.users.currentUser,
    })
}

export default connect(mapStateToProps, { fetchBook, fetchComments})(BookShow)