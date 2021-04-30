import * as axios from 'axios';


const instance = axios.create({ 
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "497dc92a-1721-4c91-9419-3f1a4e51ffce"
    }
});

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
    saveAvatar(file) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const getAuthMe = () => {
    return instance.get(`auth/me`);
}

export const authAPI = {
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    getUnfollowFriend(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data.resultCode;
        })
    },
    getFollowFriend(id) {
        return instance.post(`follow/${id}`, {})
        .then(response => {
            return response.data.resultCode;
        })
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}