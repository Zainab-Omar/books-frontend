import React from 'react'
import Book from './Book'

const Books = ({books}) => {
    const booksArray = books || []
    const renderBooks = booksArray.map(book => <Book key={book.id} book={book} />)
  return(
      <div>
        {renderBooks}
      </div>
  )
}

export default Books

