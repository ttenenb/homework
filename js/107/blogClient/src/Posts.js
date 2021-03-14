import React, { useEffect, useState } from 'react'
import Post from './Post';
import socketIo from 'socket.io-client';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost/posts');
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const thePosts = await response.json();
        setPosts(thePosts);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log('connecting socket');
    const socket = socketIo.connect('http://localhost');
    socket.on('comment', commentData => {
      console.log(commentData);

      const newPosts = [...posts];
      console.log(posts, newPosts);
      const index = posts.findIndex(p => p._id === commentData.postId);
      const thePost = newPosts[index] = { ...newPosts[index] };
      thePost.comments = thePost.comments || [];
      thePost.comments.push(commentData.comment);

      setPosts(newPosts);
    });

    return () => {
      console.log('disconnecting socket');
      socket.disconnect();
    }
  }, [posts]);

  return (
    <div>
      {posts.map(p => <Post key={p._id} post={p} />)}
    </div>
  )
}
