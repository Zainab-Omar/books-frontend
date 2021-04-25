export const fetchComments = bookId => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/books/${bookId}/comments`)
        .then(response => response.json())
        .then(comments => dispatch({type: 'FETCH_COMMENTS', comments}))
        .catch(error => console.log(error))
    }
}