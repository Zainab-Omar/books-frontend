export const editBook = (data) => {
    return(dispatch) => {
        fetch(`https://zbooks-api.herokuapp.com/api/v1/books/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(book => dispatch({type: 'EDIT_BOOK', book}))
    }
}