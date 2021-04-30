import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator, logoutThunkCreator } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/></div>
            <div><Field placeholder={'Пароль'} name={'password'} component={Input} validate={[required]} type={'password'}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Запомнить меня</div>

            {props.captchaUrl && 
                <div>
                    <img src={props.captchaUrl} /> 
                    <Field placeholder={''} name={'captcha'} component={Input} validate={[required]}/>
                </div>}
            { props.error && <div className={style.form_error}>{props.error}</div>}
            <div><button>Войти</button></div>
        </form>
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

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitLoginForm} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login);