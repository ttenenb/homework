import React, { useState, useEffect } from 'react';
import UpdatePage from './UpdatePage';
import PropTypes from 'prop-types';

const BlogList = (props) => {
    const [blogs,setBlogs] = useState();
    useEffect(() => {
        (async () => {
            const blogArray = [];
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error(`${response.status}`)
                }

                const blogs = await response.json();
                blogs.forEach(blog => {
                    blogArray.push(blog);
                });
                setBlogs(blogArray);

            } catch (e) {
                console.error(e);
            }

        })();
    },[]);
    if (!blogs) {
        return null;
}
    return (
        <div>
            <UpdatePage title='Blog List' content={blogs} />
        </div>
    );
}


export default BlogList;

BlogList.propTypes = {
    
};