import React from 'react'

const Comment = ({comment}) => {
    return(
        <div className="comment">
            <hr />
            <p>{comment.note}</p>
    
        </div>
    )
}

export default Comment;