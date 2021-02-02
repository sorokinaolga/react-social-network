import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img className={style.theme} src='https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-yagod-na-rabochij-stol-45-650x406.jpg'></img>
        </div>
        <div className={style.profile}>
          ava+description
          <img src='https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'></img>
        </div>
      </div>
    );
}

export default ProfileInfo;