import './AddComment.css';
import React, { useState } from 'react'

export default function AddComment({ onEndCommenting, postId }) {
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    try {
      const response = await fetch(`http://localhost/posts/${postId}/comments`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body: commentText })
      });
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      console.error(err);
    }

    onEndCommenting();
  };

  return (
    <div className="addcommentform">
      <textarea value={commentText} onChange={e => setCommentText(e.target.value)}></textarea>
      <button onClick={addComment}>add</button>
      <button onClick={onEndCommenting}>cancel</button>
    </div>
  )
}
