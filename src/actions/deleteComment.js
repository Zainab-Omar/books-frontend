export const deleteComment = (comment) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000//api/v1/books/${comment.book_id}/comments/${comment.id}`, {
            method: 'Delete'
        })
        .then(res => res.json())
        .then(comment => dispatch({type: 'DELETE_COMMENT', comment}))
     }
    }