
import React from 'react';
import style from './User.module.css';
import userAvatar from '../../assets/images/userAvatar.png';
import { NavLink } from 'react-router-dom';


const User = ({user, ...props}) => {

   return <div key={props.key}>
        <span>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userAvatar} className={style.users_avatar} alt='avatar'></img>
          </NavLink>
          <div>
            {user.followed 
              ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.onUnfollowClick(user.id)}}>Отписаться</button> 
              : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.onFollowClick(user.id)}}>Подписаться</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>

}

export default User;
