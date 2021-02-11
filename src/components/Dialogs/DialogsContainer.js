import React from 'react';
import { connect } from 'react-redux';
import { newMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(sendMessageActionCreator(newMessage));
    },
    changeNewMessage: (text) => {
      dispatch(newMessageChangeActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
