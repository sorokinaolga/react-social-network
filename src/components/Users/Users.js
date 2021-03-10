
import React from 'react';
import style from './Users.module.css';
import userAvatar from '../../assets/images/userAvatar.png';
import { NavLink } from 'react-router-dom';



const Users = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i=1; i<=pageCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        if (p < 40) {return <span className={p === props.currentPage && style.selected_page} onClick={() => {props.onPageChanged(p)}}>{p} </span>}
      })}
    </div>
    {
      props.users.map(element => <div key={element.id}>
        <span>
          <NavLink to={'/profile/' + element.id}>
            <img src={element.photos.small != null ? element.photos.small : userAvatar} className={style.users_avatar} alt='avatar'></img>
          </NavLink>
          <div>
            {element.followed 
              ? <button disabled={props.followingInProgress.some(id => id === element.id)} onClick={() => {props.onUnfollowClick(element.id)}}>Отписаться</button> 
              : <button disabled={props.followingInProgress.some(id => id === element.id)} onClick={() => {props.onFollowClick(element.id)}}>Подписаться</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{element.name}</div>
            <div>{element.status}</div>
          </span>
          <span>
            <div>{"element.location.country"}</div>
            <div>{"element.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>

}

export default Users;
