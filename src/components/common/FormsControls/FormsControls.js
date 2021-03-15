import React from 'react';
import style from './FormsControls.module.css';

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={style.form_control + ' ' + (hasError ? style.error : '')}>
            {children}
            {hasError && <div className={style.error_text}>{error}</div>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}