import {getAuthUserData} from "./Auth-reducer";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./Redux-store";

const initialState = {
    appStatus: "idle" as RequestStatusType,
    error: null as AppErrorType,
    initialization: false as boolean
}

export const appReducer = (state = initialState,action:ActionsAppType):AppInitialStateType  => {
    switch (action.type) {
        case "APP/SET-APP-ERROR":
            return  {
                ...state,
                error: action.error
            }
        case "APP/SET-APP-STATUS":
            return  {
                ...state,
                appStatus: action.status
            }
        case "APP/SET-APP-INITIAL":
            return  {
                ...state,
                initialization: true
            }
        default: return state
    }
}

export const setAppError = (error: string | null) => {
    return {
        type: 'APP/SET-APP-ERROR',
        error
    } as const
}

export const setAppStatus = (status: RequestStatusType) => {
    return {
        type: 'APP/SET-APP-STATUS',
        status
    } as const
}

export const setInitial = () => {
    return {
        type: 'APP/SET-APP-INITIAL',
    } as const
}



export const initializeApp = (): ThunkType<ActionsAppType> => async (dispatch) => {
    // getAuthUserData() возвращает promise
    dispatch(getAuthUserData()).then(res => {
        dispatch(setInitial())
    })
}

export type setAppErrorType = ReturnType<typeof setAppError>
export type setAppStatusType = ReturnType<typeof setAppStatus>
export type setInitialType = ReturnType<typeof setInitial>


type ActionsAppType = setAppErrorType | setAppStatusType | setInitialType

type ThunkType<A extends Action> = ThunkAction<Promise<void>, AppStateType, unknown, A>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type AppErrorType = string | null

type AppInitialStateType = typeof initialState
