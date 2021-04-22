const addComment = comment => {
    return {
      type: 'ADD_COMMENT',
      payload: comment
    }
  }
  
  export const createComment = (comment) => {
    return dispatch => {
      fetch(`http://localhost:3000/api/v1/books/${comment.book_id}/comments/`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(comment)
      })
      .then(response => response.json())
      .then(comment => dispatch(addComment(comment)))
      .catch(error => console.log(error))
    }
  }