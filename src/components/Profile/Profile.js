import React from 'react';
// import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveAvatar={props.saveAvatar} saveProfile={props.saveProfile} />
        {/* <MyPostsContainer /> */}
      </div>
    );
}

export default Profile;