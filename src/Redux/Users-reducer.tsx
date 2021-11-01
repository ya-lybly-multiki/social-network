
export type UserType = {
    followed: boolean
    id: number
    fullName: string
    status: string
    location: {city: string, country: string}
    avatar:string
}

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Artem",
            status: "Clown",
            avatar:"https://steamavatar.io/img/14777429717elSu.jpg",
            location: {
                city: "Belgorod",
                country: "Russia"
            }
        },
        {
            id: 2,
            followed: true,
            fullName: "Sofiya",
            status: "Best of the best",
            avatar:"https://steamuserimages-a.akamaihd.net/ugc/933814008881052346/EEE5323E6BE686EDC57F8EDFBCC71E6E5117FFE2/",
            location: {
                city: "Belgorod",
                country: "Russia"
            }
        }
    ] as Array<UserType>
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