import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userAvatar from '../../assets/images/userAvatar.png';


class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
    });
  }

  render() {
    return <div>
      <div>
        <span>1</span>
        <span className={style.selected_page}>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      {
        this.props.users.map(element => <div key={element.id}>
          <span>
            <img src={element.photos.small != null ? element.photos.small : userAvatar} className={style.users_avatar}></img>
            <div>
              {element.followed 
                ? <button onClick={() => {this.props.unfollow(element.id)}}>Отписаться</button> 
                : <button onClick={() => {this.props.follow(element.id)}}>Подписаться</button>}
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
}

export default Users;
