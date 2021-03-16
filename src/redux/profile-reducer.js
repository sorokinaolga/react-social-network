import { profileAPI } from "../api/api";

const ADD_POST = 'social_network/profile/ADD-POST';
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social_network/profile/SET_STATUS';
const DELETE_POST = 'social_network/profile/DELETE_POST';
const SET_AVATAR = 'social_network/profile/SET_AVATAR';

let initialState = {
    postData: [
        {id: 1, title: 'Post 1', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 2, title: 'Post 2', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, title: 'Post 3', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 4, title: 'Post 4', src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {id: 5, title: action.text, src: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'}],
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status,
            }
        case SET_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;  
    }
}

export const addPost = (text) => ({type: ADD_POST, text})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setAvatar = (photos) => ({type: SET_AVATAR, photos})

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const saveAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.saveAvatar(file);
    if(response.data.resultCode === 0) {
        dispatch(setAvatar(response.data.data.photos));
    }
}


export default profileReducer;