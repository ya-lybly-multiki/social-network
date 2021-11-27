import axios from "axios";
import {getUserProfile} from "../Redux/Profile-reduser";




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
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },
    unFollow(userId:number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getUserProfile (userId:string) {
        return instance.get(`/profile/` + userId) .then(response => response.data)
    }
}

export const AuthApi = {
    getSetUserData() {
        return instance.get(`/auth/me`).then(response => response.data)
    }
}