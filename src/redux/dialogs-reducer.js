const SEND_MESSAGE = 'SEND-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Витя'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Лена'},
        {id: 4, name: 'Света'},
        {id: 5, name: 'Катя'},
    ],
    messagesText: [
        {id: 1, text: 'Привет!'},
        {id: 2, text: 'Как дела?'},
    ],
    newMessageText: '', 
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
    case SEND_MESSAGE:
        let text = {id: 3, text: action.newMessage};
        let stateCopy = {
            ...state,
            messagesText: [...state.messagesText, text],
            newMessageText: '',
        };
        return stateCopy;
    case NEW_MESSAGE_CHANGE:
        return {
            ...state,
            newMessageText: action.text
        }
    default:
        return state;
    }
}

export const sendMessageActionCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage: newMessage})
export const newMessageChangeActionCreator = (text) => ({type: NEW_MESSAGE_CHANGE, text: text})

export default dialogsReducer;