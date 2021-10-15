import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'
import Button from 'react-bootstrap/Button'
class SaveBook extends React.Component {
   
    state = {book: { 
    title: this.props.book.title, 
    authors: this.props.book.authors, 
    published_date: this.props.book.publishedDate, 
    buy_link: this.props.book.infoLink, 
    img_url: this.props.book.imageLinks=== undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" : this.props.book.imageLinks.thumbnail,
    user_id: this.props.user}
    }
    
    handleClick = () => {
        this.props.addBook(this.state.book)
    }

    render() {
        
        return(
            <Button variant="link" onClick={this.handleClick}>add to favorites</Button>
        )
    }
}

export default connect (null, {addBook})(SaveBook)
