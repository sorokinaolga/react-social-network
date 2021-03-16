import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/userAvatar.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
    }

    const handlerUpdateAvatar = (evt) => {
      if (evt.target.files.length) {
        props.saveAvatar(evt.target.files[0]);
      }
    }

    return (
      
      <div className={style.profile}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} height='200' width='200'></img>
        <span>{props.profile.fullName} </span>
        {props.isOwner && <input type={'file'} onChange={handlerUpdateAvatar} />}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>

    );
}

export default ProfileInfo;