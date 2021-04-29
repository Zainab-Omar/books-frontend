import React from 'react'

const Comment = ({comment}) => {
    return(
        <div className="comment">
            <hr />
            <h4>{comment.commenter}</h4>
            <p>{comment.text}</p>
    
        </div>
    )
}

export default Comment;