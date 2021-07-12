import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style['app-sidebar']}>
      <ul className={style['menu-list']}>
        <li><NavLink className={style['menu-item-link']} activeClassName={style['menu-item-link-active']} to="/profile">Профиль</NavLink></li>
        <li><NavLink className={style['menu-item-link']} activeClassName={style['menu-item-link-active']} to="/users">Пользователи</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;