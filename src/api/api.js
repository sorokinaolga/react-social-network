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

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    },
}

export const getAuthMe = () => {
    return instance.get(`auth/me`);
}

export const authAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    
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