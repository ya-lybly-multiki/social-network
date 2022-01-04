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
        case "SAMURAI-NETWORK/SET-USER-DATA":
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


export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SAMURAI-NETWORK/SET-USER-DATA",
        data: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}


export const getAuthUserData = (): ThunkType<GlobalType> => async (dispatch) => {
    const response = await AuthApi.me()
    // если resultCode = 0 - залогинился, 1 - нет
    if (response.resultCode === 0) {
        const {id, login, email} = response.data
        dispatch(setUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType<GlobalType> =>
    async (dispatch) => {
        const response = await AuthApi.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            await dispatch(getAuthUserData())
        }
    }

export const logOut = (): ThunkType<GlobalType> =>
    async (dispatch) => {
        const response = await AuthApi.logOut()
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }

export default AuthReducer;