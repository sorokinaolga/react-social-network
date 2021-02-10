const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';

let initialState = {
    postData: [
        {id: 1, title: 'Post 1', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 2, title: 'Post 2', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, title: 'Post 3', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 4, title: 'Post 4', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
    case ADD_POST: 
        let post = {id: 5, title: state.newPostText, src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'};
        state.postData.push(post);
        state.newPostText = '';
        return state;
    case NEW_POST_CHANGE:
        state.newPostText = action.text;  
        return state;
    default:
        return state;  
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostActionCreator = (text) => ({type: NEW_POST_CHANGE, text: text})

export default profileReducer;