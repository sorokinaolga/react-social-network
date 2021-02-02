import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
          My posts
          <Post title='Post 1' src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' />
          <Post title='Post 2' src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' />
          <Post title='Post 3' src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' />
          <Post title='Post 4' src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' />
          <Post title='Post 5' src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' />
          <Post title='Post 6' src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg' />
        </div>
    );
}

export default MyPosts;