import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let arrayItemData = 
    props.messagesPage.dialogsData.map(element => <DialogItem id={element.id} name={element.name} />);
  
  let arrayMessageData = 
    props.messagesPage.dialogsData.map(element => <Message text={
      element.message.map(el => el.text)} />);

  return (
    <div className={style.dialogs}>
      <div className={style.items}>
        { arrayItemData }
      </div>
      <div className={style.messages}>
        { arrayMessageData }
      </div>
    </div>
  );
}

export default Dialogs;
