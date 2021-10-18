export const addBook = (data) => {
    return (dispatch) => {
        fetch('https://zbooks-api.herokuapp.com/api/v1/books', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(book => dispatch({type:'ADD_BOOK', book}))
    }
}