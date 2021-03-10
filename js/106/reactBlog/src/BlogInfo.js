import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import $ from 'jquery';

export default function BlogInfo({ blog }) {
  const [comments] = useState(blog.comments);
  const inputComments = useRef(null);
  const { _id, title, body, date, author } = blog;
  let index = 0;

  if (!comments) {
    return (
      <div className="blog">
        <div className="title">{title} by {author} on {date}</div>
        <div className="body">{body}</div>
        <button onClick={() => $(`#sc${_id}`).show()}>add comment</button>
        <div className="submitcomment" id={`sc${_id}`}>
          <label>Comments &nbsp;
                <input name="commentBody" ref={inputComments}></input>
          </label>
          <Link to={`/addComment/${_id}`}>
            Submit
      </Link>
          <button onClick={() => $(`#sc${_id}`).hide()}>cancel</button>
        </div>

        <div className="submitcomment">
          <label>Comments &nbsp;
              <input name="commentBody" ref={inputComments}></input>
          </label>
          <Link to={`/addComment/${_id}`}>
            Submit
    </Link>
        </div>
      </div>)
  }
  return (
    <div className="blog">
      <div className="title">{title} by {author} on {date}</div>
      <div className="body">{body}</div>
      <button onClick={() => $(`#sc${_id}`).show()}>add comment</button>
      <div className="submitcomment" id={`sc${_id}`}>
        <label>Comments &nbsp;
                <input name="commentBody" ref={inputComments}></input>
        </label>
        <Link to={`/addComment/${_id}`}>
          Submit
      </Link>
        <button onClick={() => $(`#sc${_id}`).hide()}>cancel</button>
      </div>
      <div className="comments">
        <h2>Comments</h2>
        {comments.map(comment => <Comment key={index++} comment={comment} newcomment={inputComments} />)}
      </div>
    </div>
  )
}
