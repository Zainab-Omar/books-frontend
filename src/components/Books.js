import React from 'react'
import Book from './Book'
import { v4 as uuidv4 } from 'uuid'

const Books = ({books}) => {
    const booksArray = books || []
    const renderBooks = booksArray.map(book => <Book key={uuidv4()} book={book} />)
  return(
      <div>
        {renderBooks}
      </div>
  )
}

export default Books

