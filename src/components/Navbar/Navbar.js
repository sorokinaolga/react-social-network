import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li><NavLink className={style.item} activeClassName={style.active} to="/profile">Профиль</NavLink></li>
        <li><NavLink className={style.item} activeClassName={style.active} to="/users">Пользователи</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;