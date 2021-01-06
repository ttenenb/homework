import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddPosts from './AddPosts';

function GetPost(props) {
    const [posts, setPosts] = useState([]);
    const [blogs, setBlogs] = useState();
    const { id } = useParams();

    useEffect(() => {
        (async () => {

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }
                const allPosts = await response.json();

                setPosts(allPosts);
            } catch (e) {
                console.error(e);
            }
        })();

    }, [id])

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
    }, []);

    if (!posts) {
        return null;
    }
    if (!blogs) {
        return null;
    }

    return (
        <div>
            <h1 className='title'>{blogs.find(blog=>blog.id === +id).name}</h1>
            {posts.map(post => <AddPosts key={post.id} id={post.id} title={post.title} body={post.body} />)}
        </div>
    );
}

export default GetPost;