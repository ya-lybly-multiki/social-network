import {Action, Dispatch} from "redux";

import {AuthApi} from "../Api/ApiJs";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./Redux-store";


type ThunkType<A extends Action> = ThunkAction<Promise<void>, AppStateType, unknown, A>

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

function AuthReducer(state = initialState, action: GlobalType) {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

type GlobalType = setUserDataType

type setUserDataType = ReturnType<typeof setUserData>

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth:boolean) => {
    return {
        type: "SET-USER-DATA",
        data: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}


export const getSetUserData = () => {

    return (dispatch: Dispatch<GlobalType>) => {
        AuthApi.me()
            .then(response => {
                if (response.resultCode === 0) {
                    const {userId, email, login} = response.data
                    dispatch(setUserData(userId, email, login,true))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType<GlobalType> =>
    async (dispatch) => {
        AuthApi.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(getSetUserData())
                }
            })
}

export const logOut = (): ThunkType<GlobalType> =>
    async (dispatch) => {
        AuthApi.logOut()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserData(null,null,null,false))
                }
            })
    }

export default AuthReducer;