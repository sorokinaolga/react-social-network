import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let arrayItemData = 
    props.messagesPage.dialogsData.map(element => <DialogItem key={element.id} id={element.id} name={element.name} />);
  
  let arrayMessageData = 
    props.messagesPage.messagesText.map(element => <Message key={element.id} text={element.text} />);

  let addNewMessage = (e) => {
    props.sendMessage(e.newMessageText);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.items}>
        { arrayItemData }
      </div>
      <div className={style.messages}>
        { arrayMessageData }
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}> 
      <Field component={Textarea} 
            validate={[ required, maxLength100 ]} 
            name='newMessageText' 
            placeholder='Введите сообщение' />
      <button>Send message</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form:'addMessageForm'})(AddMessageForm);

export default Dialogs;
