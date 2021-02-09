let store = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, title: 'Post 1', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 2, title: 'Post 2', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, title: 'Post 3', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 4, title: 'Post 4', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
      ],
      newPostText: 'it-kamasutra',
    },
    messagesPage: {
      dialogsData: [
        {id: 1, name: 'Витя', message: [{id: 1, text: 'Привет!'}, {id: 2, text: 'Как дела?'},]},
        {id: 2, name: 'Петя', message: [{id: 1, text: 'Хай'}, {id: 2, text: 'Как дела?'},]},
        {id: 3, name: 'Лена', message: [{id: 1, text: 'Здорово'}, {id: 2, text: 'Как дела?'},]},
        {id: 4, name: 'Света', message: [{id: 1, text: 'Привет'}, {id: 2, text: 'Как дела?'},]},
        {id: 5, name: 'Катя', message: [{id: 1, text: 'Хелоу'}, {id: 2, text: 'Как дела?'},]},
      ] 
    }
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if(action.type === 'ADD-POST') {
      let post = {id: 5, title: this._state.profilePage.newPostText, src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'};
      this._state.profilePage.postData.push(post);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let text = {id: 3, text: action.newMessage};
      this._state.messagesPage.dialogsData[0].message.push(text);
      this._callSubscriber(this._state);
    } else if (action.type === 'CHANGE-NEW-POST') {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  } 
}

export default store;
window.store = store;