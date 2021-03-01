import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  if (!props.users.length) {
    props.setUsers( 
      [
        {id: 1, followed: false, fullName: 'Ivan Ivanov', status: 'Юхууууууууууууу', location: {city: 'Moscow', country: 'Russia'}, avatarUrl: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 2, followed: true, fullName: 'Igor Petrov', status: 'Привет всем', location: {city: 'Samara', country: 'Russia'}, avatarUrl:  'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, followed: false, fullName: 'Vasilisa Sidorova', status: 'Ля ля ля', location: {city: 'Pscov', country: 'Russia'}, avatarUrl:  'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 4, followed: true, fullName: 'Mike Johnson', status: 'Im superman', location: {city: 'New-York', country: 'USA'}, avatarUrl:  'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'}
      ]
    )
  }

  return <div>
    {
      props.users.map(element => <div key={element.id}>
        <span>
          <img src={element.avatarUrl} className={style.users_avatar}></img>
          <div>
            {element.followed 
              ? <button onClick={() => {props.unfollow(element.id)}}>Отписаться</button> 
              : <button onClick={() => {props.follow(element.id)}}>Подписаться</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{element.fullName}</div>
            <div>{element.status}</div>
          </span>
          <span>
            <div>{element.location.country}</div>
            <div>{element.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;
