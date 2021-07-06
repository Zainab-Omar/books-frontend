import React from 'react'


const Comment = ({comment}) => {
    return(
        <div className="comment-show">
             
            <p>{comment.note}</p>
            <p>{comment.created_at.slice(0,10)}</p>
           
    
        </div>
    )
}

export default Comment;