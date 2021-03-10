import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let arrayPost = 
      props.profilePage.postData.map(element => <Post key={element.id} title={element.title} src={element.src} />);
    
    let onClickAddPost = (e) => {
      props.addPost(e.newPostText);
    }

    return (
        <div>
          <h3>My posts</h3>
          <AddPostReduxForm onSubmit={onClickAddPost}/>
          {arrayPost}
        </div>
    );
}

const AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({form:'newPostForm'})(AddPostForm);

export default MyPosts;