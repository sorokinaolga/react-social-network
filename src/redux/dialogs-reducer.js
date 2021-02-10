const SEND_MESSAGE = 'SEND-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Витя', message: [{id: 1, text: 'Привет!'}, {id: 2, text: 'Как дела?'},]},
        {id: 2, name: 'Петя', message: [{id: 1, text: 'Хай'}, {id: 2, text: 'Как дела?'},]},
        {id: 3, name: 'Лена', message: [{id: 1, text: 'Здорово'}, {id: 2, text: 'Как дела?'},]},
        {id: 4, name: 'Света', message: [{id: 1, text: 'Привет'}, {id: 2, text: 'Как дела?'},]},
        {id: 5, name: 'Катя', message: [{id: 1, text: 'Хелоу'}, {id: 2, text: 'Как дела?'},]},
      ],
    newMessageText: '', 
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
    case SEND_MESSAGE:
        let text = {id: 3, text: action.newMessage};
        state.dialogsData[0].message.push(text);
        state.newMessageText = '';
        return state;
    case NEW_MESSAGE_CHANGE:
        state.newMessageText = action.text;
        return state;
    default:
        return state;
    }
}

export const sendMessageActionCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage: newMessage})
export const newMessageChangeActionCreator = (text) => ({type: NEW_MESSAGE_CHANGE, text: text})

export default dialogsReducer;