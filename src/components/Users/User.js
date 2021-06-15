
import React from 'react';
import style from './User.module.css';
import userAvatar from '../../assets/images/userAvatar.png';
import { NavLink } from 'react-router-dom';


const User = ({user, ...props}) => {

  return <li className={style['user-list-item']} key={props.key}>
          <NavLink className={style['item-img']} to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userAvatar} alt='avatar' width='100' height='100'></img>
          </NavLink>
          <div className={style['item-description']}>
            <div className={style['item-name']}>{user.name}</div>
            <div>{user.status || 'статус'}</div>
          </div>
          <div className={style['item-button-wrapper']}>
            {user.followed 
              ? <button className={style['item-button']} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.onUnfollowClick(user.id)}}>Отписаться</button> 
              : <button className={style['item-button']} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.onFollowClick(user.id)}}>Подписаться</button>}
          </div>
        </li>

}

export default User;
