const addLikesToBook = (book) => {
    return {
      type: 'LIKE_BOOK', payload: book
    }
}


export const likeBook = (book) => {
    const likedBook = Object.assign(book, { likes: book.likes + 1 })
    return dispatch => {
      fetch(`http://localhost:3000/api/v1/books/${book.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(likedBook)
      })
      .then(response => response.json())
      .then(book => dispatch(addLikesToBook(book)))
      .catch(error => console.log(error))
    }
  }