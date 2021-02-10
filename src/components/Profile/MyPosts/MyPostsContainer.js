import React from 'react';
import { addPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
      props.store.dispatch(addPostActionCreator());
    }

    let changePost = (text) => {
      props.store.dispatch(changeNewPostActionCreator(text));
    }

    return (<MyPosts postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} changePost={changePost} addPost={addPost}/>);
}

export default MyPostsContainer;