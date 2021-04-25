import React from 'react'

const Comment = ({comment}) => {
    return(
        <div>
            <p>{comment.text}</p>
            <p>name: {comment.commenter}</p>
        </div>
    )
}

export default Comment;