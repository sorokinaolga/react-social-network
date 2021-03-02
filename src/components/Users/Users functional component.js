import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userAvatar from '../../assets/images/userAvatar.png';

const Users = (props) => {
  let getUsers = () => {
    if (!props.users.length) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
      });
    }
  }

  return <div>
    <button onClick={getUsers}>Get users</button>
    {
      props.users.map(element => <div key={element.id}>
        <span>
          <img src={element.photos.small != null ? element.photos.small : userAvatar} className={style.users_avatar}></img>
          <div>
            {element.followed 
              ? <button onClick={() => {props.unfollow(element.id)}}>Отписаться</button> 
              : <button onClick={() => {props.follow(element.id)}}>Подписаться</button>}
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
