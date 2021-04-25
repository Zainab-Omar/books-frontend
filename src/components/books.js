import React from 'react'
import Book from './Book'

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