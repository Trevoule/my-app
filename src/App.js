import React from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import { useState } from 'react';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript', body: 'Description' },
        { id: 3, title: 'JavaScript', body: 'Description' }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
    
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Список постов про JS' />
    </div>
  );
}

export default App;
