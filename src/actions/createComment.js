const addComment = comment => {
    return {
      type: 'ADD_COMMENT',
      comment
    }
  }
  
  export const createComment = (comment) => {
    return dispatch => {
      fetch(`https://zbooks-api.herokuapp.com/api/v1/books/${comment.book_id}/comments`, {
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