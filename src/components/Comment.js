import React from 'react'
import { CloseButton } from 'react-bootstrap';

const Comment = ({comment}) => {
    return(
   
        <div className="comment-show">
        <div className="comment-content">
            <CloseButton className="close-btn"/>
            <p className="comment-text">{comment.note}</p>
            <p className="comment-date">{comment.created_at.slice(0,10)}</p>
           

         </div>
    
        </div>
    )
}

export default Comment;