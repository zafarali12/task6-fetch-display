import React from 'react';
import './App.css';
import PostsList from './components/PostsList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Task 6: Fetch and Display Posts
      </h1>
      <PostsList />
    </div>
  );
}

export default App;
