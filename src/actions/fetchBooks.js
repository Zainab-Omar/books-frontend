export function fetchBooks(query="javascript") {

    return dispatch => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_BOOKS_KEY}&maxResults=40`)
        .then(response => response.json())
        .then(books => dispatch({
            type: 'FETCH_BOOKS', books
        }))
        .catch(error => console.log(error))
    }
}

