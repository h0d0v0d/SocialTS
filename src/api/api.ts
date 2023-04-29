import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '42ffa56e-0052-4784-9ff9-aa02eb0a64fe'
    }
})

export const API = {
    auth: () => instance.get(`auth/me`).then(res => res.data),
    getProfileUserData: (id: number) => instance.get(`profile/${id}`),
    getStatus: (id: number) => instance.get(`profile/status/${id}`).then(res => res.data),
    changeStatus: (status: string) => instance.put(`profile/status`, {status}),
    getUsers: (currentPage: number = 1, pageSize: number = 5) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data),
    follow: (userId: number) => instance.post(`follow/${userId}`).then(res => res.data),
    unFollow: (userId: number) => instance.delete(`follow/${userId}`).then(res => res.data)
}






