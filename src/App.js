import React from 'react';
import { useState } from 'react';
import './styles/App.css'
import MyButton from './UI/MyButton';

// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import MyInput from './UI/MyInput';

function App() {

  const [posts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript', body: 'Description' },
        { id: 3, title: 'JavaScript', body: 'Description' }
  ]);
  
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов про JS' />
    </div>
  );
}

export default App;
