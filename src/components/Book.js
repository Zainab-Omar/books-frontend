import React from 'react'
import SaveBook from './SaveBook'
import {connect} from 'react-redux';
import { Card } from 'react-bootstrap'
const Book = ({book, users}) => {
   const authors = book.volumeInfo.authors || []
      return(
         <div className="book">
            <Card style={{ width: '18rem', height: '550px' }}>
               <Card.Img className="image-size" variant="top" src={book.volumeInfo.imageLinks === undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" : `${book.volumeInfo.imageLinks.thumbnail}`} />
               <Card.Body>
                  <Card.Title>Title: {book.volumeInfo.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Authors: {authors.map(auther => auther)}</Card.Subtitle>
                  <Card.Text>
                      publishedDate: {book.volumeInfo.publishedDate}
                  </Card.Text>
                  <a href= {book.saleInfo.buyLink === undefined ? `${book.volumeInfo.infoLink}` : `${book.saleInfo.buyLink}`} target="_blank">Buy Link</a>
                  <Card.Link>{localStorage.token !== undefined ?  <SaveBook book={book} user = {users.id} /> : null} </Card.Link>
               </Card.Body>
            </Card>
        
         </div>
        
    )

}

const mapStateToProps = state => {
   return {
      users: state.users.currentUser
   }
}

export default connect(mapStateToProps)(Book)
