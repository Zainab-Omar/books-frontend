export const deleteBook = (book) => {
    return(dispatch) => {
        return fetch(`https://zbooks-api.herokuapp.com/api/v1/books/${book.id}`, {
            method: 'Delete'
        })
        .then(res => res.json())
        .then(book => dispatch({type: 'DELETE_BOOK', book}))
     }
    }