let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = () => {
  let post = {id: 5, title: state.profilePage.newPostText, src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'};
  state.profilePage.postData.push(post);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const addMessage = (newMessage) => {
  let text = {id: 3, text: newMessage};
  state.messagesPage.dialogsData[0].message.push(text);
  rerenderEntireTree(state);
}

export const changeNewPost = (text) => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;