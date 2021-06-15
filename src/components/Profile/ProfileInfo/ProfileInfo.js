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

    return (
      
      <div className={style['profile-wrapper']}>
        <img className={style['profile-img']} src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} height='180' width='180' alt=''></img>
        <div className={style['profile-info']}>
          <h1 className={style['profile-name']}>{props.profile.fullName}</h1>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          {props.isOwner && <input className={style['profile-button']} type={'file'} onChange={handlerUpdateAvatar} />}
        </div>
        <div className={style['profile-description']}>
          { editMode
            ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
            : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}} /> 
          }
        </div>
      </div>

    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    <><b>В поисках работы:</b> {profile.lookingForAJob ? 'да' : 'нет'}</>
    { profile.lookingForAJob &&
    <div><b>Профессиональные навыки:</b> {profile.lookingForAJobDescription}</div>
    }
    <div><b>Обо мне:</b> {profile.aboutMe}</div>
    <div><b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })}</div>
    {isOwner && <button className={style['description-button']} onClick={goToEditMode}>Редактировать профиль</button>}
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contact}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;