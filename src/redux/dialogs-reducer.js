const SEND_MESSAGE = 'SEND-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesText: [...state.messagesText, {id: 3, text: action.newMessage}],
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage})

export default dialogsReducer;