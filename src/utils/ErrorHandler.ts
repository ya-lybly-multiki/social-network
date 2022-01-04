

import {Dispatch} from 'redux'
import {setAppError, setAppErrorType, setAppStatus, setAppStatusType} from "../Redux/App-reducer";
import {ResponseType} from "../Api/ApiJs";

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<setAppErrorType | setAppStatusType>) => {
    if (data.messages.length) {
        dispatch(setAppError(data.messages[0]))
    } else {
        dispatch(setAppError('Some error occurred'))
    }
    dispatch(setAppStatus('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<setAppErrorType | setAppStatusType>) => {
    dispatch(setAppError(error.message ? error.message : 'Some error occurred'))
    dispatch(setAppStatus('failed'))
}
