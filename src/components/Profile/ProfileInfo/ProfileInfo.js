import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/userAvatar.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
    }

    return (
      
      <div className={style.profile}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} height='200' width='200'></img>
        <span>{props.profile.fullName}</span>
      </div>

    );
}

export default ProfileInfo;