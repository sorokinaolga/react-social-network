import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let arrayPost = 
      props.postData.map(element => <Post title={element.title} src={element.src} />);

    let newPostElement = React.createRef();  
    
    let addPost = () => {
      props.dispatch({type:'ADD-POST'});
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch({type:'CHANGE-NEW-POST', text: text});
    }

    return (
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
          </div>
          {arrayPost}
        </div>
    );
}

export default MyPosts;