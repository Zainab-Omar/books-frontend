export const deleteBook = (book) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/api/v1/books/${book.id}`, {
            method: 'Delete'
        })
        .then(res => res.json())
        .then(book => dispatch({type: 'DELETE_BOOK', book}))
     }
    }