import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/userAvatar.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
      return <Preloader />
    }

    const handlerUpdateAvatar = (evt) => {
      if (evt.target.files.length) {
        props.saveAvatar(evt.target.files[0]);
      }
    }

    const onSubmit = (formData) => {
      props.saveProfile(formData);
      setEditMode(false);
    }

    // const onSubmit = async (formData) => {
    //   await props.saveProfile(formData);
    //   setEditMode(false);
    // }
    
    // const onSubmit = (formData) => {
    //   props.saveProfile(formData).then(
    //     () => {
    //       setEditMode(false);
    //     }
    //   )
    // }

    return (
      
      <div className={style.profile}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} height='200' width='200'></img>
        <b>{props.profile.fullName} </b>
        {props.isOwner && <input type={'file'} onChange={handlerUpdateAvatar} />}
        { editMode
          ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}} /> }
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>

    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {/* div>FullName: {profile.fullName}</div>< */}
    <><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</>
    { profile.lookingForAJob &&
    <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>
    }
    <div><b>About me:</b> {profile.aboutMe}</div>
    <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
    })}</div>
    {isOwner && <button onClick={goToEditMode}>Edit profile</button>}
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contact}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;