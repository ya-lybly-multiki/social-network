import {Dispatch} from "redux";

import {AuthApi} from "../Api/ApiJs";

export type AuthType = {
    userId:number | null
    email: string | null
    login: string | null
    isAuth:boolean
}

let initialState:AuthType = {
    userId:null,
    email: null,
    login: null,
    isAuth:false
}

function AuthReducer(state = initialState, action:GlobalType) {
        switch (action.type) {
            case "SET-USER-DATA":
                return {
                    ...state,
                   ...action.data,
                    isAuth:true
                }
            default: return state
        }
}

type GlobalType = setUserDataType

type setUserDataType = ReturnType<typeof setUserData>

export const setUserData = (userId:number, email:string,login:string) => {
    return {
        type:"SET-USER-DATA",
        data: {
            userId,
            email,
            login
        }
    } as const
}


export const getSetUserData = () => {
        return (dispatch: Dispatch<GlobalType>) => {
            AuthApi.me()
                .then(response => {
                if (response.resultCode === 0) {
                    const {userId, email, login} = response.data
                    dispatch(setUserData(userId, email, login))
                }
            })
        }
}


export const login = (email:string,password:string,rememberMe:boolean) => {
    return (dispatch: Dispatch<GlobalType>) => {
        AuthApi.login(email,password,rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                   dispatch(getSetUserData())
                }
            })
    }
}

export default AuthReducer