import {UserType} from "../components/Users/Users";
import {usersAPI} from "../Api/ApiJs";
import {Dispatch} from "redux";

export type UsersType = Array<UserType>

export type UserPageType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean | null
    followingInProgress: Array<number>
}

let initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 16,
    currentPage: 1,
    isFetching: true,
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
                followingInProgress: action.isFetching
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

export const toggleIsFetching = (isFetching: boolean | null) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching: isFetching
    } as const
}

export const toggleInProgress = (isFetching: boolean | null, userId: number) => {
    return {
        type: 'TOGGLE-IN-PROGRESS',
        isFetching,
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

export const getUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch<GlobalACType>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId:number) => {
    return (dispatch: Dispatch<GlobalACType>) => {
        dispatch(toggleInProgress(true,userId));
        usersAPI.follow(userId)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleInProgress(false,userId));
        })
    }
}
export const unFollow = (userId:number) => {
    return (dispatch: Dispatch<GlobalACType>) => {
        dispatch(toggleInProgress(true,userId));
        usersAPI.unFollow(userId)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleInProgress(false,userId));
            })
    }
}
export default UsersReducer