import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'

class SaveBook extends React.Component {
   
    state = {book: { 
    title: this.props.book.volumeInfo.title, 
    authors: this.props.book.volumeInfo.authors, 
    published_date: this.props.book.volumeInfo.publishedDate, 
    buy_link: this.props.book.saleInfo.buyLink === undefined ? this.props.book.volumeInfo.infoLink : this.props.book.saleInfo.buyLink , 
    img_url: this.props.book.volumeInfo.imageLinks=== undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" : this.props.book.volumeInfo.imageLinks.thumbnail,
    user_id: this.props.user}}
    
    handleClick = () => {
      
        this.props.addBook(this.state.book)
    }

    render() {
        
        return(
            <button onClick={this.handleClick}>save</button>
        )
    }


}

export default connect (null, {addBook})(SaveBook)

