const initialState = {
    appStatus: "idle" as RequestStatusType,
    error: null as AppErrorType,
    initialization: false as boolean
}

export const AppReducer = (state = initialState,action:ActionsAppType):AppInitialStateType  => {
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
                initialization: action.value
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

export const setInitial = (value:boolean) => {
    return {
        type: 'APP/SET-APP-INITIAL',
        value
    } as const
}


export type setAppErrorType = ReturnType<typeof setAppError>
export type setAppStatusType = ReturnType<typeof setAppStatus>
export type setInitialType = ReturnType<typeof setInitial>

type ActionsAppType = setAppErrorType | setAppStatusType | setInitialType


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type AppErrorType = string | null

type AppInitialStateType = typeof initialState
