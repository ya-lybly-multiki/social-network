import {UserType} from "../components/Users/Users";
import {usersAPI} from "../Api/ApiJs";
import {Dispatch} from "redux";
import {RequestStatusType} from "./App-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/ErrorHandler";

export type UsersType = Array<UserType>

export type UserPageType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: RequestStatusType | null
    followingInProgress: Array<number>
}

let initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 16,
    currentPage: 1,
    isFetching: 'idle',
    followingInProgress: []
}


const UsersReducer = (state = initialState, action: GlobalACType): UserPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UN-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUserCount: action.usersCount
            }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "TOGGLE-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.disableButton === 'loading'
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]

            }
        }
        default:
            return state
    }
}

export type GlobalACType =
    UnfollowType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingType
    | toggleInProgressType
    | FollowType

export const followSuccess = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowSuccess = (userId: number) => {
    return {
        type: "UN-FOLLOW",
        userId: userId
    } as const
}

export const setUsers = (users: UsersType) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        usersCount
    } as const
}

export const toggleIsFetching = (isFetching: RequestStatusType | null) => {
    return {
        type: "TOGGLE-IS-FETCHING",
         isFetching
    } as const
}

export const toggleInProgress = (disableButton: RequestStatusType | null, userId: number) => {
    return {
        type: 'TOGGLE-IN-PROGRESS',
        disableButton,
        userId
    } as const
}

export type toggleInProgressType = ReturnType<typeof toggleInProgress>

export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>

export type FollowType = ReturnType<typeof followSuccess>

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>

export type UnfollowType = ReturnType<typeof unFollowSuccess>

export type setUsersACType = ReturnType<typeof setUsers>



// export const getUsers = (page: number, pageSize: number) => {
//     return (dispatch: Dispatch<GlobalACType>) => {
//         dispatch(toggleIsFetching('loading'));
//         dispatch(setCurrentPage(page))
//
//         usersAPI.getUsers(page, pageSize).then(data => {
//             dispatch(toggleIsFetching('succeeded'));
//             dispatch(setUsers(data.items));
//             dispatch(setTotalUsersCount(data.totalCount));
//         })
//     }
// }

export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching('loading'));
    dispatch(setCurrentPage(page))
    try {
        const res = await usersAPI.getUsers(page, pageSize);
        dispatch(setUsers(res.items));
        dispatch(setTotalUsersCount(res.totalCount));
        dispatch(toggleIsFetching('succeeded'));
    } catch (e) {
        handleServerNetworkError((e as Error), dispatch);
    }

}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleInProgress('loading', userId));
    try {
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
    } catch (error) {
        dispatch(toggleInProgress('failed',userId))
    }
    dispatch(toggleInProgress("succeeded", userId));
}
export const unFollow = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.follow(userId)
        if (res.data.resultCode === 0) {
            dispatch(toggleInProgress('succeeded', userId))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError((e as Error), dispatch)
        dispatch(toggleInProgress('failed', userId))

    }
}
export default UsersReducer