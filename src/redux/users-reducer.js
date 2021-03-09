import { getFollowFriend, getUnfollowFriend, getUsers } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
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
                  : [state.followingInProgress.filter(id => id != action.id)]
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

export const getUsersThunkCreator = (currentPage, pageSize) => { 
    return (dispatch) => {
        dispatch(toggleFetching(true));
        getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const getNewUsersThunkCreator = (page, pageSize) => { 
    return (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(toggleFetching(true));
        getUsers(page, pageSize).then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const unfollowThunkCreator = (id) => { 
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, id));
        getUnfollowFriend(id).then(code => {
            if (code === 0) {
                dispatch(unfollow(id));
            }
            dispatch(setFollowingInProgress(false, id));
        });
    }
}

export const followThunkCreator = (id) => { 
    return (dispatch) => {
        dispatch(setFollowingInProgress(true, id));
        getFollowFriend(id).then(code => {
            if (code === 0) {
                dispatch(follow(id));
            }
            dispatch(setFollowingInProgress(false, id));
        });
    }
}

export default usersReducer;