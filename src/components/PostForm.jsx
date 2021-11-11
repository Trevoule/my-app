import React from "react";
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import { useState } from 'react';

const PostForm = ({create}) => {
  // получение данных из неуправляемого инпута
  // const bodyInputRef = useRef();
  // получение данных из управляемого инпута
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  const [post, setPost] = useState({ title:'', body:''})
  
  const addNewPost = (e) => {
    e.preventDefault();

    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }
    // setPosts([...posts, newPost])
    // setBody('')
    // setTitle('')
    // setPosts([...posts, { ...post, id: Date.now() }])
      const newPost = {
          ...post, id: Date.now()
      }
      create(newPost)
      setPost({ title: '', body: '' })   
  }
    
    return (
     <form>
        <MyInput
          value={post.title}
          // onChange={e => {setTitle(e.target.value)}}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          
          // ref={bodyInputRef} //некотролируемый компонент
          value={post.body}
          // onChange={e => {setBody(e.target.value)}}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
    )
}

export default PostForm