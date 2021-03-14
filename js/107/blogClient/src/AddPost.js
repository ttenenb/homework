import './AddPost.css';
import React from 'react';
import { useHistory } from "react-router-dom";
import useForm from './useForm';

export default function AddPost() {
  let history = useHistory();
  const [values, handleValueChange] = useForm({ title: '', body: '' });

  const submit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/posts', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form id="addPost" onSubmit={submit}>
      <label>Title:
        <input name="title" required value={values.title} onChange={handleValueChange} />
      </label>
      <label>Body:
        <textarea name="body" value={values.body} onChange={handleValueChange}></textarea>
      </label>
      <button>add post</button>
    </form>
  )
}
