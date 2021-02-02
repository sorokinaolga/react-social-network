import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li><a className={style.item} href='#'>Profile</a></li>
        <li><a className={`${style.item} ${style.active}`} href='#'>Messages</a></li>
        <li><a className={style.item} href='#'>News</a></li>
        <li><a className={style.item} href='#'>Music</a></li>
        <li><a className={style.item} href='#'>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;