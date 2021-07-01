export function fetchBooks(query="books") {

    return dispatch => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_BOOKS_KEY}&maxResults=30`)
        .then(response => response.json())
        .then(books => dispatch({
            type: 'FETCH_BOOKS', books
        }))
        .catch(error => console.log(error))
    }
}

