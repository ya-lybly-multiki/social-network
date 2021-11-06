import {UserType} from "../components/Users/Users";

export type UsersType = Array<UserType>

export type UserPageType = {
    users: UsersType
}

let initialState:UserPageType = {
    users: []
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
            default: return state
        }
}

export type GlobalACType = toggleACType |  setUsersACType

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

export type toggleACType = ReturnType<typeof toggleAC>

export type setUsersACType = ReturnType<typeof setUsersAC>

export default UsersReducer