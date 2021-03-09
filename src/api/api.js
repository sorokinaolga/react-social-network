import * as axios from 'axios';


const instance = axios.create({ 
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "82494529-f55a-4c64-b66b-e56c8e3608a1"
    }
});

export const getUsers = (currentPage = 1, pageSize = 5) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
    })

}

export const getProfile = (userId = 2) => {

    return instance.get(`profile/${userId}`)
    .then(response => {
        return response;
    })

}

export const getAuthMe = () => {

    return instance.get(`auth/me`)
    .then(response => {
        return (response.data);
    })

}

export const getUnfollowFriend = (id) => {

    return instance.delete(`follow/${id}`)
    .then(response => {
        return response.data.resultCode;
    })

}

export const getFollowFriend = (id) => {

    return instance.post(`follow/${id}`, {})
    .then(response => {
        return response.data.resultCode;
    })

}