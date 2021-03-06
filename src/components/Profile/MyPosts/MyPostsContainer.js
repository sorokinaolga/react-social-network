
import { connect } from 'react-redux';
import { addPost, changeNewPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost());
    },
    changePost: (text) => {
      dispatch(changeNewPost(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;