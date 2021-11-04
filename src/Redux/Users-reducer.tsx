
export type UserType = {
    followed: boolean
    id: number
    fullName: string
    status: string
    location: {city: string, country: string}
    avatar:string
}

let initialState = {
    users: [] as Array<UserType>
}

export type InitialStateType = typeof initialState

const UsersReducer = (state = initialState, action: GlobalACType):InitialStateType  => {
        switch (action.type) {
            case "TOGGLE":
                return {
                    ...state,
                    users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
                }
            case "SET-USERS":
                return {
                    ...state,
                    users: [...state.users, action.users]
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



export const setUsersAC = (users:UserType) => {
  return {
      type: "SET-USERS",
      users:users
  } as const
}

export type toggleACType = ReturnType<typeof toggleAC>



export type setUsersACType = ReturnType<typeof setUsersAC>

export default UsersReducer