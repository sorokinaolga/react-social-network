import React from 'react';
import { newMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = (newMessage) => {
    props.store.dispatch(sendMessageActionCreator(newMessage));
  }
  
  let changeNewMessage = (text) => {
    props.store.dispatch(newMessageChangeActionCreator(text));
  }

  return (
    <Dialogs sendMessage={sendMessage} changeNewMessage={changeNewMessage} dialogsData={state.messagesPage.dialogsData} newMessageText={state.messagesPage.newMessageText}/>
  );
}

export default DialogsContainer;
