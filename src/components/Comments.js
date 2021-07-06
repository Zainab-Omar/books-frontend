import React from 'react'
import Comment from './Comment'
const Comments = ({comments, bookId}) => {
    const filterComments = comments != null && comments.length > 0 ? comments.filter(c => c.book_id === parseInt(bookId)) : null
    const renderComments = filterComments.map(comment => <Comment key={comment.id} comment={comment}/>) 

    return(
        <div>
            <h3>your notes: </h3>
            {renderComments}
        </div>
    )
}

export default Comments;