import {UserType} from "../components/Users/Users";

export type UsersType = Array<UserType>

export type UserPageType = {
    users: UsersType
    pageSize:number
    totalUserCount:number
    currentPage:number
}

let initialState:UserPageType = {
    users: [],
    pageSize:5,
    totalUserCount:16,
    currentPage:1
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

            default: return state
        }
}

export type GlobalACType = toggleACType
    |  setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType

export const toggleAC = (userId:number) => {
    return {
        type: "TOGGLE",
        userId:userId
    } as const
}

export const setUsersAC = (users:UsersType) => {
  return {
      type: "SET-USERS",
      users
  } as const
}

export const setCurrentPageAC = (currentPage:number) => {
   return {
       type:"SET-CURRENT-PAGE",
       currentPage
   } as const
}

export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        usersCount
    } as const
}


export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export type toggleACType = ReturnType<typeof toggleAC>

export type setUsersACType = ReturnType<typeof setUsersAC>

export default UsersReducer