import React from 'react';
import { addMessageActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let arrayItemData = 
    props.messagesPage.dialogsData.map(element => <DialogItem id={element.id} name={element.name} />);
  
  let arrayMessageData = 
    props.messagesPage.dialogsData.map(element => <Message text={
      element.message.map(el => el.text)} />);

  let text = React.createRef();    

  let addMessage = () => {
    let newMessage = text.current.value;
    props.dispatch(addMessageActionCreator(newMessage));
    text.current.value = '';
  }

  return (
    <div className={style.dialogs}>
      <div className={style.items}>
        { arrayItemData }
      </div>
      <div className={style.messages}>
        { arrayMessageData }
        <div>
          <textarea ref={text}></textarea>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
