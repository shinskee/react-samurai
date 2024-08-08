import axios from "axios"

const instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "5836017c-3b25-4b7f-9ef3-ad50f7f1ef0e"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    postFollow (userId) {
        return instanse.post(`follow/${userId}`)
    },
    deleteFollow (userId) {
        return instanse.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return instanse.get(`profile/${userId}`)
    },
    getMyProfile () {
        return instanse.get(`/auth/me`)
    }
}

export const authAPI = {
    getMe() {
        return instanse.get(`auth/me`)
    },
    login(email, password) {
        return instanse.post(`auth/login`, { email, password })
    },
    logout() {
        return instanse.delete(`auth/login`)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {
            status: status
        })
    }
}



