import React, { useState, useEffect } from 'react';
import './PostsList.css';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{textAlign: 'center'}}>Loading...</p>;
  if (error) return <p style={{textAlign: 'center', color: 'red'}}>Error: {error}</p>;

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
