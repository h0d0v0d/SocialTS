import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '42ffa56e-0052-4784-9ff9-aa02eb0a64fe'
    }
})

export function getUsersAPI(currentPage: number = 1, pageSize: number = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
}

export function followAPI(userId: number) {
    return instance.post(`follow/${userId}`).then(res => res.data)
}

export function unFollowAPI(userId: number) {
    return instance.delete(`follow/${userId}`).then(res => res.data)
}

export function authAPI() {
    return instance.get(`auth/me`).then(res => res.data.data)
}

export function getProfileUserData(id: number) {
    return instance.get(`profile/${id}`)
}