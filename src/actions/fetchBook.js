export const fetchBook= (bookId) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/books/${bookId}`)
      .then(response => response.json())
    }
  }