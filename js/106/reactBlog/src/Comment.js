import React from 'react'
import AddComment from './AddComment'

function Comment({ comment, newcomment }) {
    if (!newcomment === '') {
        return (
            <>
              <h4>{comment.body}</h4>
              By {comment.author} on {comment.date}
              <AddComment body={newcomment} />
            </>
        )
    }

    return (
        <>
          <h4>{comment.body}</h4>
          By {comment.author} on {comment.date}
        </>
    )
}

export default Comment;
