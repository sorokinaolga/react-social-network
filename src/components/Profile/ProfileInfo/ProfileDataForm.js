import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {/* <b>Full name:</b><Field placeholder={profile.fullName} name={'fullName'} component={Input} /> */}
        <div><b>В поисках работы:</b><Field type={'checkbox'} name={'lookingForAJob'} component={'input'}/></div>
        <div><b>Профессиональные навыки:</b><Field name={'lookingForAJobDescription'} component={Textarea} /></div>
        <div><b>Обо мне:</b><Field name={'aboutMe'} component={Input} /></div>
        <div><b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}:</b><Field name={'contacts.' + key} component={Input} />
            </div>
        })}</div>
        {/* { error && <div className={style.form_error}>{error}</div>} */}
        <button>Сохранить</button>
    </form>
}

const ProfileDataReduxForm  = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataReduxForm;