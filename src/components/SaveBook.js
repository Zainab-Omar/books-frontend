import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'

class SaveBook extends React.Component {
   
    state = {book: {id: this.props.book.id, 
    title: this.props.book.volumeInfo.title, 
    authors: this.props.book.volumeInfo.authors, 
    publishedDate: this.props.book.volumeInfo.publishedDate, 
    buyLink: this.props.book.saleInfo.buyLink, 
    user_id: this.props.users.id}}
    
    handleClick = () => {
      
        this.props.addBook(this.state.book)
    }

    render() {
        
        return(
            <button onClick={this.handleClick}>save</button>
        )
    }


}

const mapStateToProps = state => {
    return {
       users: state.users.currentUser
    }
}

export default connect(mapStateToProps, { addBook })(SaveBook)

// export default SaveBook