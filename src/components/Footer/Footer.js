import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={style['app-footer']}>
            <p className={style['footer-year']}>@2021</p>
            <p className={style['footer-copyright']}>Учебный проект</p>
        </footer>
    )
}

export default Footer;