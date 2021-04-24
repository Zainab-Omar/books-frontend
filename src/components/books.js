import React from 'react'
import {Route, Link} from 'react-router-dom'
import Book from './book'

const Books = ({books}) => {
    const renderBooks = books.map(book => <Book key={book.id} book={book} />
  
    )
    return(
        <div>
          {renderBooks}
        </div>
    )
}

export default Books