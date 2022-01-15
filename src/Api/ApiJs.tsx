import axios, {AxiosResponse} from "axios";

type ResultCodeType = 0 | 1

export type ResponseType<T> = {
    data: T
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}


export type DataLoginType = {
    resultCode: ResultCodeType
    messages: Array<string>,
    data: {
        userId: number
        email:string
        login:string
    }
}

type DataPostRequestType = {
    email: string
    password: string
    rememberMe: boolean
}
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


}

export const profileAPI = {
    getUserProfile (userId:string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId:string) {
        return instance.get(`profile/status/` + userId)
            .then(res => res.data)
    },
    updateUserStatus(userStatus:string) {
       return  instance.put(`profile/status`, {userStatus}).then(res => res.data)

    },
    savePhoto(File:File) {
        const formData = new FormData()
        formData.append("image",File)
        return instance.put(`profile/photo`, formData, {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}

export const AuthApi = {
    me () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login (email:string,password:string,rememberMe:boolean = false) {
        return instance.post<DataPostRequestType, AxiosResponse<DataLoginType>>
        (`auth/login`,{email,password,rememberMe}).then(res => res.data)
    },
    logOut () {
        return instance.delete(`auth/login`,).then(res => res.data)
    },
}