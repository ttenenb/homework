import './update.css';
import React from 'react';
import AddBlogInfo from './AddBlogInfo';

const UpdatePage = (props) => {
    
    return (
        <div>
            <h1 className='title'>
                {props.title}
            </h1>
            <div className='blogs'>
                {props.content.map(blog => <AddBlogInfo key={blog.id} id={blog.id} name={blog.name} website={blog.website} company={blog.company}/>)}
            </div>
        </div>
    );
}

export default UpdatePage;