import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
      <header className={style.header}>
        <img src='https://www.flaticon.com/premium-icon/icons/svg/3387/3387987.svg' />

        <div className={style.login_block}>
          { props.isAuth ? <div><span>{props.login}</span> <button onClick={props.logoutThunkCreator}>Выйти</button></div> 
            : <NavLink to='/login'>Войти</NavLink>
          }
        </div>
      </header>
    );
}

export default Header;