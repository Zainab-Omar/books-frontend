import React from 'react'
import { CloseButton } from 'react-bootstrap';
import { deleteComment } from '../actions/deleteComment'
import {connect} from 'react-redux';

const Comment = ({comment, deleteComment}) => {
    return(
   
        <div className="comment-show">
        <div className="comment-content">
            <CloseButton className="close-btn" onClick = {() => deleteComment(comment)}/>
            <p className="comment-text">{comment.note}</p>
            <p className="comment-date">{comment.created_at.slice(0,10)}</p>
           

         </div>
    
        </div>
    )
}

export default connect(null, {deleteComment})(Comment);
// export default Comment;