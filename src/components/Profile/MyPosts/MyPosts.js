import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let arrayPost = 
      props.postData.map(element => <Post title={element.title} src={element.src} />);

    return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          {arrayPost}
        </div>
    );
}

export default MyPosts;