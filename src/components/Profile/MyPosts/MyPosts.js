import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let arrayPost = 
      props.profilePage.postData.map(element => <Post title={element.title} src={element.src} />);

    let newPostElement = React.createRef();  
    
    let onClickAddPost = () => {
      props.addPost();
    }

    let onChangePost = () => {
      let text = newPostElement.current.value;
      props.changePost(text);
    }

    return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onChangePost} ref={newPostElement} value={props.profilePage.newPostText}/>
            </div>
            <div>
              <button onClick={onClickAddPost}>Add post</button>
            </div>
          </div>
          {arrayPost}
        </div>
    );
}

export default MyPosts;