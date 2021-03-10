import './AddPost.css';
import React from 'react'

export default function AddPost() {
  return (
    <>
      <h1>Add Post</h1>
    <form method="POST" action="http://localhost/addPost">
      <label>title
       <input name="title"></input>
      </label>
      <br></br>
      <label>body
       <textarea id="postbody" name="body"></textarea>
      </label>
      <br></br>
      <button>Submit</button>
      </form>
      </>
  )
}
