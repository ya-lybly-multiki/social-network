import {UserType} from "../components/Users/Users";

export type UsersType = Array<UserType>

export type UserPageType = {
    users: UsersType
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching:boolean | null
}

let initialState:UserPageType = {
    users: [],
    pageSize:5,
    totalUserCount:16,
    currentPage:1,
    isFetching:true
}



const UsersReducer = (state = initialState, action: GlobalACType):UserPageType  => {
        switch (action.type) {
            case "TOGGLE":
                return {
                    ...state,
                    users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
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
                    isFetching:action.isFetching
                }
            }
            default: return state
        }
}

export type GlobalACType =
    toggleACType
    |  setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingType

export const toggle = (userId:number) => {
    return {
        type: "TOGGLE",
        userId:userId
    } as const
}

export const setUsers = (users:UsersType) => {
  return {
      type: "SET-USERS",
      users
  } as const
}

export const setCurrentPage = (currentPage:number) => {
   return {
       type:"SET-CURRENT-PAGE",
       currentPage
   } as const
}

export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        usersCount
    } as const
}

export const toggleIsFetching = (isFetching:boolean | null) => {
  return {
      type:"TOGGLE-IS-FETCHING",
      isFetching:isFetching
  } as const
}

export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>

export type toggleACType = ReturnType<typeof toggle>

export type setUsersACType = ReturnType<typeof setUsers>

export default UsersReducer