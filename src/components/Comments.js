import React from 'react'
import Comment from './Comment'
const Comments = ({comments}) => {
    const renderComments = comments != null && comments.length > 0 ? comments.map(comment => <Comment key={comment.id} comment={comment}/>) : null

    return(
        <div>
            <h3>Comments: </h3>
            {renderComments}
        </div>
    )
}

export default Comments;