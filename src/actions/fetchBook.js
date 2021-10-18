export const fetchBook= (bookId) => {
    return dispatch => {
      return fetch(`https://zbooks-api.herokuapp.com/api/v1/books/${bookId}`)
      .then(response => response.json())
    }
  }