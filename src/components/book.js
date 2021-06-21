import React from 'react'
import SaveBook from './SaveBook'
import {connect} from 'react-redux';

const Book = ({book, users}) => {
      const authors = book.volumeInfo.authors || []
    return(
         <div>
            <img src={book.volumeInfo.imageLinks === undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" : `${book.volumeInfo.imageLinks.thumbnail}`} width="200" height="200" alt="book image" />
            <p>Title: {book.volumeInfo.title}</p>
            <p>Authors: {authors.map(auther => auther)}</p>
            <p>publishedDate: {book.volumeInfo.publishedDate}</p>
            <a href= {book.saleInfo.buyLink === undefined ? `${book.volumeInfo.infoLink}` : `${book.saleInfo.buyLink}`} target="_blank">Buy Link</a>
            {users !== undefined ?  <SaveBook book={book} user = {users.id} /> : null} 
           
         </div>
        
    )

}

const mapStateToProps = state => {
   return {
      users: state.users.currentUser
   }
}

export default connect(mapStateToProps)(Book)



