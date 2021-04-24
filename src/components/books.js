import React from 'react'
import {Route, Link} from 'react-router-dom'
// import Book from './Book'

const Books = ({books}) => {
    const renderBooks = books.map(book => 
        <div key={book.id}>
         <img src={book.img_url} alt={book.id} width="200" height="200" key={book.id}/>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        </div>
  
    )
    return(
        <div>
          {renderBooks}
          {/* <Book books={this.props.books} /> */}
        </div>
    )
}

export default Books