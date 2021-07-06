import React from 'react'


const Comment = ({comment}) => {
    return(
        <div className="comment-show">
        <div className="comment-content">
            <p className="comment-date">{comment.created_at.slice(0,10)}</p>
            <p>{comment.note}</p>

         </div>
    
        </div>
    )
}

export default Comment;