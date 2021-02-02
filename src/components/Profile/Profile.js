import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
      <div className={style.content}>
        <div>
          <img className={style.theme} src='https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-yagod-na-rabochij-stol-45-650x406.jpg'></img>
        </div>
        <div>
          ava+description
          <img src='https://lh3.googleusercontent.com/proxy/YP0EoSuVExdAhi0d0-or2KovzWkPVQaNovhsKBD0FMR8sViyE93yPX04Rv0oxHFcEbFhjgha39LdhHZsXr6B4DrIkxh3NmgKb-3H20JzZ8sxW-NXHp35C_3VNixnvxueQdfuQnZu3WDI9Pkrk4TCWoU'></img>
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;