import React from 'react'

const LikeButton = (props) => {
    return(
        <div>
            <button onClick={props.likeBook}>
                <p>Likes: {props.book.likes}</p>
            </button>
        </div>
    )

}

export default LikeButton