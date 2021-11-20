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
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    }
}