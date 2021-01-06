import './addPost.css';
import React from 'react';

function AddPosts(props) {
    const { title, body } = props;
    return (
        <>
        <div className='post'>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
        </>
    );
}

export default AddPosts;