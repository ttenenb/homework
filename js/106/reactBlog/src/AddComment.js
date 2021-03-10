import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


export default function AddComment({body}) {
  // const [comment, setComment] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const { postId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(`http://localhost/addComment/${postId}`, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ body: body })
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
        }
        const c = await response.json();
        // setComment(comment);

      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [postId,body]);

  if (loading) {
    return <h1>loading....</h1>
  }

  if (error) {
    return <h1 style={{ color: 'red', 'text-align': 'center' }}>{error.message}</h1>
  }
  if (!body) {
    return null;
  }
  
  return (
    <>
    </>
  )
}
