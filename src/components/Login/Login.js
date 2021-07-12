import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator, logoutThunkCreator } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import style from './Login.module.css';

const LoginForm = (props) => {
    return(
        <div className={style.box}>
            <h1 className={style.title}>Логин</h1>
            <form onSubmit={props.handleSubmit}>
                <Field className={style.input} placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
                <Field className={style.input} placeholder={'Пароль'} name={'password'} component={Input} validate={[required]} type={'password'}/>
                <div className={style.input_remember}><Field type={'checkbox'} name={'rememberMe'} component={'input'} /> <label htmlFor={'rememberMe'}>Запомнить меня</label></div>

                {props.captchaUrl && 
                    <div>
                        <img src={props.captchaUrl} alt='' /> 
                        <Field className={style.input} placeholder={''} name={'captcha'} component={Input} validate={[required]}/>
                    </div>}
                { props.error && <p className={style.form_error}>{props.error}</p>}
                <button className={style.button} >Войти</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmitLoginForm = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <LoginReduxForm onSubmit={onSubmitLoginForm} captchaUrl={props.captchaUrl} />

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login);