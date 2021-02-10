import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let arrayItemData = 
    props.dialogsData.map(element => <DialogItem id={element.id} name={element.name} />);
  
  let arrayMessageData = 
    props.dialogsData.map(element => <Message text={
      element.message.map(el => el.text)} />);

  let textMessage = React.createRef();    

  let onClickHandler = () => {
    let newMessage = textMessage.current.value;
    props.sendMessage(newMessage);
  }
  
  let onChangeHandler = (e) => {
    let text = e.target.value;
    props.changeNewMessage(text);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.items}>
        { arrayItemData }
      </div>
      <div className={style.messages}>
        { arrayMessageData }
        <div>
          <textarea onChange={onChangeHandler} ref={textMessage} value={props.newMessageText}></textarea>
          <button onClick={onClickHandler}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
