import axios from "axios";





const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ce12de69-a005-4f3b-9f12-4c131a9f521e'
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data)
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)

    },
    unFollow(userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile (userId:string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId:string) {
        return instance.get(`profile/status/` + userId)
            .then(res => res.data)
    }
}

export const AuthApi = {
    me () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}