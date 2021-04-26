import React from 'react'
// import EditBook from './EditBook'
import { Link } from 'react-router-dom'

// this component is to show a single book details and edit it if needed
const Book = ({book}) => {

    return(
        <div>
            <img src={book.img_url} width="200" height="200" alt="book picture" />
            <h5><Link key={book.id} to={`/books/${book.id}`}>Book Title: {book.title}<br /> Book Author: {book.author}</Link></h5>
        </div>
        
    )

}

export default Book