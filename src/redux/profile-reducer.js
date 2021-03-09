import { getProfile } from "../api/api";

const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, title: 'Post 1', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 2, title: 'Post 2', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, title: 'Post 3', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 4, title: 'Post 4', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let post = {id: 5, title: state.newPostText, src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'};
            let stateCopy = {
                ...state,
                postData: [...state.postData, post],
                newPostText: '',
            }
            return stateCopy;
        case NEW_POST_CHANGE:
            return {
                ...state,
                newPostText: action.text,
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;  
    }
}

export const addPost = () => ({type: ADD_POST})
export const changeNewPost = (text) => ({type: NEW_POST_CHANGE, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;