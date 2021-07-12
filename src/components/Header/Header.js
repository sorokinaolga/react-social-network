import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
      <div className={style['app-header']}>
        <span className={style['logo']}>Социальная сеть</span>
        <div className={style['login-block']}>
          { props.isAuth ? <div><span className={style['login-name']}>{props.login}</span> <button className={style['login-button']} onClick={props.logoutThunkCreator}>Выйти</button></div> 
            : <NavLink className={style['login-button']} to='/login'>Войти</NavLink>
          }
        </div>
      </div>
    );
}

export default Header;