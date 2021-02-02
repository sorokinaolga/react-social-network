import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.items}>
        <DialogItem id='1' name='Витя' />
        <DialogItem id='2' name='Петя' />
        <DialogItem id='3' name='Лена' />
        <DialogItem id='4' name='Света' />
        <DialogItem id='5' name='Катя' />
      </div>
      <div className={style.messages}>
        <Message text='Привет!' />
        <Message text='Как дела' />
        <Message text='Что нового?' />
      </div>
    </div>
  );
}

export default Dialogs;
