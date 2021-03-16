import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'social_network/users/FOLLOW';
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SET_USERS = 'social_network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social_network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state, 
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                  ? [...state.followingInProgress, action.id]
                  : [state.followingInProgress.filter(id => id !== action.id)]
            } 
        default:
            return state;  
    }
}

export const follow = (id) => ({type: FOLLOW, userId: id })
export const unfollow = (id) => ({type: UNFOLLOW, userId: id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingInProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

export const getUsersThunkCreator = (page, pageSize) => { 
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const getNewUsersThunkCreator = (page, pageSize) => { 
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
    }
}

const followUnfollowFlow = async (dispatch, id, methodAPI, actionCreator) => {
    dispatch(setFollowingInProgress(true, id));
    let code = await methodAPI(id);
    if (code === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(setFollowingInProgress(false, id));
}

export const unfollowThunkCreator = (id) => { 
    return async (dispatch) => {
        let methodAPI = usersAPI.getUnfollowFriend.bind(usersAPI);
        followUnfollowFlow(dispatch, id, methodAPI, unfollow);
    }
}

export const followThunkCreator = (id) => { 
    return async (dispatch) => {
        let methodAPI = usersAPI.getFollowFriend.bind(usersAPI);
        followUnfollowFlow(dispatch, id, methodAPI, follow);
    }
}

export default usersReducer;